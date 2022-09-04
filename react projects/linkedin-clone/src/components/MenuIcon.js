import React from 'react'
import "./MenuIcon.css"


function MenuIcon({Icon,Avatar, title}) {
  return (
    <div className='menu-icon'>
        {Icon && <img src={Icon} alt="" />}
        {Avatar && <img src={Avatar} alt="" id="avatar"/>}
        <p>{title}</p>
    </div>
  )
}

export default MenuIcon
