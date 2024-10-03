import React, { useState } from 'react'

function Gettime() {
    // setInterval(updateTime, 1000);

    let timeNow = new Date().toLocaleTimeString();
    console.log(timeNow);
    
    const [time, setTime] = useState(timeNow);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

  return (
    <div>
        <h1>{time}</h1>
        <button onClick={updateTime}>Get Time</button>
    </div>
  )
}

export default Gettime