import React, { useState } from 'react';
import NavBar from './Navbar';
import React, { useEffect, useState } from 'react';

const PrayerTimesPage = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    // Function to ask for Notification permission
    const askForNotificationPermission = () => {
      Notification.requestPermission().then((permission) => {
        if (permission !== "granted") {
          alert("Notification permission denied.");
        }
      });
    };

    // Function to fetch prayer times from an API
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch('http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2'); // Replace with actual API URL
        const data = await response.json();
        setPrayerTimes(data);
        schedulePrayerNotifications(data);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    };

    // Function to schedule notifications
    const schedulePrayerNotifications = (times) => {
      for (const [prayer, time] of Object.entries(times)) {
        const prayerTime = new Date(time); // Assuming time is in a suitable format
        const timeout = prayerTime - new Date();
        if (timeout > 0) {
          setTimeout(() => {
            new Notification(`Time for ${prayer}`, { // The notification
              body: `It's time for ${prayer} prayer.`,
              // Include any additional notification options you want to use
            });
          }, timeout);
        }
      }
    };

    askForNotificationPermission();
    fetchPrayerTimes();
  }, []);

  return (
    <div>
      <h1>Prayer Times</h1>
      {prayerTimes ? (
        <ul>
          {Object.entries(prayerTimes).map(([prayer, time]) => (
            <li key={prayer}>{`${prayer}: ${time}`}</li>
          ))}
        </ul>
      ) : (
        <p>Loading prayer times...</p>
      )}
    </div>
  );
};

export default PrayerTimesPage;
