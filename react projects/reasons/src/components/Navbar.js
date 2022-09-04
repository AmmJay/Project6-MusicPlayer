import React from 'react';
import MyLogo from '../logo.svg'

function Navbar() {
  return (
    <div>
      {/* <h1>navbar</h1> */}
        <nav>
            <div id="left">
                <img src={MyLogo} alt="" />
                <h1>React Facts</h1>
            </div>
            <div id="right">
                <h3>React Course - Project 1</h3>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
