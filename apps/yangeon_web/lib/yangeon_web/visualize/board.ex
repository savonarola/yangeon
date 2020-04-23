defmodule YangeonWeb.Visualize.Board do

  alias Yangeon.Board

  alias YangeonWeb.Visualize.Grid, as: VGrid
  alias YangeonWeb.Visualize.Opts
  alias YangeonWeb.Visualize.Svg

  def draw_base(%Board{} = board, %Opts{} = opts \\ %Opts{}) do
    Svg.render([
      VGrid.draw(board.grid, opts),
      VGrid.draw_item(:exit, board.exit_loc, opts)
    ])
  end

  def draw_dynamic(%Board{} = board, %Opts{} = opts \\ %Opts{}) do
    Svg.render([
      VGrid.draw_shadow_layer(board.grid, board.visible_locs, opts),
      VGrid.draw_item(:player, board.player_loc, opts),
      VGrid.draw_items(:torch, board.torch_locs, opts),
      VGrid.draw_items(:sword, board.sword_locs, opts),
      VGrid.draw_items(:heart, board.heart_locs, opts),
      VGrid.draw_items(:snake, board.snake_locs, opts),
    ])
  end

  def draw_event_layer(%Board{} = board, %Opts{} = opts \\ %Opts{}) do
    Svg.render([
      VGrid.draw_event_layer(board.grid, opts),
    ])
  end

  def width(%Board{} = board, %Opts{} = opts \\ %Opts{}) do
    {width, _} = VGrid.size(board.grid, opts)
    width
  end

  def height(%Board{} = board, %Opts{} = opts \\ %Opts{}) do
    {_, height} = VGrid.size(board.grid, opts)
    height
  end

  def svg_style(%Board{} = _board, %Opts{} = opts \\ %Opts{}) do
    "background:#{opts.background_color}"
  end

end
