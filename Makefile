all: push

build:
	docker build -t yangeon .

tag: build
	docker tag yangeon registry.digitalocean.com/rubybox/yangeon

push: tag
	docker push registry.digitalocean.com/rubybox/yangeon

run: build
	docker run -p 4000:4000 --env-file config/docker.env yangeon
