// import React, { useState, useEffect } from 'react';

// function Stopwatch() {
//   const [isRunning, setIsRunning] = useState(false);
//   const [timeElapsed, setTimeElapsed] = useState(0);

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setTimeElapsed(prevTime => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const startStopwatch = () => {
//     setIsRunning(true);
//   };

//   const stopStopwatch = () => {
//     setIsRunning(false);
//   };

//   const resetStopwatch = () => {
//     setTimeElapsed(0);
//     setIsRunning(false);
//   };

//   const formatTime = (time) => {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = time % 60;

//     const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     return formattedTime;
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-6">
//           <div className="card text-center">
//             <div className="card-body">
//               <h1 className="card-title">Stopwatch</h1>
//               <p className="display-4">{formatTime(timeElapsed)}</p>
//               <button className={`btn ${isRunning ? 'btn-secondary' : 'btn-primary'} mr-2`} onClick={startStopwatch} disabled={isRunning}>Start</button>
//               <button className="btn btn-danger mr-2" onClick={stopStopwatch} disabled={!isRunning}>Stop</button>
//               <button className="btn btn-warning" onClick={resetStopwatch}>Reset</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stopwatch;



import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 10); // Increment by 10 milliseconds
      }, 10); // Update every 10 milliseconds
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTimeElapsed(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const milliseconds = Math.floor(time % 1000 / 10); // Get milliseconds, converting to two digits
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / (1000 * 60)) % 60;
    const hours = Math.floor(time / (1000 * 60 * 60));

    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
    return formattedTime;
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card text-center rounded-pill">
            <div className="card-body">
              <h1 className="card-title">Stopwatch</h1>
              <p className="display-4">{formatTime(timeElapsed)}</p>
              <div className="Btns d-flex justify-content-center gap-3" style={{}}>
              <button className={`btn ${isRunning ? 'btn-secondary' : 'btn-primary'} mr-2`} onClick={startStopwatch} disabled={isRunning}>Start</button>
              <button className="btn btn-danger mr-2" onClick={stopStopwatch} disabled={!isRunning}>Stop</button>
              <button className="btn btn-warning" onClick={resetStopwatch}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
