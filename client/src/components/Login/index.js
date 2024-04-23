import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { signInWithGoogle } from "../../firebase";

import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    try {
      const response = await axios.post("https://e-learning-1-jycy.onrender.com/user/login", {
        email,
        password,
      });
      const { result, token } = response.data;
      const { email: userEmail, name } = result; 
      localStorage.setItem("email", userEmail);
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="user-input">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="user-input">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="forgot-password">Forgot Password ? <span>Click Here!</span></div>
          <div className="submit-container">
            <div className="submit"  onClick={handleSubmit}>Login</div>
            <Link to='/signup'>
              <div className="submit">Sign Up</div>
            </Link>
          </div>
          <div className="social-container">
            <div className="google" onClick={signInWithGoogle}><FontAwesomeIcon icon={faGoogle}/></div>
            <div className="facebook"><FontAwesomeIcon icon={faFacebook}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
