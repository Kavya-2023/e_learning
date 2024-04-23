import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { signInWithGoogle } from "../../firebase"; // Import signInWithGoogle function

import "./index.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please enter name, email, and password");
      return;
    }

    try {
      const response = await axios.post("https://e-learning-1-jycy.onrender.com/user/signup", {
        name,
        email,
        password,
      });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="user-input">
            <FontAwesomeIcon icon={faUser}/>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="user-input">
            <FontAwesomeIcon icon={faEnvelope}/>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="user-input">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="submit-container">
            <div className="submit" onClick={handleSubmit}>Sign Up</div>
            <Link to='/login'>
              <div className="submit">Login</div>
            </Link>
          </div>
          {/*<div className="social-container">
            <div className="google" onClick={signInWithGoogle}><FontAwesomeIcon icon={faGoogle} /></div>
            <div className="facebook"><FontAwesomeIcon icon={faFacebook}/></div>
  </div>*/}
        </div>
      </div>
    </div>
  );
}

export default Register;
