// School.js

import React from 'react';
import './style.css';
import CourseCard from '../CourseCard';
import Navbar11 from '../Navbar11';
const skillsList = [
  {
    id: 1,
    title: 'Critical Thinking and Problem Solving',
    subCourses: [
      { id: 11, title: 'Puzzle Solving and Brain Games' },
      { id: 12, title: 'Logic and Reasoning Skills' },
      { id: 13, title: 'Creative Problem-Solving Activities' }
    ],
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    id: 2,
    title: 'Physical Education',
    subCourses: [
      { id: 21, title: 'Introduction to Sports and Physical Activities' },
      { id: 22, title: 'Yoga and Mindfulness for Kids' },
      { id: 23, title: 'Fundamental Movement Skills' }
    ],
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    id: 3,
    title: 'Social and Emotional Learning (SEL)',
    subCourses: [
      { id: 31, title: 'Emotional Intelligence for Kids' },
      { id: 32, title: 'Building Positive Relationships' },
      { id: 33, title: 'Conflict Resolution for Children' }
    ],
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    id: 4,
    title: 'Life Skills',
    subCourses: [
      { id: 41, title: 'Basic Cooking and Nutrition for Kids' },
      { id: 42, title: 'Personal Hygiene and Health Habits' },
      { id: 43, title: 'Time Management and Organizational Skills' }
    ],
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    id: 5,
    title: 'Language and Literacy',
    subCourses: [
      { id: 51, title: 'Phonics and Reading Foundations' },
      { id: 52, title: 'Storytelling and Creative Writing for Kids' },
      { id: 53, title: 'Vocabulary Building Activities' }
    ],
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    id: 6,
    title: 'Digital Marketing',
    subCourses: [
      { id: 61, title: 'Digital Marketing Fundamentals' },
      { id: 62, title: 'Social Media Marketing Strategy' },
      { id: 63, title: 'SEO (Search Engine Optimization) Certification' }
    ],
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    id: 7,
    title: 'Graphic Design and Multimedia',
    subCourses: [
      { id: 71, title: 'Graphic Design and Visual Communication' },
      { id: 72, title: 'Adobe Creative Suite Certification' },
      { id: 73, title: '3D Animation and Modeling' }
    ],
    dur: '1 hour',
    category: 'SKILLS',
  }
];


const Skills = () => {
  return (
    <div>
      <Navbar11/>
      <div className="ag-format-container">
        <h3 style={{ fontSize: "30px", textAlign: "center", fontWeight: "500" }}>Skill Courses</h3>
        <div className="ag-courses_box">
          {skillsList.map((item) => (
               <CourseCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
