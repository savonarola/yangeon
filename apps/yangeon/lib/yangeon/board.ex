defmodule Yangeon.Board do

  alias Yangeon.Cell
  alias Yangeon.Grid
  alias Yangeon.Board.Items
  alias Yangeon.Board.Rooms


  defstruct [
    grid: nil,
    size: {0, 0},
    rooms: nil,
    player_loc: Cell.new(0, 0),
    torches: MapSet.new(),
    swords: MapSet.new()
  ]

  alias Yangeon.Board

  def new({_rows, _cols} = size, room_size, rooms, grid) do
    rooms = Rooms.new(rooms, room_size)
    %Board{
      size: size,
      rooms: rooms,
      grid: grid,
      torches: Items.generate_not_in_rooms(10, rooms, size),
      swords: Items.generate_not_in_rooms(10, rooms, size)
    }
  end

  def handle_event(board, {:cell_click, row, col}) do
    new_cell = Cell.new(row, col)

    if Grid.linked?(board.grid, board.player_loc, new_cell) do
      %Board{board | player_loc: new_cell}
    else
      board
    end
  end

  def handle_event(board, :go_north), do: handle_go(board, {-1, 0})
  def handle_event(board, :go_south), do: handle_go(board, {+1, 0})
  def handle_event(board, :go_west), do: handle_go(board, {0, -1})
  def handle_event(board, :go_east), do: handle_go(board, {0, +1})

  defp handle_go(board, {drow, dcol}) do
    new_cell = Cell.new(board.player_loc.row + drow, board.player_loc.col + dcol)

    if Grid.linked?(board.grid, board.player_loc, new_cell) do
      %Board{board | player_loc: new_cell}
    else
      board
    end
  end

end
