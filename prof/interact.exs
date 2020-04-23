board = Yangeon.Factory.board()

for _ <- 1..10 do
  Yangeon.Board.interact(board)
  YangeonWeb.Visualize.Board.height(board)
  YangeonWeb.Visualize.Board.width(board)
  YangeonWeb.Visualize.Board.svg_style(board)
  YangeonWeb.Visualize.Board.draw_base(board)
  YangeonWeb.Visualize.Board.draw_dynamic(board)
  YangeonWeb.Visualize.Board.draw_event_layer(board)
end
