defmodule Yangeon.Board do

  defstruct [
    grid: nil,
    size: {0, 0},
    room_size: 0,
    rooms: []
  ]

  alias Yangeon.Board

  def new({_rows, _cols} = size, room_size, rooms, grid) do
    %Board{
      size: size,
      room_size: room_size,
      rooms: rooms,
      grid: grid
    }
  end
end
