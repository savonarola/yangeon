defmodule Yangeon.Factory do

  alias Yangeon.Grid
  alias Yangeon.Board
  alias Yangeon.Board.GameOpts

  def board(%GameOpts{} = game_opts \\ %GameOpts{}) do
    :random.seed(:erlang.phash2([node()]), :erlang.monotonic_time(), :erlang.unique_integer())

    {rows, cols} = game_opts.size
    grid = Grid.new(rows, cols)

    Board.new(grid, game_opts)
  end

end
