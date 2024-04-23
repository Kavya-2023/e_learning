import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar11 from '../Navbar11';
import './index.css';

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://e-learning-1-jycy.onrender.com/user/contactus', { name, email, phoneNumber });
      const email_res = await axios.post('https://e-learning-1-jycy.onrender.com/contactus/sendemail', { name, email, phoneNumber });

      if (email_res.data.success === true) {
        alert(email_res.data.message);
      } else {
        alert(email_res.data.message);
      }
      
      console.log('form submitted');
      
      if (res.data.success === true) {
        navigate('/');
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Error occurred.");
    }
  }

  return (
    <div>
      <Navbar11 />
      <div className="contact-us-container">
        <div className='contactus-form-container'>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit} className='contact-form-container'>
              <input
                type="text"
                className="register__textBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              
              />
              <input
                type="text"
                className="register__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
              />
              <input
                type="number"
                className="register__textBox"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone number"
                style={{width:"100%"}}
              />
              <button className="register__btn">
                Submit
              </button>
          </form>
          <ul style={{padding:"1rem"}}>
            <li>Phone: 040-49170923</li>
            <li>Email: <a href="mailto:support@nanoquesttech.in">support@nanoquesttech.in</a></li>
            <li>Address: We work, Roshini Tech Hub, PFS Club House, EPIP Zone, Chinnapanna Halli, Bengaluru, Karnataka 560037.</li>
          </ul>
        </div>
        <div className='map-container'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d306910.86779182736!2d78.45226138670851!3d17.411605220662402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ab1884f719%3A0xd72102ad7e3b3947!2sWeWork!5e0!3m2!1sen!2sin!4v1712725310044!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
