defmodule Yangeon.Umbrella.MixProject do
  use Mix.Project

  def project do
    [
      apps_path: "apps",
      version: "0.1.0",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      aliases: aliases(),
      releases: releases(),
    ]
  end

  def releases do
    [
      main: [
        applications: [
          yangeon: :permanent,
          yangeon_web: :permanent,
        ]
      ]
    ]
  end

  defp deps do
    [{:benchfella, "~> 0.3.0"}]
  end

  defp aliases do
    [
      # run `mix setup` in all child apps
      setup: ["cmd mix setup"]
    ]
  end
end
