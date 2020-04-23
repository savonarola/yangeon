defmodule InteractBench do
  use Benchfella

  @board Yangeon.Factory.board()

  bench "interact" do
    Yangeon.Board.interact(@board)
  end

  bench "draw" do
    YangeonWeb.Visualize.Board.height(@board)
    YangeonWeb.Visualize.Board.width(@board)
    YangeonWeb.Visualize.Board.svg_style(@board)
    YangeonWeb.Visualize.Board.draw_base(@board)
    YangeonWeb.Visualize.Board.draw_dynamic(@board)
    YangeonWeb.Visualize.Board.draw_event_layer(@board)
  end
end
