// src/FallingObject.js
import React, { useEffect } from 'react';
import './FallingObject.css';

const FallingObject = ({ id, onClick, left }) => {
    useEffect(() => {
        const handleTransitionEnd = () => {
            onClick(id, false);
        };
        const element = document.getElementById(`falling-object-${id}`);
        // Apply the `falling` class to start the transition
        setTimeout(() => {
            if (element) {
                element.classList.add('falling');
            }
        }, 100); // Delay slightly to ensure the initial position is set

        element.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            element.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [id, onClick]);

    return (
        <div
            id={`falling-object-${id}`}
            className="falling-object"
            style={{ left: `${left}px` }}
            onClick={() => onClick(id, true)}
        />
    );
};

export default FallingObject;
