import React from 'react'
import "./NewPostOption.css"

function NewPostOption({Icon, title}) {
  return (
    <div className='newPostOption'>
      <img src={Icon} alt="" />
      <p>{title}</p>
    </div>
  )
}

export default NewPostOption
