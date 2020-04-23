defmodule Yangeon.Board do

  alias Yangeon.Cell
  alias Yangeon.Grid
  alias Yangeon.Board.GameOpts
  alias Yangeon.Board.Items
  alias Yangeon.Board.Player

  defstruct [
    grid: nil,
    size: {0, 0},
    player_loc: Cell.new(0, 0),
    visible_locs: MapSet.new(),
    player: nil,
    torch_locs: MapSet.new(),
    torch_depth: 0,
    sword_locs: MapSet.new(),
    heart_locs: MapSet.new(),
    snake_locs: MapSet.new(),
    snake_with_key_loc: nil,
    snake_power: 0,
    exit_loc: Cell.new(0, 0),
    game_over: false,
    game_winned: false
  ]

  alias Yangeon.Board

  def new(%Grid{} = grid, %GameOpts{} = game_opts) do
    items = Items.new(grid)
    {items, player_loc} = Items.generate(items)
    {items, torch_locs} = Items.generate(items, game_opts.torch_count)
    {items, sword_locs} = Items.generate(items, game_opts.sword_count)
    {items, heart_locs} = Items.generate(items, game_opts.heart_count)

    {items, snake_locs} = Items.generate(items, game_opts.snake_count)
    snake_with_key_loc = snake_locs |> MapSet.to_list() |> Enum.shuffle() |> hd()
    {items, exit_loc} = Items.generate(items)

    %Board{
      size: game_opts.size,
      grid: grid,
      player_loc: player_loc,
      visible_locs: MapSet.new([player_loc]),
      player: Player.new(),
      torch_locs: torch_locs,
      torch_depth: game_opts.torch_depth,
      sword_locs: sword_locs,
      heart_locs: heart_locs,
      snake_locs: snake_locs,
      snake_power: game_opts.snake_power,
      snake_with_key_loc: snake_with_key_loc,
      exit_loc: exit_loc,
    }
  end

  require Logger

  def interact(%Board{} = board) do
    player_loc = board.player_loc

    player = board.player

    torch_locs = board.torch_locs
    {torch_locs, player} = if player_loc in torch_locs do
      {MapSet.delete(torch_locs, player_loc), Player.add_torch(player)}
    else
      {torch_locs, player}
    end

    sword_locs = board.sword_locs
    {sword_locs, player} = if player_loc in sword_locs do
      {MapSet.delete(sword_locs, player_loc), Player.add_sword(player)}
    else
      {sword_locs, player}
    end

    heart_locs = board.heart_locs
    {heart_locs, player} = if player_loc in heart_locs do
      {MapSet.delete(heart_locs, player_loc), Player.add_heart(player)}
    else
      {heart_locs, player}
    end

    snake_locs = board.snake_locs
    {snake_locs, player} = if player_loc in snake_locs do
      player = Player.attacked(player, board.snake_power)
      if !Player.dead?(player) do
        if player_loc == board.snake_with_key_loc do
          {MapSet.delete(snake_locs, player_loc), Player.add_key(player)}
        else
          {MapSet.delete(snake_locs, player_loc), player}
        end
      else
        {snake_locs, player}
      end
    else
      {snake_locs, player}
    end

    visible_locs = if Player.has_torch?(player) do
      MapSet.union(board.visible_locs, Grid.links(board.grid, player_loc, board.torch_depth))
    else
      MapSet.put(board.visible_locs, player_loc)
    end

    {game_over, game_winned} =
      cond do
        Player.dead?(player) -> {true, false}
        Player.has_key?(player) && player_loc == board.exit_loc -> {true, true}
        true -> {false, false}
      end


    %Board{board |
      heart_locs: heart_locs,
      sword_locs: sword_locs,
      torch_locs: torch_locs,
      snake_locs: snake_locs,
      game_over: game_over,
      game_winned: game_winned,
      visible_locs: visible_locs,
      player: player
    }
  end

  defp try_move_to(board, cell) do
    if Grid.linked?(board.grid, board.player_loc, cell) do
      %Board{board | player_loc: cell} |> interact()
    else
      board
    end
  end

  def handle_event(board, {:cell_click, row, col}) do
    try_move_to(board, Cell.new(row, col))
  end

  def handle_event(board, :go_north), do: handle_go(board, {-1, 0})
  def handle_event(board, :go_south), do: handle_go(board, {+1, 0})
  def handle_event(board, :go_west), do: handle_go(board, {0, -1})
  def handle_event(board, :go_east), do: handle_go(board, {0, +1})

  defp handle_go(board, {drow, dcol}) do
    new_cell = Cell.new(board.player_loc.row + drow, board.player_loc.col + dcol)
    try_move_to(board, new_cell)
  end

end
