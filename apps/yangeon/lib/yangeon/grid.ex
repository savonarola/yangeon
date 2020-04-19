defmodule Yangeon.Grid do

  defstruct [
    conns: %{},
    links: %{}
  ]

  alias Yangeon.Grid
  alias Yangeon.Cell

  @spec new :: Grid.t()
  def new() do
    %Grid{}
  end

  @spec add_cell(Grid.t(), Cell.t()) :: Grid.t()
  def add_cell(%Grid{} = grid, %Cell{} = cell) do
    new_conns = Map.put_new(grid.conns, cell, MapSet.new())
    %Grid{grid | conns: new_conns}
  end

  @spec add_conn(Grid.t(), Cell.t(), Cell.t()) :: Grid.t()
  def add_conn(%Grid{} = grid, %Cell{} = cell1, %Cell{} = cell2) do
    grid
    |> add_one_dir_conn(cell1, cell2)
    |> add_one_dir_conn(cell2, cell1)
  end

  @spec add_link(Grid.t(), Cell.t(), Cell.t()) :: Grid.t()
  def add_link(%Grid{} = grid, %Cell{} = cell1, %Cell{} = cell2) do
    grid
    |> add_conn(cell1, cell2)
    |> add_one_dir_link(cell2, cell1)
    |> add_one_dir_link(cell1, cell2)
  end

  defp add_one_dir_conn(%Grid{} = grid, %Cell{} = cell1, %Cell{} = cell2) do
    cell1_new_conns =
      grid.conns
      |> Map.get(cell1, MapSet.new())
      |> MapSet.put(cell2)

    new_conns = Map.put(grid.conns, cell1, cell1_new_conns)
    %Grid{grid | conns: new_conns}
  end

  defp add_one_dir_link(%Grid{} = grid, %Cell{} = cell1, %Cell{} = cell2) do
    cell1_new_links =
      grid.links
      |> Map.get(cell1, MapSet.new())
      |> MapSet.put(cell2)

    new_links = Map.put(grid.links, cell1, cell1_new_links)
    %Grid{grid | links: new_links}
  end

end
