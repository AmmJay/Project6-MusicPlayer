import React from 'react'
import "./Header.css"
import MenuIcon from "./MenuIcon";
import logo from "../images/Linkedin-logo.png"
import searchIcon from "../images/search.svg"
import home from "../images/home.svg"
import supervisor from "../images/supervisor.svg"
import jobs from "../images/jobs.svg"
import message from "../images/message.svg"
import bell from "../images/bell.svg"
import avatar from "../images/self portrait.png"

function Header() {
  return (
    <div className='header'>
      <div className="header-left">
        <img src={logo} alt="" />
        <div className="searchDiv">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search'/>
        </div>
      </div>

      <div className="header-right">
        <MenuIcon Icon = {home} title="Home" />
        <MenuIcon Icon = {supervisor} title="My Network" />
        <MenuIcon Icon = {jobs} title="Jobs" />
        <MenuIcon Icon = {message} title="Messaging" />
        <MenuIcon Icon = {bell} title="Notifications" />
        <MenuIcon Avatar = {avatar} title="Me" />
      </div>
    </div>
  )
}

export default Header
