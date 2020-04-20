defmodule Yangeon.Visualize.Grid do

  alias Yangeon.Cell
  alias Yangeon.Grid
  alias Yangeon.Visualize.Svg
  alias Yangeon.Visualize.Opts

  def draw(%Grid{} = grid, %Opts{} = opts) do
    grid
    |> Grid.cells()
    |> Enum.map(fn cell -> draw_cell(opts, grid, cell) end)
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
end
