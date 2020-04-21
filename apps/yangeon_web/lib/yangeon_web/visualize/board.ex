defmodule YangeonWeb.Visualize.Board do

  alias Yangeon.Board

  alias YangeonWeb.Visualize.Grid, as: VGrid
  alias YangeonWeb.Visualize.Opts
  alias YangeonWeb.Visualize.Svg


  def draw(%Board{} = board, %Opts{} = opts \\ %Opts{}) do
    size = VGrid.size(board.grid, opts)
    Svg.svg(opts, size, [
      VGrid.draw(board.grid, opts),
      VGrid.draw_item(:player, board.player_loc, opts),
      VGrid.draw_items(:torch, board.torches, opts),
      VGrid.draw_items(:sword, board.swords, opts),
      VGrid.draw_event_layer(board.grid, opts),
    ])
  end

end
