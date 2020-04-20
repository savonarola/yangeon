defmodule Yangeon.Visualize.BoardTest do
  use ExUnit.Case

  alias Yangeon.Parser
  alias Yangeon.Visualize.Board
  alias Yangeon.Visualize.Opts


  setup do
    dungeon = Support.Parser.fixture("dungeon.txt")
    {:ok, board} = Parser.parse(dungeon)
    {:ok, board: board}
  end

  test "draw", %{board: board} do
    opts = %Opts{}
    assert svg = Board.draw(board, opts)
    File.write!("/tmp/b.svg", svg)
  end

end
