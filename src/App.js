import React, { useEffect, useState } from "react"
import Login from "./Components/Login"
import Player from "./Components/Player"
import SpotifyWebApi from "spotify-web-api-js"
import { getTokenFromUrl } from "./Config/spotify"
import "./App.css"

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl()

    window.location.hash = ""

    const _token = hash.access_token

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        console.log("The person", user)
      })
    }

    console.log("I HAVE A TOKEN====> ", _token)
  }, [])
  return <div className="app">{token ? <Player /> : <Login />}</div>
}

export default App
