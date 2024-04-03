import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page/Home'
import Projects from './page/Projects'
import MySkills from './page/MySkills'
import Contacts from './page/Contacts'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Home/>

      <Projects/>
      <MySkills/>
      <Contacts/>
  </React.StrictMode>,
)
