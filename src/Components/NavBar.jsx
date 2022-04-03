import React,{useState} from 'react'
import logo from '../images/logo.png';

function NavBar() {


    const [nav,setnav] = useState(false);

    const changeBackground = () =>{
        if (window.scrollY >= 50){
            setnav(true);
        }
        else
        {
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
      <div>
    <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt='' />
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn' />
            <span className='nav-icon'></span>
            <ul className='menu'>
                <li><a href='#' className='active'>Home</a></li>

                <li><a href='#'>Home</a></li>

                <li><a href='#'>Home</a></li>

                <li><a href='#'>Home</a></li>

                <li><a href='#'>Home</a></li>

                <li><a href='#'>Home</a></li>
            </ul>
        </nav>
        </div>
  )
}

export default NavBar