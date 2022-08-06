import React from 'react'
import { render } from 'react-dom';
import Timer from '../components/Timer';
import pillIcon from '../images/pill_icon.png'
import settingIcon from '../images/setting_icon.png'
import setting from '../images/setting.png'
import add from '../images/add.png'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2E2E3D; 
`;

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 36px;
  padding: 10px 60px;
  border-radius: 50px;
  margin: 10px 0px;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const ImageIcon = styled.image`
  padding: 20px 20px;
`;

export default function Home() {
  return (
    <div style={{backgroundColor: "#2E2E3D"}}>
      <Timer />
      <Container>
        <Button>
          <img src={pillIcon} height={90} width={90} alt="Add New Pill Icon" />
          <p>
            <img src={add} height={36} width={36} />
            ยาใหม่
          </p>
        </Button>
      </Container>

      <Container>
        <Button>
          <img src={settingIcon} height={90} width={90} alt="Setting Icon" />
          <p>
            <img src={setting} height={36} width={36} />
            ตั้งค่า
          </p>
        </Button>
      </Container>
    </div>

  )
}