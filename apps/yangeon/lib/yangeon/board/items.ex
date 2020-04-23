defmodule Yangeon.Board.Items do

  alias Yangeon.Board.Items
  alias Yangeon.Cell
  alias Yangeon.Grid


  defstruct [
    grid: nil,
    occupied: MapSet.new()
  ]

  def new(grid) do
    %Items{grid: grid}
  end

  def generate(items) do
    {new_items, generated} = generate(items, 1)
    {new_items, generated |> MapSet.to_list() |> hd()}
  end

  def generate(%Items{grid: grid, occupied: occupied} = items, count) do
    cells =
      grid
      |> Grid.cells()
      |> MapSet.difference(occupied)
      |> Enum.shuffle()
      |> Enum.take(count)
      |> MapSet.new()
    {%Items{items | occupied: MapSet.union(occupied, cells)}, cells}
  end

  def occupied?(%Items{occupied: occupied}, %Cell{} = cell) do
    cell in occupied
  end

  def occupy(%Items{occupied: occupied} = items, %Cell{} = cell) do
    %Items{items | occupied: MapSet.put(occupied, cell)}
  end

end
