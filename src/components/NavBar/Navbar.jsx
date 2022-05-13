import React, { useState } from "react";
import "./navbar.scss";
import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

function Navbar() {
  const [show, setShow] = useState(false);
  window.onscroll = () => {
    setShow(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={show ? "nav_black" : "nav"}>
      <div className="left">
        <span className="title redtitle"><p>MULTIFLEX</p></span>   
      </div>
      <div className="center">
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New & Popular</span>
        <span>My List</span>
      </div>
      <div className="right">
        <Search className="icons" />
        <span>Kid</span>
        <Notifications className="icons" />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
        <div className="profile">
          <ArrowDropDown className="icons" />
          <div className="options">
            <span>Settings</span>
            <span>Logout</span>
          </div>
         {/*
        <Search className="icons" />
        <span>Kid</span>
        <Notifications className="icons" />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
        <div className="profile">
          <ArrowDropDown className="icons" />
          <div className="options">
            <span>Settings</span>
            <span>Logout</span>
          </div>
        </div>*/}
      </div> 
    </div>
    </div>
  );
}

export default Navbar;
