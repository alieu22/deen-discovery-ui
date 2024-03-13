// App.jsx
//import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import CoursePage from './Components/CoursePage';
import Dashboard from './Components/Dashboard';
import QiblaCompassPage from './Components/QiblaCompassPage'; 
import CommonDuasPage from './Components/CommonDuasPage';
import EnrollmentPage from './Components/EnrollmentPage';
import LogoutPage from './Components/LogoutPage'; // Import LogoutPage
import DiscussionForum from './Components/DiscussionForum';
import CourseinfoPage from './Components/CourseInfoPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <>
        <Routes>
        <Route
            path="/login"
            element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="Course" element={<CoursePage />} />
          <Route path="/course/:courseId" element={<CourseinfoPage />} /> {/* New route for enrollment */}
          <Route path="/enroll/:courseId" element={<EnrollmentPage />} /> {/* New route for enrollment */}
          <Route
            path="Dashboard"
            element={<Dashboard isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
          />
          <Route path="/Discussion" element={<DiscussionForum />} /> {/* Add this route */}
          <Route path="logout" element={<LogoutPage onLogout={handleLogout} />} /> {/* New route for LogoutPage */}
          <Route path="/qibla-compass" element={<QiblaCompassPage />} />
          <Route path="/DuaSearch" element={<CommonDuasPage/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
