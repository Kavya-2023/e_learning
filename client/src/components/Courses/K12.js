// School.js

import React from 'react';
import './style.css';
import CourseCard from '../CourseCard';
import Navbar11 from '../Navbar11';
import { totalData } from '../Data/totalData';
const K12 = () => {
  const k12List = totalData.filter(item => item.category === 'K12');
  return (
    <div>
      <Navbar11/>
      <div className="ag-format-container">
        <h3 style={{ fontSize: "30px", textAlign: "center", fontWeight: "500" }}>K12 Courses</h3>
        <div className="ag-courses_box">
          {k12List.map((item) => (
               <CourseCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default K12;
