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
        , h2 [] [ text "" ]
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
