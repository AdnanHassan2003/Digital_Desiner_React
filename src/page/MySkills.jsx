import React from 'react'
import './global.css'
import front_end from "./image/Front-end.jpg"
import visual from "./image/image-4.jpg"
import asp from "./image/image-5.jpg"
function MySkills() {
  return (
    <div>
           <section id='Skill'>
            <div className='Skills'>
                <h1>My Skills</h1>
                <div className="box-container">
                    <div className="box">
                        <img src={front_end} alt="front-end" />
                        <h4>Front-End Developer</h4>
                        <p>I'm Software Developer Expert With Front-End Development, Looking to be Full-Stack Web Developer &  I want to learn Flutter for App Development</p>
                    </div>

                    <div className="box">
                        <img src={visual} alt="visual studio" />
                        <h4>Visual Studio</h4>
                        <p>Most of time i use this tool for my projects, this is our environment if we are WebDevelopers.</p>
                    </div>

                    <div className="box">
                        <img src={asp} alt="Asp.Net" />
                        <h4>Asp.Net</h4>
                        <p>This is C# FrameWork I build one projects of Student registration system it's easy to learn burt it's only for desktop application.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MySkills