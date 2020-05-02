all: push

build:
	docker build -t yangeon .

tag: build
	docker tag yangeon registry.rubybox.ru/yangeon

push: tag
	docker push registry.rubybox.ru/yangeon

run: build
	docker run -p 8000:8000 --env-file config/docker.env yangeon
