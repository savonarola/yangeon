defmodule Yangeon.Board.GameOpts do

  defstruct [
    size: {20, 20},
    snake_power: 5,
    snake_count: 7,
    torch_depth: 3,
    torch_count: 10,
    sword_count: 10,
    heart_count: 10,
  ]

end