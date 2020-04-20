defmodule Yangeon.Visualize.Board do

  alias Yangeon.Board

  alias Yangeon.Visualize.Grid, as: VGrid
  alias Yangeon.Visualize.Opts
  alias Yangeon.Visualize.Svg

  def draw(%Board{} = board, %Opts{} = opts) do
    width = board.grid.cols * opts.cell_size
    height = board.grid.rows * opts.cell_size

    svg_grid = VGrid.draw(board.grid, opts)

    Svg.svg_document(
      Svg.svg(width, height, [style: svg_style(opts)],
        svg_grid
      )
    )
  end

  defp svg_style(%Opts{} = opts) do
    "background:#{opts.background_color}"
  end

end
