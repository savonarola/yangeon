defmodule Support.Parser do
  def fixture(filename) do
    __DIR__
    |> Path.join("parser_fixtures")
    |> Path.join(filename)
    |> File.read!()
  end
end
