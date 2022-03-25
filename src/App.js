import React, { useEffect, useState } from "react"
import Login from "./Components/Login"
import Player from "./Components/Player"
import SpotifyWebApi from "spotify-web-api-js"
import { getTokenFromUrl } from "./Config/spotify"
import { useDataLayerValue } from "./Context/DataLayer"
import "./App.css"

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()

    window.location.hash = ""

    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })
    }

    console.log("I HAVE A TOKEN====> ", _token)
  }, [])

  console.log("The person ==> ", user)

  console.log("Token ===>", token)

  return <div className="app">{token ? <Player /> : <Login />}</div>
}

export default App
