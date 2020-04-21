defmodule YangeonWeb.PageLive do
  use YangeonWeb, :live_view

  alias Yangeon.Factory
  alias Yangeon.Board

  require Logger

  @impl true
  def mount(_params, _session, socket) do
    board = Factory.board()
    {:ok, assign(socket, board: board)}
  end

  @impl true
  def handle_event("cell-click", %{"row" => row, "col" => col} = _params, socket) do
    Logger.info("handle_event[cell-click]: #{row}x#{col}")
    new_board = Board.handle_event(socket.assigns.board, {:cell_click, String.to_integer(row), String.to_integer(col)})
    {:noreply, assign(socket, board: new_board)}
  end

  @key_events %{
    "ArrowUp" => :go_north,
    "ArrowDown" => :go_south,
    "ArrowLeft" => :go_west,
    "ArrowRight" => :go_east,

    "w" => :go_north,
    "s" => :go_south,
    "a" => :go_west,
    "d" => :go_east,
  }

  @impl true
  def handle_event("key-pressed", %{"key" => key} = _params, socket) do
    Logger.info("handle_event[key-pressed]: #{key}")
    new_board = if Map.has_key?(@key_events, key) do
      Board.handle_event(socket.assigns.board, @key_events[key])
    else
      socket.assigns.board
    end
    {:noreply, assign(socket, board: new_board)}
  end

  @impl true
  def handle_event(name, params, socket) do
    Logger.info("handle_event: #{inspect {name, params}}")
    {:noreply, socket}
  end

end
