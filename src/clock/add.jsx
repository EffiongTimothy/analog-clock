// import React, { useState, useEffect } from 'react';

// function ClockApp() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);
//   const sec = 6* time.getSeconds()

//   return (
//     <div className="clock">
//       <div style={{transform: `rotate(${sec}deg)`,height:'1vh',width:'15%',color:'blue',margin:'50%'}}> uuu</div>
//       <h2>{time.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

// export default ClockApp;



import React, { useState, useEffect } from 'react';

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const secondsStyle = {
    transform: `rotate(${time.getSeconds() * 6}deg)`,
    backgroundColor: 'pink',
  };

  const minutesStyle = {
    transform: `rotate(${time.getMinutes() * 6}deg)`,
    backgroundColor: 'blue',
  };

  const hoursStyle = {
    transform: `rotate(${(time.getHours() % 12) * 30}deg)`,
    backgroundColor: 'red',
    margin: '40%',
    width: '10%',
    height: '1vh',
    borderRadius: '40%'
  };

  return (
    <div className="analog-clock">
      <div className="hand hour-hand" style={hoursStyle}>hour</div>
      <div className="hand minute-hand" style={minutesStyle}>minnn</div>
      <div className="hand second-hand" style={secondsStyle}>sec</div>
    </div>
  );
}

export default AnalogClock;
