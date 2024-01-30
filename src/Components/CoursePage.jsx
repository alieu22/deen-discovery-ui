// CoursePage.jsx
import React from 'react';
import NavBar from './Navbar';

const CoursePage = () => {
  // Dummy data for featured courses
  const featuredCourses = [
    {
      id: 1,
      title: 'Course 1',
      instructor: 'Instructor 1',
      imageUrl: 'https://online.alkauthar.org/wp-content/uploads/2017/08/99NOA_Meta_1200x630-1024x538.jpg',
    },
    {
      id: 2,
      title: 'Course 2',
      instructor: 'Instructor 2',
      imageUrl: 'https://online.alkauthar.org/wp-content/uploads/2020/07/FTLM_Meta_1200x630-2-1024x538.jpg',
    },
    // Add more courses as needed
  ];

  return (
    <>
      <NavBar />
      <div className="course-page">
        <h2>Featured Courses</h2>
        <div className="featured-courses">
          {featuredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.imageUrl} alt={course.title} />
              <div className="course-details">
                <h3>{course.title}</h3>
                <p>Instructor: {course.instructor}</p>
                <button>Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursePage;
