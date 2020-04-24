FROM ubuntu:xenial

MAINTAINER Ilya Averyanov <av@rubybox.ru>

ENV LANG=en_US.UTF-8

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

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt-get install -y nodejs

COPY . /app
WORKDIR /app

