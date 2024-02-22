// QiblaDirection.jsx

import React, { useEffect, useState } from 'react';

const QiblaDirection = () => {
  const [qiblaAngle, setQiblaAngle] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const qiblaDirection = calculateQiblaDirection(latitude, longitude);
        setQiblaAngle(qiblaDirection);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    const handleDeviceOrientation = (event) => {
      const { alpha } = event;
      if (alpha !== null) {
        setQiblaAngle(alpha);
      }
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  const calculateQiblaDirection = (latitude, longitude) => {
    const kaabaCoordinates = { lat: 21.4225, lon: 39.8262 }; // Coordinates of the Kaaba in Mecca
    const userCoordinates = { lat: latitude, lon: longitude };

    const phiK = (kaabaCoordinates.lat * Math.PI) / 180.0;
    const lambdaK = (kaabaCoordinates.lon * Math.PI) / 180.0;
    const phi = (userCoordinates.lat * Math.PI) / 180.0;
    const lambda = (userCoordinates.lon * Math.PI) / 180.0;

    const y = Math.sin(lambdaK - lambda);
    const x = Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda);

    const qiblaDirection = Math.atan2(y, x) * (180.0 / Math.PI);

    return (qiblaDirection + 360) % 360; // Ensure the result is positive and between 0 and 360 degrees
  };

  return (
    <div className="qibla-direction">
      <h2>Qibla Direction</h2>
      <div className="compass" style={{ transform: `rotate(${qiblaAngle}deg)` }}>
        <div className="needle"></div>
      </div>
    </div>
  );
};

export default QiblaDirection;
