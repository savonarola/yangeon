defmodule Yangeon.Parser do

  alias Yangeon.Grid
  alias Yangeon.Cell
  alias Yangeon.Board

  def parse(spec) do
    with [size_header, room_size_header, room_header | maze_spec] <- String.split(spec, "\n"),
      {:ok, {rows, cols}} <- parse_size(size_header),
      {:ok, room_size} <- parse_room_size(room_size_header),
      {:ok, rooms} <- parse_rooms(room_header),
      {:ok, grid} <- parse_maze(maze_spec, rows, cols)
    do
      {:ok, Board.new({rows, cols}, room_size, rooms, grid)}
    end
  end

  defp parse_size(size_header) when is_binary(size_header) do
    with ["Size", size_spec] <- String.split(size_header, ~r{:\s*}, trim: true),
      [rows_s, cols_s] <- String.split(size_spec, "x"),
      {rows, ""} <- Integer.parse(rows_s),
      {cols, ""} <- Integer.parse(cols_s)
    do
      {:ok, {rows, cols}}
    else
      _ -> {:error, :size}
    end
  end

  defp parse_room_size(room_size_header) when is_binary(room_size_header) do
    with ["RoomSize", size_spec] <- String.split(room_size_header, ~r{:\s*}, trim: true),
      {room_size, ""} <- Integer.parse(size_spec)
    do
      {:ok, room_size}
    else
      _ -> {:error, :room_size}
    end
  end

  defp parse_rooms(room_header) when is_binary(room_header) do
    with ["Rooms", room_spec] <- String.split(room_header, ~r{:\s*}, trim: true),
      room_specs <- String.split(room_spec, ~r{;\s*}, trim: true),
      {:ok, rooms} <- parse_room_specs(room_specs)
    do
      {:ok, rooms}
    else
      _ -> {:error, :rooms}
    end
  end

  defp parse_room_specs(specs, parsed \\ [])
  defp parse_room_specs([], parsed), do: {:ok, Enum.reverse(parsed)}
  defp parse_room_specs([spec | specs], parsed) do
    with [rs, cs] <- String.split(spec, ",", trim: true),
      {r, ""} <- Integer.parse(rs),
      {c, ""} <- Integer.parse(cs)
    do
      parse_room_specs(specs, [{r, c} | parsed])
    else
      _ -> :error
    end
  end

  defp parse_maze(maze_lines, rows, cols) do
    map = lines_to_map(maze_lines)
    conns_and_links = for r <- 0 .. rows - 1 do
      for c <- 0 .. cols - 1 do
        {rigth_conn, right_link} = if c < cols - 1 do
          conn = {Cell.new(r, c), Cell.new(r, c + 1)}
          if map[{2 * r + 1, 2 * c + 1 + 1}] == " " do
            {[conn], [conn]}
          else
            {[conn], []}
          end
        else
          {[], []}
        end

        {bottom_conn, bottom_link} = if r < rows - 1 do
          conn = {Cell.new(r, c), Cell.new(r + 1, c)}
          if map[{2 * r + 1 + 1, 2 * c + 1}] == " " do
            {[conn], [conn]}
          else
            {[conn], []}
          end
        else
          {[], []}
        end

        {rigth_conn ++ bottom_conn, right_link ++ bottom_link}
      end
    end

    grid =
      conns_and_links
      |> List.flatten()
      |> Enum.reduce(Grid.new(rows, cols), fn {conns, links}, grid ->
        g1 =
          conns
          |> Enum.reduce(grid, fn {c1, c2}, grid ->
            Grid.add_conn(grid, c1, c2)
          end)
        g2 =
          links
          |> Enum.reduce(g1, fn {c1, c2}, grid ->
            Grid.add_link(grid, c1, c2)
          end)
        g2
      end)
    {:ok, grid}
  end

  defp lines_to_map(lines) do
    lines
    |> Enum.with_index()
    |> Enum.map(fn {line, row} ->
      line
      |> String.codepoints()
      |> Enum.with_index()
      |> Enum.map(fn {ch, col} ->
        {{row, col}, ch}
      end)
    end)
    |> List.flatten()
    |> Map.new()
  end


end
