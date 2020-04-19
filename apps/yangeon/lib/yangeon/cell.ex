defmodule Yangeon.Cell do

  defstruct [
    row: nil,
    col: nil
  ]

  alias Yangeon.Cell

  @spec new(integer, integer) :: Cell.t()
  def new(row, col) when is_integer(row) and is_integer(col) do
    %Cell{
      row: row,
      col: col
    }
  end

end

defimpl Inspect, for: Yangeon.Cell do
  alias Yangeon.Cell

  def inspect(%Cell{row: row, col: col}, _opts) do
    "C[#{row},#{col}]"
  end
end

