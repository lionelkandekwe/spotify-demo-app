import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import "../Assets/Styles/Header.css"
import { Avatar } from "@mui/material"
import { useDataLayerValue } from "../Context/DataLayer"

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue()
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artits,Songs and album" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
