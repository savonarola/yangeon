defmodule Yangeon.Grid do

  defstruct [
    rows: 0,
    cols: 0,
    conns: %{},
    links: %{}
  ]

  alias Yangeon.Grid
  alias Yangeon.Cell

  def new(rows, cols) do
    %Grid{rows: rows, cols: cols}
  end

  def cells(%Grid{} = grid) do
    Map.keys(grid.conns)
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

  def conns(%Grid{} = grid, %Cell{} = cell) do
    grid.conns
    |> Map.get(cell, MapSet.new())
  end

  def links(%Grid{} = grid, %Cell{} = cell) do
    grid.links
    |> Map.get(cell, MapSet.new())
  end

  def linked?(%Grid{} = grid, %Cell{} = cell, %Cell{} = other_cell) do
    other_cell in links(grid, cell)
  end

  def linked?(%Grid{} = _grid, %Cell{} = _cell, nil) do
    false
  end

  def has?(%Grid{} = grid, %Cell{} = cell) do
    Map.has_key?(grid.conns, cell)
  end

  def north(%Grid{} = grid, %Cell{} = cell), do: neighbour(grid, cell, {-1, 0})
  def south(%Grid{} = grid, %Cell{} = cell), do: neighbour(grid, cell, {1, 0})
  def west(%Grid{} = grid, %Cell{} = cell), do: neighbour(grid, cell, {0, -1})
  def east(%Grid{} = grid, %Cell{} = cell), do: neighbour(grid, cell, {0, +1})

  def neighbour(%Grid{} = grid, %Cell{} = cell, {row_shift, col_shift}) do
    neighbour_cell =  Cell.new(cell.row + row_shift, cell.col + col_shift)
    if has?(grid, neighbour_cell), do: neighbour_cell, else: nil
  end

  def neighbour?(%Grid{} = grid, %Cell{} = cell, %Cell{} = other_cell) do
    other_cell in conns(grid, cell)
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
