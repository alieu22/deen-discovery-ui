import React, { useState } from 'react';
import NavBar from './Navbar';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link

const CoursePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
 


  const featuredCourses = [
    {
      id: 1,
      title: 'Course 1',
      instructor: 'Instructor 1',
      description: 'A course on a course that talks about a course and how the course does what the course is going to do.',
      startdate: '1/5/24',
      endate: '3/2/24',
      level: '3',
      imageUrl: 'https://online.alkauthar.org/wp-content/uploads/2017/08/99NOA_Meta_1200x630-1024x538.jpg',
    },
    {
      id: 2,
      title: 'Course 2',
      instructor: 'Instructor 2',
      description: 'A course on a course that talks about a course and how the course does what the course is going to do.',
      startdate: '7/26/24',
      endate: '9/3/24',
      level: '1',
      imageUrl: 'https://online.alkauthar.org/wp-content/uploads/2020/07/FTLM_Meta_1200x630-2-1024x538.jpg',
    },
  ];

  const handleClose = () => setShowModal(false);
  const handleShow = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

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
                <button onClick={() => handleShow(course)}>View class description</button>
               <br></br>
                <Link to={`/enroll/${course.id}`} className="enroll-link">
                  <button>Enroll Now</button>
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for course syllabus */}
      {selectedCourse && (
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCourse.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2><b>Instructor:</b> {selectedCourse.instructor}</h2>
            <h2><b>Description:</b> {selectedCourse.description}</h2>
            <h2><b>Start date:</b> {selectedCourse.startdate}</h2>
            <h2><b>End date:</b> {selectedCourse.endate}</h2>
            <h2><b>Level:</b> {selectedCourse.level}</h2>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" className='close' onClick={handleClose} style={{ color: '#000', backgroundColor: 'transparent', border: 0 }}>
             Close
            </Button>
 
           
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default CoursePage;