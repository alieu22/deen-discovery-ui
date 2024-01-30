import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThoughtOfTheDay = () => {
    const [thought, setThought] = useState('');
    const [showModal, setShowModal] = useState(true); // State to manage modal visibility

    useEffect(() => {
        axios.get('http://localhost:8080/thoughts/1')
            .then(response => {
                setThought(response.data.thought);
            })
            .catch(error => {
                console.error('There was an error fetching the thought of the day:', error);
            });
    }, []);

    const handleClose = () => {
        setShowModal(false); // Hide the modal when the close button is clicked
    };

    return (
        <>
            {showModal && ( // The modal will only render if showModal is true
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleClose}>&times;</span>
                        <h1>Thought of the Day</h1>
                        <p>{thought}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ThoughtOfTheDay;
