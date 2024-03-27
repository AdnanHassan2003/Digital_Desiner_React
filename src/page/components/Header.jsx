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
                    <a href="">projects</a>
                    <a href="">About me</a>
                    <a href="">FAQ</a>
                    <a href="">contact</a>
                </nav>
            </div>
    </div>
  )
}

export default Header