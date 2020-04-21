defmodule Yangeon.Board.Rooms do

  alias Yangeon.Cell
  alias Yangeon.Board.Rooms

  defstruct [
    rooms: MapSet.new(),
    room_size: 0
  ]

  def new(rooms, room_size) do
    %Rooms{rooms: MapSet.new(rooms), room_size: room_size}
  end

  def in_a_room?(%Rooms{rooms: rooms, room_size: size}, %Cell{row: row, col: col}) do
    Enum.any?(rooms, fn {rr, rc} ->
      rr <= row && row < rr + size && rc <= col && col < rc + size
    end)
  end

end
