defmodule YangeonWeb.Visualize.Grid do

  alias Yangeon.Cell
  alias Yangeon.Grid
  alias YangeonWeb.Visualize.Svg
  alias YangeonWeb.Visualize.Opts

  def size(%Grid{} = grid, %Opts{} = opts) do
    width = grid.cols * opts.cell_size
    height = grid.rows * opts.cell_size
    {width, height}
  end

  def draw(%Grid{} = grid, %Opts{} = opts) do
    grid
    |> Grid.cells()
    |> Enum.map(fn cell -> draw_cell(opts, grid, cell) end)
    |> List.flatten()
  end

  def draw_event_layer(%Grid{} = grid, %Opts{} = opts) do
    grid
    |> Grid.cells()
    |> Enum.map(fn cell -> draw_cell_event_layer(opts, cell) end)
    |> List.flatten()
  end

  defp draw_cell(%Opts{} = opts, %Grid{} = grid, %Cell{} = cell) do
    x1 = cell.col * opts.cell_size
    y1 = cell.row * opts.cell_size
    x2 = (cell.col + 1) * opts.cell_size
    y2 = (cell.row + 1) * opts.cell_size

    north_line = if Grid.north(grid, cell), do: [], else: Svg.line(x1, y1, x2, y1, stroke: opts.wall_color)
    west_line = if Grid.west(grid, cell), do: [], else: Svg.line(x1, y1, x1, y2, stroke: opts.wall_color)

    east = Grid.east(grid, cell)
    south = Grid.south(grid, cell)

    east_line = if Grid.linked?(grid, cell, east), do: [], else: Svg.line(x2, y1, x2, y2, stroke: opts.wall_color)
    south_line = if Grid.linked?(grid, cell, south), do: [], else: Svg.line(x1, y2, x2, y2, stroke: opts.wall_color)

    [north_line, west_line, east_line, south_line]
  end

  def draw_item(item, %Cell{row: row, col: col}, opts) do
    y = (row + 1) * opts.cell_size
    x = col * opts.cell_size
    Svg.ra_symbol(item, x, y - 2, opts.cell_size - 3)
  end

  require Logger

  def draw_items(item, cells, opts) do
    Enum.map(cells, &draw_item(item, &1, opts))
  end

  defp draw_cell_event_layer(%Opts{} = opts, %Cell{} = cell) do
    x1 = cell.col * opts.cell_size
    y1 = cell.row * opts.cell_size

    Svg.rect(x1, y1, opts.cell_size, opts.cell_size, %{
      "phx-click" => "cell-click",
      "phx-value-row" => cell.row,
      "phx-value-col" => cell.col,
      "fill-opacity" => 0
    })
  end
end
