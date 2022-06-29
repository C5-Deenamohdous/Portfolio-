import React from 'react'
import "./style.css"
function About() {
  return (
  <div className='main'>
    <div className='mainAbout'> 
         <div className='headerAbout'> 
         <marquee width="100%" direction="down"  scrollamount="8" height="100px">
         Me, Myself and I.
</marquee>
    </div>
  
    <div className='pagAbout'>

<p>My Name is <b>Dina</b> I'm a Full-Stack <b>Developer </b> based in Amman . I describe myself as a passionate developer, I enjoy Helping People, and love to learn new Technologies </p>
    </div>
    
    </div>
    <div className='picAbout'>
   
    </div>
   </div>
  )
}

export default About