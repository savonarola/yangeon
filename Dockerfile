FROM ubuntu:xenial AS build

ENV LANG=ru_RU.UTF-8

RUN apt-get clean \
    && apt-get update \
    && apt-get install -y wget locales curl git unzip make gcc g++ \
    && locale-gen $LANG \
    && wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb \
    && dpkg -i erlang-solutions_1.0_all.deb \
    && apt-get update \
    && apt-get install -y erlang elixir \
    && mix local.hex --force \
    && mix local.rebar --force

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

COPY . /app
WORKDIR /app

ENV MIX_ENV=prod
ENV PORT=8000
EXPOSE 8000

RUN mix deps.get
RUN cd apps/yangeon_web/assets && npm install
RUN mix deps.compile
RUN cd apps/yangeon_web/assets && npm run deploy
RUN mix phx.digest
RUN mix release main --overwrite

FROM ubuntu:xenial

ENV LANG=ru_RU.UTF-8

RUN apt-get clean \
    && apt-get update \
    && apt-get install -y locales openssl \
    && locale-gen $LANG

COPY --from=build /app/_build/prod/rel/main/ /app

CMD ["app/bin/main", "start"]
