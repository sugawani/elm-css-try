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
        [ cssA
        , cssB
        ]


cssA : Html Msg
cssA =
    details []
        [ summary [] [ text "A Section" ]
        , div []
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
            , h3 [] [ text "位置指定" ]
            , positionalAlignItems
            , h3 [] [ text "ベースライン" ]
            , baselineAlignItems
            , h2 [] [ text "align-self" ]
            , h3 [] [ text "位置指定" ]
            , positionalAlignSelf
            , h3 [] [ text "ベースライン" ]
            , baselineAlignSelf
            , h2 [] [ text "all" ]
            , all
            , h2 [] [ text "<angle>" ]
            , angle
            ]
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
    div [ A.class "container" ]
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
    div [ A.class "container" ]
        [ div []
            [ h4 [] [ text "normal" ]
            , text "レイアウトに依存 flexの場合stretch"
            , div
                [ A.class "flex-container"
                , A.class "align-items-normal"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "stretch" ]
            , text "範囲いっぱいまで伸びる"
            , div
                [ A.class "flex-container"
                , A.class "align-items-stretch"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        ]


positionalAlignItems : Html Msg
positionalAlignItems =
    div [ A.class "align-items-container" ]
        [ div []
            [ h4 [] [ text "center" ]
            , text "中央寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-items-center"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "start(Firefoxのみ対応)" ]
            , text "先頭寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-items-start"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "end(Firefoxのみ対応)" ]
            , text "末尾寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-items-end"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "flex-start" ]
            , text "flexコンテナに依存した先頭寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-items-flex-start"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "flex-end" ]
            , text "flexコンテナに依存した末尾寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-items-flex-end"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        ]


