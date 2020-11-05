module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes as A


main =
    Browser.sandbox
        { init = init
        , update = update
        , view = view
        }



-- MODEL


type alias Model =
    String


init : Model
init =
    "てんぷら🍤"



-- UPDATE


type Msg
    = None


update : Msg -> Model -> Model
update msg model =
    case msg of
        None ->
            model



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text "A" ]
        , h2 [] [ text ":active" ]
        , active
        , h2 [] [ text "additive-symbols(Firefoxのみ対応)" ]
        , additiveSymbols
        , h2 [] [ text "::after" ]
        , after
        , h2 [] [ text "align-content(flexとflex-wrapが必要)" ]
        , h3 [] [ text "均等配置" ]
        , distributedAlignContent
        , h3 [] [ text "位置指定" ]
        , basicPositionalAlignContent
        , h3 [] [ text "ベースライン" ]
        , baselineAlignContent
        , h2 [] [ text "align-items" ]
        , h3 [] [ text "基本キーワード" ]
        , normalAlignItems
        ]


active : Html Msg
active =
    div
        []
        [ p
            []
            [ text "リンクをクリック中(active)文字色が緑になる->"
            , a
                [ A.href "#"
                , A.class "pseudo-active"
                ]
                [ text "active"
                ]
            ]
        ]


additiveSymbols : Html Msg
additiveSymbols =
    div []
        [ text "@counter-styleと組み合わせてliの独自のマーカーを定義できる"
        , ul [ A.class "additive-symbols-list" ]
            [ li [] [ text "One" ]
            , li [] [ text "Two" ]
            , li [] [ text "Three" ]
            , li [] [ text "Four" ]
            , li [] [ text "Five" ]
            , li [] [ text "Six" ]
            ]
        ]


after : Html Msg
after =
    div []
        [ text "指定したクラスの後ろに要素を追加できる"
        , p [ A.class "after-nullpo" ]
            [ text "1. 仕様書無しさん :20/11/02 13:00:00"
            , br [] []
            , text "\u{3000}\u{3000}∧＿∧"
            , br [] []
            , text "\u{3000}（\u{3000}´∀｀）＜\u{3000}ぬるぽ"
            ]
        ]


distributedAlignContent : Html Msg
distributedAlignContent =
    div [ A.style "display" "flex" ]
        [ div []
            [ h4 [] [ text "space-around" ]
            , text "端にはアイテム間の半分の間隔を空ける"
            , div
                [ A.class "flex-container"
                , A.class "align-content-space-around"
                ]
                flexContent
            ]
        , div []
            [ h4 [] [ text "space-between" ]
            , text "先頭と末尾にそれぞれ寄せる"
            , div
                [ A.class "flex-container"
                , A.class "align-content-space-between"
                ]
                flexContent
            ]
        , div []
            [ h4 [] [ text "space-evenly" ]
            , text "端にはアイテム感と同じ間隔を空ける"
            , div
                [ A.class "flex-container"
                , A.class "align-content-space-evenly"
                ]
                flexContent
            ]
        , div []
            [ h4 [] [ text "stretch" ]
            , text "コンテナサイズに合わせて引き伸ばす"
            , div
                [ A.class "flex-container"
                , A.class "align-content-stretch"
                ]
                flexContent
            ]
        ]


flexContent : List (Html Msg)
flexContent =
    [ div [] [ text "1" ]
    , div [] [ text "2" ]
    , div [] [ text "3" ]
    , div [] [ text "4" ]
    , div [] [ text "5" ]
    ]


basicPositionalAlignContent : Html Msg
basicPositionalAlignContent =
    div [ A.class "align-content-container" ]
        [ div []
            [ h4 [] [ text "center" ]
            , text "中央寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-content-center"
                ]
                flexContent
            ]
        , div []
            [ h4 [] [ text "start(Firefoxのみ対応)" ]
            , text "先頭寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-content-start"
                ]
                flexContent
            ]
        , div []
            [ h4 [] [ text "end(Firefoxのみ対応)" ]
            , text "末尾寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-content-end"
                ]
                flexContent
            ]
        , div []
            [ h4 [] [ text "flex-start" ]
            , text "flexコンテナに依存した先頭寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-content-flex-start"
                ]
                flexContent
            ]
        , div []
            [ h4 [] [ text "flex-end" ]
            , text "flexコンテナに依存した末尾寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-content-flex-end"
                ]
                flexContent
            ]
        ]


baselineAlignContent : Html Msg
baselineAlignContent =
    div [ A.class "align-content-container" ]
        [ div []
            [ h4 [] [ text "baseline" ]
            , text "1行目のベースラインに合わせる"
            , div
                [ A.class "flex-container"
                , A.class "align-content-baseline"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "改行", br [] [], text "テキスト" ]
                , div [] [ text "3" ]
                ]
            ]
        , div []
            [ h4 [] [ text "first baseline(Firefoxのみ対応)" ]
            , text "1行目のベースラインに合わせる"
            , div
                [ A.class "flex-container"
                , A.class "align-content-first-baseline"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "改行", br [] [], text "テキスト" ]
                , div [] [ text "3" ]
                ]
            ]
        , div []
            [ h4 [] [ text "last baseline(Firefoxのみ対応)" ]
            , text "最終行のベースラインに合わせる"
            , div
                [ A.class "flex-container"
                , A.class "align-content-last-baseline"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "改行", br [] [], text "テキスト" ]
                , div [] [ text "3" ]
                ]
            ]
        ]


normalAlignItems : Html Msg
normalAlignItems =
    div [ A.class "align-items-container" ]
        [ div []
            [ h4 [] [ text "normal" ]
            , text "レイアウトに依存 flexの場合strech"
            , div
                [ A.class "flex-container"
                , A.class "align-items-cormal"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        ]
