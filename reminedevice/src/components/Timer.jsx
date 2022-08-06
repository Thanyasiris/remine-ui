import React, { Component } from 'react'
import styled from "styled-components";

const Timer = () => {
    let time = new Date().toLocaleTimeString();
    //let curTime = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    const Time = {
        fontSize: "64px",
        color: "#FF9393"
    }
    return(
        <h1 style={Time}>{time}</h1>
    );
}
export default Timer;