baselineAlignItems : Html Msg
baselineAlignItems =
    div [ A.class "align-items-container" ]
        [ div []
            [ h4 [] [ text "baseline" ]
            , text "1行目のベースラインに合わせる"
            , div
                [ A.class "flex-container"
                , A.class "align-items-baseline"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "first baseline" ]
            , text "1行目のベースラインに合わせる"
            , div
                [ A.class "flex-container"
                , A.class "align-items-first-baseline"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "last baseline" ]
            , text "最終行のベースラインに合わせる"
            , div
                [ A.class "flex-container"
                , A.class "align-items-last-baseline"
                ]
                [ div [] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        ]


positionalAlignSelf : Html Msg
positionalAlignSelf =
    div
        [ A.class "align-self-container"
        , A.class "container"
        ]
        [ div []
            [ h4 [] [ text "center" ]
            , text "中央寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                ]
                [ div [ A.class "align-self-center" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "start(Firefoxのみ対応)" ]
            , text "先頭寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                , A.style "align-items" "center"
                ]
                [ div [ A.class "align-self-start" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "end(Firefoxのみ対応)" ]
            , text "末尾寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                ]
                [ div [ A.class "align-self-end" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "self-start(Firefoxのみ対応)" ]
            , text "先頭寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                , A.style "align-items" "center"
                ]
                [ div [ A.class "align-self-self-start" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "self-end(Firefoxのみ対応)" ]
            , text "末尾寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                ]
                [ div [ A.class "align-self-self-end" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "flex-start" ]
            , text "先頭寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                , A.style "align-items" "center"
                ]
                [ div [ A.class "align-self-flex-start" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "flex-end" ]
            , text "末尾寄せ"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                ]
                [ div [ A.class "align-self-flex-end" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        ]


baselineAlignSelf : Html Msg
baselineAlignSelf =
    div [ A.class "align-self-container" ]
        [ div []
            [ h4 [] [ text "baseline" ]
            , text "1行目のベースラインに合わせる"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                ]
                [ div [ A.class "align-self-baseline" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "first-baseline" ]
            , text "1行目のベースラインに合わせる"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                ]
                [ div [ A.class "align-self-first-baseline" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "last-baseline" ]
            , text "最終行のベースラインに合わせる"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                ]
                [ div [ A.class "align-self-last-baseline" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        , div []
            [ h4 [] [ text "stretch" ]
            , text "範囲いっぱいまで伸びる"
            , div
                [ A.class "flex-container"
                , A.class "align-self-container"
                ]
                [ div [ A.class "align-self-stretch" ] [ text "1" ]
                , div [] [ text "2" ]
                , div [] [ text "3" ]
                , div [] [ text "4" ]
                , div [] [ text "5" ]
                ]
            ]
        ]


all : Html Msg
all =
    div [ A.class "container" ]
        [ div []
            [ h3 [] [ text "initial" ]
            , text "ベース"
            , div [ A.class "all-parent" ]
                [ div
                    [ A.class "all-child"
                    ]
                    [ text "div > div text"
                    , br [] []
                    ]
                , text "div text"
                ]
            ]
        , div []
            [ h3 [] [ text "initial" ]
            , text "初期化"
            , div [ A.class "all-parent" ]
                [ div
                    [ A.class "all-child"
                    , A.class "all-initial"
                    ]
                    [ text "div > div text"
                    , br [] []
                    ]
                , text "div text"
                ]
            ]
        , div []
            [ h3 [] [ text "unset" ]
            , text "継承/初期化"
            , div [ A.class "all-parent" ]
                [ div
                    [ A.class "all-child"
                    , A.class "all-unset"
                    ]
                    [ text "div > div text"
                    , br [] []
                    ]
                , text "div text"
                ]
            ]
        , div []
            [ h3 [] [ text "inherit" ]
            , text "継承"
            , div [ A.class "all-parent" ]
                [ div
                    [ A.class "all-child"
                    , A.class "all-inherit"
                    ]
                    [ text "div > div text"
                    , br [] []
                    , text "親divの継承値になってる"
                    , br [] []
                    ]
                , text "div text"
                ]
            ]
        , div []
            [ h3 [] [ text "revert" ]
            , text "unsetと同じ?"
            , div [ A.class "all-parent" ]
                [ div
                    [ A.class "all-child"
                    , A.class "all-revert"
                    ]
                    [ text "div > div text"
                    , br [] []
                    ]
                , text "div text"
                ]
            ]
        ]


angle : Html Msg
angle =
    div [ A.class "angle-container" ]
        [ div []
            [ h3 [] [ text "deg" ]
            , text "45deg"
            , div
                [ A.class "angle-base"
                , A.class "angle-deg"
                ]
                []
            ]
        , div []
            [ h3 [] [ text "grad" ]
            , text "50grad"
            , div
                [ A.class "angle-base"
                , A.class "angle-grad"
                ]
                []
            ]
        , div []
            [ h3 [] [ text "rad" ]
            , text "0.7854rad"
            , div
                [ A.class "angle-base"
                , A.class "angle-rad"
                ]
                []
            ]
        , div []
            [ h3 [] [ text "turn" ]
            , text "0.125turn"
            , div
                [ A.class "angle-base"
                , A.class "angle-turn"
                ]
                []
            ]
        ]


cssB : Html Msg
cssB =
    details [ A.attribute "open" "true" ]
        [ summary [] [ text "B Section" ]
        , div []
            [ h1 [] [ text "B" ]
            , h2 [] [ text "::backdrop" ]
            , backdrop
            , h2 [] [ text "backdrop-filter" ]
            , p [] [ text "要素の背景にグラフィック効果を適用する" ]
            , text "Firefoxはlayout.css.backdrop-filter.enabled有効化必須"
            , backdropFilter
            , h2 [] [ text "backface-visibility" ]
            , p [] [ text "要素の背景の可視化" ]
            , backfaceVisibility
            , h2 [] [ text "background-attachment" ]
            , p [] [ text "背景のスクロール制御" ]
            , backgroundAttachment
            , h2 [] [ text "background-blend-mode" ]
            , p [] [ text "背景との混合方法" ]
            , backgroundBlendMode
            ]
        ]


backdrop : Html Msg
backdrop =
    div []
        [ p [] [ text "フルスクリーン時の背景色等を指定できる(今回は明るい緑を指定)" ]
        , video
            [ A.controls True
            , A.src "https://animethemes.moe/video/SteinsGateZero-OP1.webm"
            , A.width 300
            , A.height 200
            , A.poster "http://www.kagaku-adv.com/wp/wp-content/uploads/2019/08/steinsgate_zero.png"
            ]
            []
        ]


backdropFilter : Html Msg
backdropFilter =
    div [ A.class "container" ]
        [ div []
            [ h3 [] [ text "blue" ]
            , text "ブラー"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-blur" ] []
                ]
            ]
        , div []
            [ h3 [] [ text "brightness" ]
            , text "明るさ"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-brightness" ] []
                ]
            ]
        , div []
            [ h3 [] [ text "contrast" ]
            , text "コントラスト"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-contrast" ] []
                ]
            ]
        , div []
            [ h3 [] [ text "drop-shadow" ]
            , text "ドロップシャドウ(動かん)"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-drop-shadow" ] []
                ]
            ]
        , div []
            [ h3 [] [ text "grayscale" ]
            , text "グレースケール"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-grayscale" ] []
                ]
            ]
        , div []
            [ h3 [] [ text "hue-rotate" ]
            , text "色相"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-hue-rotate" ] []
                ]
            ]
        , div []
            [ h3 [] [ text "invert" ]
            , text "色の反転"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-invert" ] []
                ]
            ]
        , div []
            [ h3 [] [ text "opacity" ]
            , text "透過(よくわからん)"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-opacity" ] []
                ]
            ]
        , div []
            [ h3 [] [ text "saturate" ]
            , text "彩度"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-saturate" ] []
                ]
            ]
        , div []
            [ h3 [] [ text "sepia" ]
            , text "セピア"
            , div [ A.class "backdrop-filter-base" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backrdop-filter-image"
                    ]
                    []
                , div [ A.class "backdrop-filter-sepia" ] []
                ]
            ]
        ]


