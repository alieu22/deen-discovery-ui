// Dashboard.jsx

import React, { useEffect } from 'react';
import NavBar from './Navbar';
import ThoughtOfTheDay from './ThoughtOfTheDay';
import QiblaDirection from './QiblaCompassPage'; 
import CoursePage from './CoursePage';
import DiscussionForum from './DiscussionForum'; // Import DiscussionForum component

const Dashboard = () => {
  useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
    <div>
       <NavBar isLoggedIn={true} />
      <div className="landing-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Deen Discovery App</h1>
            <p>Discover knowledge and wisdom for your spiritual journey.</p>
          </div>
        </section>
        <section className="featured-categories-section">
          <CoursePage isLoggedIn={true} onLogout={() => {}} />
        </section>
        <section className="discussion-forum-section">
          <DiscussionForum />
        </section>
        <section className="history-section">
          <div className= "prayer-time">
            <h2>Prayer Time</h2>
          <iframe
          style={{
              width: '100%', // Make it take 100% width of the container
              height: '360px', // Make it take 100% height of the container
              border: '1px solid #ddd',
              borderRadius: '100px',
            }}
            src="https://www.islamicfinder.org/prayer-widget/"
          ></iframe>
          </div>
        </section>

        <section className="qibla-direction-section">
          <QiblaDirection />
        </section>

        <section className="Islamic-Days-section">
            <h2>Special Islamic Days</h2>
          <iframe 
          style={{
              width: '100%', // Make it take 100% width of the container
              height: '410px',
              border: '1px solid #ddd',
              borderRadius: '100px',
            }} 
          src="https://www.islamicfinder.org/specialislamicdays"> </iframe>
        </section>



        <ThoughtOfTheDay />
      </div>
    </div>
  );
};

export default Dashboard;
