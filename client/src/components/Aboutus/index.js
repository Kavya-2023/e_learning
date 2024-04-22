import React from 'react'
import './index.css';
import Navbar11 from '../Navbar11';
import aboutUs from '../../assets/aboutus.jpg'
const Aboutus = () => {
  return (
    <div>
        <Navbar11/>
         <div className="about-us-section">
          
          <div className="container-1">
            <h2>Welcome to Our E-Learning Platform</h2>
            <img src={aboutUs} alt="aboutus-img"/>
            <p className="mission-statement">
             Welcome to Nanoquest, where online learners embark on a journey of skill enhancement like never before. Our interactive learning platform is designed to engage, inspire, and empower individuals to reach their full potential. At Nanoquest, we understand the importance of continuous learning in today's fast-paced world. That's why we offer a wide range of courses and resources tailored to meet the diverse needs of our target audience. Whether you're looking to upskill for your career, explore a new hobby, or simply expand your knowledge, Nanoquest has something for everyone. Our company culture is built on a foundation of innovation, collaboration, and a passion for learning. We believe in creating a supportive and inclusive environment where learners can thrive and grow. Join us on this quest for knowledge and skills, and unlock your true potential with Nanoquest.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Aboutus