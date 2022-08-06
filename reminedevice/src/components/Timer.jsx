import React, { Component } from 'react'

const Timer = () => {
    let time = new Date().toLocaleTimeString();
    //let curTime = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
     
    return(
        <h1>{time}</h1>
    );
}
export default Timer;