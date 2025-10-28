import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li> 
            <li>Menu</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-231-323-3145</li>
            <li>contact@Timmy.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>&copy; 2024 Timmy. All rights reserved.</p>
    </div>
  )
}

export default Footer
