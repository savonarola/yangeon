defmodule YangeonWeb.Visualize.Svg do

  import XmlBuilder

  alias YangeonWeb.Visualize.Opts

  @xmlns "http://www.w3.org/2000/svg"
  @xmlns_xlink "http://www.w3.org/1999/xlink"

  @style """
    .ra {
      font-family: RPGAwesome;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-style: normal;
      font-variant: normal;
      font-weight: normal;
      line-height: 1;
      speak: none;
      text-transform: none;
    }

  """

  def svg(%Opts{} = opts, {width, height}, elements) do
    attrs = %{
      "width" => width,
      "height" => height,
      "xmlns" => @xmlns,
      "xmlns:xlink" => @xmlns_xlink,
      "style" => "background:#{opts.background_color}"
    }
    element(:svg, attrs, [style(@style), elements])
    |> generate()
  end

  def line(x1, y1, x2, y2, opts \\ [], elements \\ []) do
    attrs = make_attrs(opts, %{x1: x1, y1: y1, x2: x2, y2: y2})
    element(:line, attrs, elements)
  end

  def rect(x, y, width, height, opts \\ [], elements \\ []) do
    attrs = make_attrs(opts, %{x: x, y: y, width: width, height: height})
    element(:rect, attrs, elements)
  end

  def style(styles) do
    element(:style, %{}, styles)
  end

  def text(x, y, text, class, opts \\ []) do
    attrs = make_attrs(opts, %{x: x, y: y, class: class})
    element(:text, attrs, text)
  end

  @items %{
    player: %{
      symbol: "\uEA6F",
      color: "#000"
    },
    torch: %{
      symbol: "\uEAD1",
      color: "#F55"
    },
    sword: %{
      symbol: "\uE946",
      color: "#DAA520"
    }
  }

  def ra_symbol(item, x, y, size) do
    style = "font-size:#{size}px;fill:#{@items[item][:color]}"
    text(x, y, @items[item][:symbol], "ra", style: style)
  end

  defp make_attrs(opts, attrs) do
    opts
    |> Map.new()
    |> Map.merge(attrs)
  end

end
