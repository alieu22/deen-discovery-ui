import NavBar from './Navbar';

import React, { useEffect, useRef, useState } from 'react';
import compassImageSrc from '../images/compass.png';
import kaabaImageSrc from '../images/kaaba.png'; // Ensure this path is correct

const Compass = () => {
  const canvasRef = useRef(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [qiblaAngle, setQiblaAngle] = useState(null);
  const compassImage = new Image();
  const kaabaImage = new Image();

  const calculateQiblaDirection = (latitude, longitude) => {
    // Kaaba's geographic coordinates
    const kaabaLatitude = 21.422487;
    const kaabaLongitude = 39.826206;

    // Calculation based on spherical trigonometry
    const phiK = kaabaLatitude * (Math.PI / 180);
    const lambdaK = kaabaLongitude * (Math.PI / 180);
    const phi = latitude * (Math.PI / 180);
    const lambda = longitude * (Math.PI / 180);
    const qibla = Math.atan2(Math.sin(lambdaK - lambda), (Math.cos(phi) * Math.tan(phiK)) - (Math.sin(phi) * Math.cos(lambdaK - lambda)));

    // Convert radians to degrees and normalize the angle
    const angle = (qibla * (180 / Math.PI) + 360) % 360;
    return angle;
  };

  const drawCompass = (qiblaDirection) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const size = Math.min(window.innerWidth, window.innerHeight) * 0.8;
    canvas.width = size;
    canvas.height = size;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(compassImage, 0, 0, size, size);

    if (qiblaDirection !== null) {
      context.save();
      context.translate(size / 2, size / 2);
      context.rotate((qiblaDirection * Math.PI) / 180);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0, -size / 1);
      context.strokeStyle = 'red';
      context.lineWidth = 3;
      context.stroke();

      const kaabaSize = size * 0.1; // Adjust size as needed
      context.drawImage(kaabaImage, -kaabaSize / 2, -size / 3 - kaabaSize, kaabaSize, kaabaSize);
      
      context.restore();
    }
  };

  useEffect(() => {
    compassImage.src = compassImageSrc;
    kaabaImage.src = kaabaImageSrc;

    let imagesLoaded = 0;
    const handleImageLoad = () => {
      imagesLoaded += 1;
      if (imagesLoaded === 2) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            const direction = calculateQiblaDirection(latitude, longitude);
            setQiblaAngle(direction);
            drawCompass(direction);
          },
          (error) => {
            console.error(error);
            alert('Unable to retrieve your location for Qibla direction.');
          }
        );
      }
    };

    compassImage.onload = handleImageLoad;
    kaabaImage.onload = handleImageLoad;
  }, []);

  const canvasStyle = {
    display: 'block',
    maxWidth: '90vw',
    maxHeight: '90vh',
    margin: 'auto',
  };

  return (
    <div>
 <NavBar /> 
       <canvas ref={canvasRef} style={canvasStyle} />
      <div>
        {location.latitude && location.longitude ? (
          <p>
            Your coordinates: {location.latitude.toFixed(3)}, {location.longitude.toFixed(3)}
          </p>
        ) : (
          <p>Retrieving your location...</p>
        )}
      </div>
    </div>
  );
};

export default Compass;
