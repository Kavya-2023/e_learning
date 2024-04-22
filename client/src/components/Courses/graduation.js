// School.js

import React from 'react';
import './style.css';
import CourseCard from '../CourseCard';
import Navbar11 from '../Navbar11';
import { totalData } from '../Data/totalData';
const Graduation = () => {
  const graduationList = totalData.filter(item => item.category === 'GRADUATION');
  return (
    <div>
      <Navbar11/>
      <div className="ag-format-container">
        <h3 style={{ fontSize: "30px", textAlign: "center", fontWeight: "500" }}>Graduation Courses</h3>
        <div className="ag-courses_box">
          {graduationList.map((item) => (
               <CourseCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Graduation;
