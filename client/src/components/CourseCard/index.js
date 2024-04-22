import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Courses/style.css';

const CourseCard = ({ data }) => {
  const { id, title } = data;
  const navigate = useNavigate(); // Hook to navigate to other routes

  // Function to handle click event on course card
  const handleClick = () => {
    // Redirect to sub-course page when the course card is clicked
    navigate(`/sub-course/${id}`);
  };

  return (
    <div className="ag-courses_item" onClick={handleClick}>
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg">{title}</div>
        <div className="ag-courses-item_title" style={{ color: "grey" }}>
          {title}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
