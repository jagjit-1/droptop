// src/App.js
import React, { useState, useEffect } from 'react';
import FallingObject from './FallingObject';
import { useSearchParams } from "react-router-dom";
import './App.css';

const App = () => {
  const [objects, setObjects] = useState([]);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState("null");
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      if (initDataUnsafe && initDataUnsafe.user) {
        setUser(initDataUnsafe.user);
      }
    }
  }, [])

  useEffect(() => {
    // Spawn new object every second
    const interval = setInterval(() => {
      setObjects((prevObjects) => [
        ...prevObjects,
        { id: counter, left: Math.random() * (window.innerWidth - 50) }
      ]);
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  const handleObjectClick = (id, isPoint) => {
    if (isPoint) setScore(score => score + 1)
    setObjects((prevObjects) => prevObjects.filter((object) => object.id !== id));
  };

  return (
    <div className="App">
      <div style={{ color: 'white', fontWeight: 500, fontSize: "25px" }}>
        The current score {score}
        <div>
          {user}
        </div>
        <div>
          {searchParams.get('tgWebAppStartParam')}
        </div>
      </div>

      {objects.map((object) => (
        <FallingObject
          key={object.id}
          id={object.id}
          onClick={handleObjectClick}
          left={object.left}
        />
      ))}
    </div>
  );
};

export default App;
