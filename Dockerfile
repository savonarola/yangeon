FROM bitwalker/alpine-elixir-phoenix:latest

ENV MIX_ENV=prod

ADD . /app
WORKDIR /app

RUN mix do deps.get, compile

RUN cd apps/yangeon_web/assets && \
    npm install && \
    npm run deploy

RUN mix do phx.digest, release

EXPOSE 4000

CMD ["/app/_build/prod/rel/main/bin/main", "start"]

