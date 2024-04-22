import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import './index.css';
import Navbar from '../Navbar11';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Profile = () => {
    const name=localStorage.getItem("name");
    const firstLetter = name.charAt(0).toUpperCase();
    const [courses,setCourses]=useState([]);
    useEffect(() => {
    fetchEnrolledCourses();
  }, [setCourses]);

  const fetchEnrolledCourses = async () => {
    try {
      const user_id = localStorage.getItem("id");
      //console.log("User ID:", user_id);
      const res = await axios.get(`http://localhost:5000/enroll/enrolledcourses?user_id=${user_id}`);
      console.log("Response:", res.data);
      if (res && res.data && res.data.success === true) {
        setCourses(res.data.enrolledCourses);
      } else {
        console.error("Failed to fetch enrolled courses:", res.data.message);
      }
    } catch (err) {
      console.error("Error fetching enrolled courses:", err);
    }
  };
  return (
    <div className='body'>
        <Navbar/>
        <aside className="profile-card">
      <header >
        <div className='header-container'>
            <div className='left'>
               <p>{firstLetter}</p>
            </div>
        <div className='right'>
        <p>{name}</p>
        </div>
        </div>
      </header>
      <div className="profile-courses profile-bio">
        <h3 style={{fontFamily:'sans-serif',fontSize:"15px",color:"black"}}>Enrolled Courses:</h3>
        {
            courses.map((item)=>{
                return (
                   <>
                      <div>
                        <FontAwesomeIcon icon={faArrowRight} />&nbsp;
 <span style={{paddingTop:"4px"}}>{item.course_name}</span>
                      </div>
                   </>
                )
            })
        }
      </div>
      <Link to='/'>
        <button className='back-btn'>back</button>
      </Link>
    </aside>
    </div>
  );
};

export default Profile;
