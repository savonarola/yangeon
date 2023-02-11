FROM elixir:1.11 AS build

ENV LANG=ru_RU.UTF-8

RUN mix local.hex --force \
    && mix local.rebar --force

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

COPY . /app
WORKDIR /app

ENV MIX_ENV=prod
ENV PORT=8000
EXPOSE 8000

RUN mix deps.get
RUN cd apps/yangeon_web/assets && npm install
RUN mix deps.compile
RUN cd apps/yangeon_web/assets && node_modules/esbuild/bin/esbuild js/app.js --bundle --loader:.js=jsx --loader:.eot=copy --loader:.svg=copy --loader:.ttf=copy --loader:.woff2=copy --loader:.woff=copy --outfile=../priv/static/js/app.js
RUN mix phx.digest
RUN mix release main --overwrite

FROM ubuntu:focal

ENV LANG=ru_RU.UTF-8

RUN apt-get clean \
    && apt-get update \
    && apt-get install -y locales openssl \
    && locale-gen $LANG

COPY --from=build /app/_build/prod/rel/main/ /app

CMD ["app/bin/main", "start"]
