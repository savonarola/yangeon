defmodule Yangeon.ParserTest do
  use ExUnit.Case

  alias Yangeon.Parser
  alias Yangeon.Cell


  setup do
    dungeon = Support.Parser.fixture("dungeon.txt")
    {:ok, dungeon: dungeon}
  end

  test "parse", %{dungeon: dungeon} do
    assert {:ok, board} = Parser.parse(dungeon)

    assert Enum.count(board.grid.conns[Cell.new(1,1)]) == 4
    assert Enum.count(board.grid.conns[Cell.new(0,0)]) == 2

    assert Enum.count(board.grid.conns[Cell.new(29,29)]) == 2
    assert Enum.count(board.grid.links[Cell.new(0,0)]) == 2

  end

end
