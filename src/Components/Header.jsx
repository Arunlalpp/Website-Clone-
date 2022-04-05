import React from 'react';
import NavBar from './NavBar';
function Header() {
    return (
       <div id='main'>
           <NavBar />
           <div className='name'>
               <h1>Lanuch Your App <span>With Confidence And Creativily</span> </h1>
               <p className='details'>Apps</p>
               <a href='#' className='cv-btn'>Download</a>
           </div>
       </div>
    )
}

export default Header