backfaceVisibility : Html Msg
backfaceVisibility =
    div [ A.class "container" ]
        [ div []
            [ h3 [] [ text "visiable" ]
            , text "背面も見える"
            , div [ A.class "backface-visibility-visiable" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backface-visibility-image"
                    ]
                    []
                ]
            ]
        , div []
            [ h3 [] [ text "hidden" ]
            , text "背面は非表示になる"
            , div [ A.class "backface-visibility-hidden" ]
                [ img
                    [ A.src "akabeko.jpg"
                    , A.class "backface-visibility-image"
                    ]
                    []
                ]
            ]
        ]


backgroundAttachment : Html Msg
backgroundAttachment =
    div [ A.class "container" ]
        [ div []
            [ h3 [] [ text "scroll" ]
            , text "要素のみスクロール"
            , backgroundAttachmentBase "background-attachment-scroll"
            ]
        , div []
            [ h3 [] [ text "fixed" ]
            , text "位置固定 要素のみスクロール"
            , backgroundAttachmentBase "background-attachment-fixed"
            ]
        , div []
            [ h3 [] [ text "local" ]
            , text "スクロールと連動"
            , backgroundAttachmentBase "background-attachment-local"
            ]
        ]


backgroundAttachmentBase : String -> Html Msg
backgroundAttachmentBase className =
    div
        [ A.class "background-attachment-viewport"
        , A.class className
        ]
        [ p [] [ text "There is no end though there is a start in space. -- Infinity." ]
        , p [] [ text "It has own power, it ruins, and it goes though there is a start also in the star. ---Finite." ]
        , p [] [ text "Only the person who was wisdom can read the most foolish one from the history." ]
        , p [] [ text "The fish that lives in the sea doesn't know the world in the land. It also ruins and goes if they have wisdom." ]
        , p [] [ text "It is funnier that man exceeds the speed of light than fish start living in the land." ]
        , p [] [ text "It can be said that this is an final ultimatum from the god to the people who can fight." ]
        ]


backgroundBlendMode : Html Msg
backgroundBlendMode =
    div [ A.class "container" ]
        [ div []
            [ h3 [] [ text "normal" ]
            , text "画像そのまま"
            , backgroundBlendModeBase "background-blend-mode-normal"
            ]
        , div []
            [ h3 [] [ text "multiply" ]
            , text "掛け合わせる"
            , backgroundBlendModeBase "background-blend-mode-multiply"
            ]
        , div []
            [ h3 [] [ text "screen" ]
            , text "スクリーンをかける"
            , backgroundBlendModeBase "background-blend-mode-screen"
            ]
        , div []
            [ h3 [] [ text "overlay" ]
            , text "上に置く(オーバーレイ)"
            , backgroundBlendModeBase "background-blend-mode-overlay"
            ]
        , div []
            [ h3 [] [ text "darken" ]
            , text "暗く重ねる"
            , backgroundBlendModeBase "background-blend-mode-darken"
            ]
        , div []
            [ h3 [] [ text "lighten" ]
            , text "明るく重ねる"
            , backgroundBlendModeBase "background-blend-mode-lighten"
            ]
        , div []
            [ h3 [] [ text "color-dodge" ]
            , text "覆い焼き"
            , backgroundBlendModeBase "background-blend-mode-color-dodge"
            ]
        , div []
            [ h3 [] [ text "color-burn" ]
            , text "焼き込み"
            , backgroundBlendModeBase "background-blend-mode-color-burn"
            ]
        , div []
            [ h3 [] [ text "soft-light" ]
            , text "明暗を明確に(弱)"
            , backgroundBlendModeBase "background-blend-mode-soft-light"
            ]
        , div []
            [ h3 [] [ text "hard-light" ]
            , text "明暗を明確に(強)"
            , backgroundBlendModeBase "background-blend-mode-hard-light"
            ]
        , div []
            [ h3 [] [ text "exclusion" ]
            , text "差の絶対値(弱)"
            , backgroundBlendModeBase "background-blend-mode-exclusion"
            ]
        , div []
            [ h3 [] [ text "difference" ]
            , text "差の絶対値(強)"
            , backgroundBlendModeBase "background-blend-mode-difference"
            ]
        , div []
            [ h3 [] [ text "hue" ]
            , text "HLS色空間 色相"
            , backgroundBlendModeBase "background-blend-mode-hue"
            ]
        , div []
            [ h3 [] [ text "saturation" ]
            , text "HLS色空間 彩度"
            , backgroundBlendModeBase "background-blend-mode-saturation"
            ]
        , div []
            [ h3 [] [ text "color" ]
            , text "HLS色空間 カラー"
            , backgroundBlendModeBase "background-blend-mode-color"
            ]
        , div []
            [ h3 [] [ text "luminosity" ]
            , text "HLS色空間 輝度"
            , backgroundBlendModeBase "background-blend-mode-luminosity"
            ]
        ]


backgroundBlendModeBase : String -> Html Msg
backgroundBlendModeBase className =
    div
        [ A.class "background-blend-mode"
        , A.class className
        ]
        []
