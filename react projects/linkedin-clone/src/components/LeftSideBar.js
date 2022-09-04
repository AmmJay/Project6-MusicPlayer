import React from 'react'
import "./LeftSideBar.css"
import background from "../images/background.jpg"
import avatar from "../images/self portrait.png"

function LeftSideBar() {
  return (
    <div className='sidebar'>
      <div className="top-section">
        <img src={background} alt="" className='background'/>
        <img src ={avatar} alt="" className='avatar'/>
        <h3 className='name'>Mukta Jha</h3>
        <p className='about'>Information Technology | 4th Year</p>
      </div>

      <div className="stats">
        <div><p className='stat'>Who's viewed your profile</p>
        <p className='number'>137</p></div>
        <div><p className='stat'>Impressions on post</p>
        <p className='number '>1850</p></div>
      </div>
    </div>
  )
}

export default LeftSideBar
