import React from 'react';
import NavBar from './NavBar';
function Header() {
    return (
       <div id='main'>
           <NavBar />
           <div className='name'>
               <h1>Lanuch Your App <span>With Confidence And Creativily</span> </h1>
               <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem ad, provident vero quis tenetur labore ratione rem fugit expedita qui placeat, enim deserunt. Aperiam, quisquam! Fugit eum alias id.</p>
               <a href='#' className='cv-btn'>Download</a>
           </div>
       </div>
    )
}

export default Header