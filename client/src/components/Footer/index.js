import React from "react";
import { Link } from 'react-router-dom';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import './index.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content"> 
        <div className="quick-links">
          <h1>Quick Links</h1>
          <ul>
            <Link to='/'>
              <li className="link">Home</li>
            </Link>
            <Link to='/courses'>
              <li className="link">Courses</li>
            </Link>
            <Link to='/blog'>
              <li className="link">Blog</li>
            </Link>
            <Link to='/careers'>
              <li className="link">Become an Instructor</li>
            </Link>
          </ul>
        </div> 
        <div className="quick-links">
          <h2>Company</h2>
          <ul>
            <Link to='/aboutus'>
              <li className="link">About us</li>
            </Link>
            <Link to='/contactus'>
              <li className="link">Contact us</li>
            </Link>
            <Link to='/teams'>
              <li className="link">Teams</li>
            </Link>
            <Link to='/careers'>
              <li className="link">Careers</li>
            </Link>
          </ul>
        </div> 
        <div className="quick-links">
          <h2>Legal</h2>
          <ul>
            <Link to='/privacypolicy'>
              <li className="link">Privacy Policy</li>
            </Link>
            <Link to='/termsandconditions'>
              <li className="link">Terms and Conditions</li>
            </Link>
            <Link to='/refundandcancellation'>
              <li className="link">Refund and Cancellation</li>
            </Link>
          </ul>
        </div> 
        <div className="quick-links">
          <h2 style={{marginBottom:"2rem"}}>Follow us</h2>
          <ul className="quick-links-2 ">
            <li>
              <a href='https://www.facebook.com/nanoquestet' className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="social-img" title="facebook"/>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/nanoquest' className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="social-img" title="instagram"/>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com/nanoquestedtech' className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" className="social-img" title="twitter"/>
              </a>
            </li> 
            <li>
              <a href='https://www.linkedin.com/company/100962715' className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="social-img" title="linkedin"/>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/NANOQUEST ET' className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube" className="social-img" title="youtube"/>
              </a>
            </li>
          </ul>
        </div>
     </div>
      <div className="copyright">
        © 2023&nbsp;Nanoquest All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
