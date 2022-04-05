import React from 'react';
import footer from '../images/logo.png';

function Footer() {
  return (
    <div id='footer-sec'>
        <div className='section'>
        <div  className='footer'>
                <img src={footer} alt='' />
            </div>
            <ul className='footer-lists'>
                <h4  className='footer-text'>Products & Services</h4>
                <li>App Subscription Clubs</li>
                <li>Games Club</li>
                <li>Kids Club</li>
                <li>Apps Club</li>
                <li>App Store</li>
            </ul>
            <ul className='footer-list'>
                <h4  className='footer-text'>Quick Links</h4>
                <li>Start</li>
                <li>Products</li>
                <li>VAS Services</li>
                <li>Clients</li>
                <li>Blog</li>
            </ul>
            <ul className='footer-list'>
                <h4 className='footer-text'>About US</h4>
                <li>Company Introduction</li>
                <li>Careers</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
            <ul className='footer-list'>
                <h4 className='footer-text'>Contact us</h4>
                <li>india,Kerala</li>
                <li>+91 455485467863</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer