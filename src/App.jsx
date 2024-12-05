import { useState, useEffect } from 'react';
import "./App.css"

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(Count => Count + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]); 
  const startCounter = () => {
    setIsRunning(true);
  };
  const stopCounter = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div className='buttons'> 
        <button  onClick={startCounter}>
        Start
      </button>
      <button onClick={stopCounter}>
        Stop
      </button>
      </div>
     
    </div>
  );
}

export default Counter;
