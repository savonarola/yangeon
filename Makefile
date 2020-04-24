# Чтобы не удалять volumes с зависимостями между билдами одной ветки:
# COMPOSE_DOWN_OPTS = --remove-orphans --rmi local

BUILD_ARTIFACT := /app/_docker_build/prod.tar.gz

include funbox.mk

prep:
	mix deps.get
	cd apps/yangeon_web/assets && npm install

build:
	mix deps.compile
	cd apps/yangeon_web/assets && npm run deploy
	mix phx.digest
	mix release main --overwrite
	tar czf prod.tar.gz _build/prod
	mv prod.tar.gz _docker_build/

check: test

test:
	true

clean:
	true

SECRET_KEY_BASE := $(shell pwgen 96)
RELEASE_ID := $(shell date +%Y%m%d%H%M%S)

deploy: fb-prep fb-build fb-extract-artifact fb-clean
	ansible-playbook -i deploy/hosts deploy/deploy.yml --extra-vars "secret_key_base=$(SECRET_KEY_BASE) release_id=$(RELEASE_ID)"


