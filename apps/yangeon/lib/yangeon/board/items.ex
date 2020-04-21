defmodule Yangeon.Board.Items do

  alias Yangeon.Board.Rooms
  alias Yangeon.Cell


  def generate_not_in_rooms(count, rooms, size, generated \\ [])

  def generate_not_in_rooms(0, _rooms, _size, generated), do: MapSet.new(generated)
  def generate_not_in_rooms(count, rooms, {rows, cols}, generated) do
    :random.seed(:erlang.phash2([node()]), :erlang.monotonic_time(), :erlang.unique_integer())
    cell = Cell.new(:random.uniform(rows) - 1, :random.uniform(cols) - 1)
    if Rooms.in_a_room?(rooms, cell) do
      generate_not_in_rooms(count, rooms, {rows, cols}, generated)
    else
      generate_not_in_rooms(count - 1, rooms, {rows, cols}, [cell | generated])
    end
  end

end
