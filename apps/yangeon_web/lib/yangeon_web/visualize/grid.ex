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
    cz = opts.cell_size
    ww = opts.wall_width

    x1 = cell.col * cz + ww
    y1 = cell.row * cz + ww
    x2 = (cell.col + 1) * cz - ww
    y2 = (cell.row + 1) * cz - ww

    main_rect = Svg.rect(x1, y1, cz - 2*ww, cz - 2*ww, fill: opts.floor_color)

    east = Grid.east(grid, cell)
    south = Grid.south(grid, cell)
    south_east = south && Grid.east(grid, south)

    east_passage = if Grid.linked?(grid, cell, east) do
      Svg.rect(x2, y1, 2*ww, cz - 2*ww, fill: opts.floor_color)
    else
      []
    end

    south_passage = if Grid.linked?(grid, cell, south) do
      Svg.rect(x1, y2, cz - 2*ww, 2*ww, fill: opts.floor_color)
    else
      []
    end

    south_east_passage = if south_east && Grid.linked?(grid, cell, east) && Grid.linked?(grid, cell, south) && Grid.linked?(grid, south, south_east) && Grid.linked?(grid, east, south_east) do
      Svg.rect(x2, y2, 2*ww, 2*ww, fill: opts.floor_color)
    else
      []
    end

    [main_rect, east_passage, south_passage, south_east_passage]
  end

  def draw_item(item, %Cell{row: row, col: col}, opts) do
    y = (row + 1) * opts.cell_size - opts.wall_width
    x = col * opts.cell_size + opts.wall_width
    Svg.ra_symbol(item, x, y - 1, opts.cell_size - opts.wall_width*2 - 2, opts)
  end

  def draw_items(item, cells, opts) do
    Enum.map(cells, &draw_item(item, &1, opts))
  end

  def draw_shadow_layer(%Grid{} = grid, visible_cells, %Opts{} = opts) do
    grid
    |> Grid.cells()
    |> Enum.filter(fn cell -> not (cell in visible_cells) end)
    |> Enum.map(fn cell -> draw_cell_shadow_layer(opts, cell) end)
    |> List.flatten()
  end

  defp draw_cell_shadow_layer(%Opts{} = opts, %Cell{} = cell) do
    x1 = cell.col * opts.cell_size
    y1 = cell.row * opts.cell_size

    Svg.rect(x1, y1, opts.cell_size, opts.cell_size, %{fill: opts.shadow_fill})
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
