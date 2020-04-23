defmodule YangeonWeb.PageLive do
  use YangeonWeb, :live_view
  alias Yangeon.Factory
  alias Yangeon.Board
  alias Yangeon.Board.Player
  alias YangeonWeb.Visualize.Board, as: VBoard

  require Logger

  defp render_board_parts(socket, board) do
    socket
    |> assign(:board_height, VBoard.height(board))
    |> assign(:board_width, VBoard.width(board))
    |> assign(:board_svg_style, VBoard.svg_style(board))
    |> assign(:board_baze, raw(VBoard.draw_base(board)))
    |> assign(:board_dynamic, raw(VBoard.draw_dynamic(board)))
    |> assign(:board_events, raw(VBoard.draw_event_layer(board)))
    |> assign(:swords, board.player.swords)
    |> assign(:hearts, board.player.hearts)
    |> assign(:has_torch?, Player.has_torch?(board.player))
    |> assign(:has_key?, Player.has_key?(board.player))
    |> assign(:board, board)
  end

  @impl true
  def mount(_params, _session, socket) do
    board = Factory.board()
    {:ok, render_board_parts(socket, board)}
  end

  @impl true
  def handle_event("cell-click", %{"row" => row, "col" => col} = _params, socket) do
    new_board = Board.handle_event(socket.assigns.board, {:cell_click, String.to_integer(row), String.to_integer(col)})
    {:noreply, render_board_parts(socket, new_board)}
  end

  @key_events %{
    "ArrowUp" => :go_north,
    "ArrowDown" => :go_south,
    "ArrowLeft" => :go_west,
    "ArrowRight" => :go_east,

    "KeyW" => :go_north,
    "KeyS" => :go_south,
    "KeyA" => :go_west,
    "KeyD" => :go_east,
  }

  @impl true
  def handle_event("key-pressed", %{"key" => key, "code" => code} = _params, socket) do
    new_board = if Map.has_key?(@key_events, code) do
      Board.handle_event(socket.assigns.board, @key_events[code])
    else
      socket.assigns.board
    end
    {:noreply, render_board_parts(socket, new_board)}
  end

  @impl true
  def handle_event(name, params, socket) do
    {:noreply, socket}
  end

end
