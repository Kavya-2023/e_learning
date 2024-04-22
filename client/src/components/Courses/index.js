import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar11';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { totalData } from '../Data/totalData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Courses = () => {
  const [currentCategory, setCurrentCategory] = useState();
  const [currentCourses, setCurrentCourses] = useState([]);
  const [filterType, setFilterType] = useState(localStorage.getItem('filterType') || "All");
  const navigate=useNavigate();
  useEffect(() => {
    const initialCategory = totalData[7]; 
    setCurrentCategory(initialCategory);
    setCurrentCourses(applyFilter(initialCategory));
  }, []); 

  useEffect(() => {
    setCurrentCourses(applyFilter(currentCategory));
  }, [currentCategory, filterType]);

  const applyFilter = (category) => {
    if (!category) return [];
    
    let filteredCourses = category.courses;
    if (filterType === "Free") {
      filteredCourses = filteredCourses.filter(course => course.price_in_rupees === 0);
    } else if (filterType === "Premium") {
      filteredCourses = filteredCourses.filter(course => course.price_in_rupees !== 0);
    }
    return filteredCourses;
  };

  const handleFilterChange = (filter) => {
    setFilterType(filter);
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  const addToCart = async (course_id, course_name, course_price) => {
    const email = localStorage.getItem("email");
    try {
      const response = await axios.post('http://localhost:5000/enroll/enroll', { email,  course_id: course_id.toString(), course_name, course_price });
      if (response.data.success === true) {
        console.log("Added successfully");
        navigate('/cart')
      } else {
        console.log("Error: Not added");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem('filterType', filterType);
  }, [filterType]);

  return (
    <>
      <NavBar />
      <div className='courses-container'>
        <div className='left-bar'>
          <div className='category-buttons-container'>
            <label style={{ color: 'black' }}>
              <input
                type="radio"
                name="filter"
                value="All"
                checked={filterType === "All"}
                onChange={() => handleFilterChange("All")}
              />
              All
            </label>
            <label style={{ color: 'black' }}>
              <input
                type="radio"
                name="filter"
                value="Free"
                checked={filterType === "Free"}
                onChange={() => handleFilterChange("Free")}
              />
              Free
            </label>
            <label style={{ color: 'black' }}>
              <input
                type="radio"
                name="filter"
                value="Premium"
                checked={filterType === "Premium"}
                onChange={() => handleFilterChange("Premium")}
              />
              Premium
            </label>
          </div>
          {totalData.map((category) => (
            <div
              key={category.id}
              className={currentCategory && currentCategory.category === category.category ? 'category-left-card active' : 'category-left-card'}
              onClick={() => handleCategoryClick(category)}
            >
              <p className='category-button'>{category.category}</p>
              <FontAwesomeIcon icon={faChevronRight} className='left-bar-icon' />
            </div>
          ))}
        </div>
        <div className='right-bar'>
          <div className='right-bar-header-container'>
            <h3>{currentCategory && currentCategory.category}</h3>
          </div>
          <div className='right-bar-container'>
            {currentCourses.map(course => (
              <div key={course._id} className='course-cards-right-bar'>
                <p>{course.course}</p>
                <div className='course-card-content'>
                  <p>{course.price_in_rupees === 0 ? 'Free' : <><FontAwesomeIcon icon={faRupeeSign} /> {course.price_in_rupees}</>}</p>
                  <button onClick={() => addToCart(course._id, course.course, course.price_in_rupees)}>Enroll</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
