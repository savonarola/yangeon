# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of Mix.Config.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
import Config

config :yangeon_web,
  generators: [context_app: :yangeon]

# Configures the endpoint
config :yangeon_web, YangeonWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "rodc03Mp99Wfr1PsWUWjzOSTG2iNcJIU3OWuOQ4LP1V5bYlHlUe6GdH8lMhkcHRc",
  render_errors: [view: YangeonWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Yangeon.PubSub,
  live_view: [signing_salt: "MPeGpW2r"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
