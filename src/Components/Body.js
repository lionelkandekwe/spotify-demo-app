import React from "react"
import Header from "./Header"
import { useDataLayerValue } from "../Context/DataLayer"
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled"
import FavoriteIcon from "@mui/icons-material/Favorite"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import "../Assets/Styles/Body.css"

const Body = ({ spotify }) => {
  const [{ discover_weekly }] = useDataLayerValue()
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  )
}

export default Body
