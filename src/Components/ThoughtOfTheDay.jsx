import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThoughtOfTheDay = () => {
  const [thought, setThought] = useState('');
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Fetch a random thought from the API
    fetchThoughtOfTheDay();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  const fetchThoughtOfTheDay = () => {
    // Fetch random thought from API
    axios.get('http://localhost:5173/api/thought-of-the-day')
      .then(response => setThought(response.data.thought))
      .catch(error => console.error(error));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Thought of the Day</h2>
            <p>{thought}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThoughtOfTheDay;
