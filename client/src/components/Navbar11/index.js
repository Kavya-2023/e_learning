import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar11 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const [userData, setUserData] = useState(null);
  const [enrolledCourses,setEnrolledCourses]=useState([]);
  const [user] = useAuthState(auth);

  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");

  const fetchUserData = async () => {
  try {
    const userResponse = await axios.get('https://e-learning-1-jycy.onrender.com/user/profile', {
      params: {
        email: userEmail
      }
    });

    const coursesResponse = await axios.get('https://e-learning-1-jycy.onrender.com/course/getpaidcourses', {
      params: {
        email: userEmail
      }
    });

    if (userResponse.status === 200 && coursesResponse.status === 200) {
      setUserData(userResponse.data);
      setEnrolledCourses(coursesResponse.data.courseNames);
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    console.error(error);
  }
};


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload();
  };

  useEffect(() => {
    if (token && userEmail) {
      fetchUserData();
    }
  }, [token, userEmail]);

  return (
    <nav>
      <Link to="/" className="title">
        <img className='main-logo' src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1706082314/MicrosoftTeams-image_1_tiacii.jpg" alt="Logo" title="logo"/>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/courses">COURSES</NavLink>
        </li>
        <li className='nav-item' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link to="#">
            COMPANY <FontAwesomeIcon icon={faCaretDown} style={{color:"blue"}}/>
          </Link>
          <ul className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </li>
        <li>
          <NavLink to="/blog">BLOG</NavLink>
        </li>
        
        {userEmail? (
          <li className='nav-item' onMouseEnter={toggleProfileDropdown} onMouseLeave={toggleProfileDropdown}>
            <Link to="#" className="userLink">
              <div style={{ fontSize: "17px"}} className='user-icon' ><FontAwesomeIcon icon={faUser} /></div>
            </Link>
            <ul className={`profiledropdown ${isProfileDropdown ? 'active' : ''}`}>
              {userData ? (
                <>
                <h5 style={{textAlign:"center",color:"black",fontSize:"1rem"}}>Welcome {userData.name}</h5>
                  <p style={{textAlign:"center",color:"black",fontSize:"0.8rem"}}>{userData.email}</p>
                  <h6 style={{color:"black",textDecoration:"underline"}}>Enrolled Courses:</h6>
                  <ul>
                    {enrolledCourses.map((course, index) => (
                       <li key={index}>{course}</li>
                       ))}
                  </ul>
                </>
              ) : (
                <p>Loading...</p>
              )}
              <button>Settings</button>
              <button>
                <Link to='/cart'>
                Cart
                </Link>
              </button>
              <button onClick={handleLogout}>Logout</button>
            </ul>
          </li>
        ) : (
          <li>
            <Link to="/signup" className='btn-login'>
              SignUp
            </Link>
          </li>
        )}
        <li>
          <p style={{marginTop:".6rem"}}>040-49170923</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar11;
