import React from 'react'
import '../global.css'
function Header() {
  return (
    <div className='Header'>
        <div className='logo'>
            <h3>DesignWith <span>Adnan</span></h3>
        </div>
            <div>
                <nav>
                    <a href="#Projects">projects</a>
                    <a href="#Bio">About</a>
                    <a href="#Skill">Skills</a>
                    <a href="#Contact">contact</a>
                </nav>
            </div>
    </div>
  )
}

export default Header