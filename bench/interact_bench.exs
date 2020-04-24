defmodule InteractBench do
  use Benchfella

  @board Yangeon.Factory.board()

  bench "interact" do
    Yangeon.Board.interact(@board)
  end

  bench "draw" do
    YangeonWeb.Visualize.Board.draw_dynamic(@board)
  end
end
