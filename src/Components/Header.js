import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import "../Assets/Styles/Header.css"
import { Avatar } from "@mui/material"

const Header = ({ spotify }) => {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artits,Songs and album" type="text" />
      </div>
      <div className="header__right">
        <Avatar src="" alt="LK" />
        <h4>Lionel Kandekwe</h4>
      </div>
    </div>
  )
}

export default Header
