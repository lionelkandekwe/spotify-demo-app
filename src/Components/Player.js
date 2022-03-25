import React from "react"
import SideBar from "./SideBar"
import Body from "./Body"
import "../Assets/Styles/Player.css"

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body />
      </div>
    </div>
  )
}

export default Player
