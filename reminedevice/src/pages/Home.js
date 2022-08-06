import React from 'react'
import { render } from 'react-dom';
import Timer from '../components/Timer';
import pillIcon from '../images/pill_icon.png'
import settingIcon from '../images/setting_icon.png'
import setting from '../images/setting.png'
import add from '../images/add.png'
import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 36px;
  padding: 10px 60px;
  border-radius: 50px;
  margin: 10px 0px;
`;

const ImageIcon = styled.image`
  padding: 20px 20px;
`;

export default function Home() {
  return (
    <div className='App'>
      <Timer/>
      <Button>
        <img src={pillIcon} height={90} width={90} alt="Add New Pill Icon"/>
        <p>
          <img src={add}/>
          ยาใหม
        </p>
      </Button>
      
      <Button>
        <img src={settingIcon} height={90} width={90} alt="Setting Icon"/>
        <p>
          <img src={setting}/>
          ตั้งค่า
        </p>
      </Button>
    </div>
  )
}