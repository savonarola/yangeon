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
    grid =
      %Grid{rows: rows, cols: cols}
      |> generate_rectangular_grid()
      |> generate_maze()
  end

  def cells(%Grid{} = grid) do
    grid.conns
    |> Map.keys()
    |> MapSet.new()
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

  def links(grid, cell, depth, found \\ MapSet.new())

  def links(_grid, _cell, 0, found), do: found

  def links(%Grid{} = grid, %Cell{} = cell, depth, found) when depth > 0 do
    linked =
      found
      |> MapSet.put(cell)
      |> Enum.map(fn c -> Grid.links(grid,c) |> MapSet.to_list() end)
      |> List.flatten()
      |> MapSet.new()
    links(grid, cell, depth - 1, MapSet.union(found, linked))
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

  defp generate_maze(grid, stack \\ [Cell.new(0, 0)])

  defp generate_maze(%Grid{} = grid, []) do
    grid
  end

  defp generate_maze(%Grid{} = grid, [current | rest] = stack) do
    neighbours =
      conns(grid, current)
      |> Enum.filter(fn cell -> links(grid, cell) |> Enum.empty?() end)

    if Enum.empty?(neighbours) do
      generate_maze(grid, rest)
    else
      neighbour =
        neighbours
        |> Enum.shuffle()
        |> hd()
        generate_maze(Grid.add_link(grid, current, neighbour), [neighbour | stack])
    end
  end

  def generate_rectangular_grid(%Grid{rows: rows, cols: cols} = grid) do
    cells = for r <- 0..rows-1, c <- 0..cols-1 do
      Cell.new(r, c)
    end

    cells
    |> Enum.reduce(grid, fn cell, grid ->
      east_cell = if cell.col < cols - 1, do: [Cell.new(cell.row, cell.col + 1)], else: []
      west_cell = if cell.row < rows - 1, do: [Cell.new(cell.row + 1, cell.col)], else: []
      cells_to_conn = east_cell ++ west_cell
      Enum.reduce(cells_to_conn, grid, fn cells_to_conn, grid ->
        Grid.add_conn(grid, cell, cells_to_conn)
      end)
    end)
  end

end

# class RecursiveBacktracker

#   def self.on(grid, start_at: grid.random_cell)
#     stack = []
#     stack.push start_at

#     while stack.any?
#       current = stack.last
#       neighbors = current.neighbors.select { |n| n.links.empty? }

#       if neighbors.empty?
#         stack.pop
#       else
#         neighbor = neighbors.sample
#         current.link(neighbor)
#         stack.push(neighbor)
#       end
#     end

#     grid
#   end

#   def self.recursively_on(grid, start_at: grid.random_cell)
#     walk_from(start_at)
#     grid
#   end

#   def self.walk_from(cell)
#     cell.neighbors.shuffle.each do |neighbor|
#       if neighbor.links.empty?
#         cell.link(neighbor)
#         walk_from(neighbor)
#       end
#     end
#   end

# end
