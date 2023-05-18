import React, { useEffect, useState } from "react";
import '../clock/clock.css'

function CLock(){
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const secondsRotation = 6 * time.getSeconds(); 
  const minutesRotation = 6 * time.getMinutes() -90; 
  const hoursRotation = 30 * (time.getHours() % 12) + minutesRotation / 12 -83; 

  
    return(
<div className="mainCircle">
    <div className="clock">
        <div className="numbers">
            <p className="twelve" style={{color:`${secondsRotation === 12}? '': 'red`}}>12</p>
            <p className="one">1</p>
            <p className="two">2</p>
            <p className="three">3</p>
            <p className="four">4</p>
            <p className="five">5</p>
            <p className="six">6</p>
            <p className="seven">7</p>
            <p className="eight">8</p>
            <p className="nine">9</p>
            <p className="ten">10</p>
            <p className="eleven">11</p>
        <div
          className="hour"   style={{transform: `rotate(${hoursRotation}deg)`}}></div>
        <div
          className="minute"
          style={{
            transform: `rotate(${minutesRotation}deg)`,
            transition: '1s linear' 
          }} >

          </div>
        <div
          className="second"   style={{ transform: `rotate(${secondsRotation}deg)`,
          transition:' 1s linear' 
        }}></div>
          <div className="middle"></div>
      </div>
        </div>
    </div> 
    );
}
export default CLock;