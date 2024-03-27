import React from 'react'
import image from '../image/Ad.jpg'
import '../global.css'
import Start from './Start'
function Body() {
  return (
    <div className='Body'>
       <div> <img src={image} alt="hh" /></div>
        
            <h1>Hi i'm Adnan, <br /> A Digital Designer</h1>
            
            <p> Transforming your digital version into reality:innovation web designer <br />
                  by a proffetional web designer!
            </p>
    <Start/>
    </div>
  )
}

export default Body