import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import NavBar from './Navbar';
import Button from 'react-bootstrap/Button';

function CourseInfoPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="text-center">
          <h1>T INFO 482 A Wi 24: Senior Project</h1>
          <button className="btn btn-primary" onClick={handleShow}>
            View Course Description
          </button>

          {/* Modal for course syllabus */}
          <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Course Syllabus</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Course details here */}
              <h2>Instructor: Ankur Suri</h2>
              <p><strong>Office:</strong> CP218</p>
              <p><strong>E-mail:</strong> asuri@uw.edu</p>
              <p><strong>Office Hours:</strong> Th 12:30-1:30</p>
              <h3>Senior Project</h3>
              <p>Description: Focuses on design and implantation, testing, and demonstration of the capstone design project.</p>
              {/* ... rest of the syllabus content ... */}
              <Button variant="success" className="bg-Success">Success</Button>{' '}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default CourseInfoPage;