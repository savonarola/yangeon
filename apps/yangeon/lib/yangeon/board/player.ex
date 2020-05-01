defmodule Yangeon.Board.Player do

  defstruct [
    swords: 0,
    hearts: 1,
    key: false,
    torches: 0,
  ]

  alias Yangeon.Board.Player

  def new() do
    %Player{}
  end

  def add_sword(%Player{swords: swords} = player) do
    %Player{player | swords: swords + 1}
  end

  def add_heart(%Player{hearts: hearts} = player) do
    %Player{player | hearts: hearts + 1}
  end

  def add_key(%Player{} = player) do
    %Player{player | key: true}
  end

  def add_torches(%Player{} = player, amount) do
    %Player{player | torches: player.torches + amount}
  end

  def remove_torch(%Player{} = player) do
    %Player{player | torches: max(player.torches - 1, 0)}
  end

  def attacked(%Player{hearts: hearts, swords: swords} = player, power) do
    if swords > 0 do
      %Player{player | swords: swords - 1}
    else
      %Player{player | hearts: max(0, hearts - power)}
    end
  end

  def has_key?(%Player{key: key}), do: key

  def dead?(%Player{hearts: 0}), do: true
  def dead?(%Player{}), do: false

end
