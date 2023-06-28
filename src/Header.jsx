import React from "react";
import img1 from "../src/images/gmail.png";
import "./Css/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img src={img1} alt="" />
      </div>

      <div className="header_middle">
        <div className="search_mail">
          <SearchIcon />
          <input type="text" placeholder="search mail" />
          <KeyboardArrowDownIcon />
        </div>
      </div>

      <div className="header_right">
        <HelpOutlineIcon />
        <SettingsIcon />
        <AppsIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Header;
