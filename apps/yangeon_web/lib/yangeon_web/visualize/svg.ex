defmodule YangeonWeb.Visualize.Svg do

  import XmlBuilder

  alias YangeonWeb.Visualize.Opts

  def render(elements) do
    elements |> generate()
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
      color: "#000",
      bage: false,
    },
    torch: %{
      symbol: "\uEAD1",
      color: "#A00",
      bage: true,
    },
    sword: %{
      symbol: "\uE946",
      color: "#DAA520",
      bage: true,
    },
    heart: %{
      symbol: "\uE9F6",
      color: "#600",
      bage: true,
    },
    snake: %{
      symbol: "\uEAA5",
      color: "#0A0",
      bage: true,
    },
    exit: %{
      symbol: "\uEA01",
      color: "#000",
      bage: true,
    },
  }

  def ra_symbol(item, x, y, size, opts) do
    style = "font-size:#{size}px;fill:#{@items[item][:color]}"
    bage = if @items[item][:bage] do
      element(
        :circle,
        %{
          cx: x + div(size, 2),
          cy: y - div(size, 2),
          r: div(size, 2) + 4,
          fill: opts.bage_fill,
          stroke: opts.bage_stroke
        }
      )
    else
      []
    end
    [bage, text(x, y, @items[item][:symbol], "ra", style: style)]
  end

  defp make_attrs(opts, attrs) do
    opts
    |> Map.new()
    |> Map.merge(attrs)
  end

end
