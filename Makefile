all: push

build:
	docker build -t yangeon .

tag: build
	docker tag yangeon cr.yandex/crpj428ot3ll9595ju8d/yangeon

push: tag
	docker push cr.yandex/crpj428ot3ll9595ju8d/yangeon

run: build
	docker run -p 4000:4000 --env-file config/docker.env yangeon
