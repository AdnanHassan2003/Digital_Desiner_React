
import React from "react";
import './global.css'
import myimage from './image/image-1.jpg'
 import my from './image/image-2.jpg'
import image from './image/image-3.jpg'

function Projects(){
    return(
        <div id="Projects" className="Projects"> 
           
             <h1 >
                Projects
             </h1>
            <div className="ContainerProject" >
              <div className="Projec1">
                <img src={myimage} alt="" />
              <h5>Registration System</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
              
              </div>
              <div className="Project2">
                <img src={my} alt="" />
                <h5>Login System</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
            
              </div>
              <div className="Project3">
                <img src={image} alt="" />
                <h5>Portfolio project</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
             
              </div>
            </div>

        </div>
    )

}

export default Projects;
