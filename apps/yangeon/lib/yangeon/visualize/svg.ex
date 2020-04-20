defmodule Yangeon.Visualize.Svg do

  import XmlBuilder

  def svg_doctype() do
    doctype("svg", public: [
      "-//W3C//DTD SVG 1.1//EN",
      "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"
    ])
  end

  def svg_document(elements) when is_list(elements) do
    document([svg_doctype() | elements]) |> generate()
  end

  def svg_document(element)do
    document([svg_doctype(), element]) |> generate()
  end

  @xmlns "http://www.w3.org/2000/svg"
  @xmlns_xlink "http://www.w3.org/1999/xlink"

  def svg(width, height, opts, elements) do
    attrs =
      opts
      |> Map.new()
      |> Map.merge(%{
        "width" => width,
        "height" => height,
        "xmlns" => @xmlns,
        "xmlns:xlink" => @xmlns_xlink
      })
    element(:svg, attrs, elements)
  end

  def line(x1, y1, x2, y2, opts \\ [], elements \\ []) do
    attrs =
      opts
      |> Map.new()
      |> Map.merge(%{x1: x1, y1: y1, x2: x2, y2: y2})
    element(:line, attrs, elements)
  end

end
