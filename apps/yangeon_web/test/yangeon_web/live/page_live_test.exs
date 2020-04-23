defmodule YangeonWeb.PageLiveTest do
  use YangeonWeb.ConnCase

  import Phoenix.LiveViewTest

  test "disconnected and connected render", %{conn: conn} do
    {:ok, page_live, disconnected_html} = live(conn, "/")
    assert disconnected_html =~ "RPGAwesome"
    assert render(page_live) =~ "RPGAwesome"
  end
end
