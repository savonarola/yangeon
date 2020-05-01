defmodule Yangeon.Board.GameOpts do

  defstruct [
    size: {20, 20},
    braid_level: 0.3,
    snake_power: 5,
    snake_count: 7,
    torch_count: 10,
    sword_count: 10,
    heart_count: 10,
    torch_weight: 60,
    max_torch_depth: 6,
  ]

end
