import React from "react";
import Timer from "../components/Timer";
import pillIcon from "../images/pill_icon.png";
import settingIcon from "../images/setting_icon.png";
import setting from "../images/setting.png";
import add from "../images/add.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2e2e3d;
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

const Title = styled.div`
  margin: 10px 0px;
  font-size: 36px;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <Container style={{ backgroundColor: "#2E2E3D", height: "100vh" }}>
      <Timer />
      <Container>
        <Link to={"/addnewmed"}>
          <Button>
            <img
              src={pillIcon}
              height={90}
              width={90}
              alt="Add New Pill Icon"
            />
            <Title>
              <img src={add} height={36} width={36} />
              ยาใหม่
            </Title>
          </Button>
        </Link>
      </Container>

      <Container>
        <Button>
          <img src={settingIcon} height={90} width={90} alt="Setting Icon" />
          <Title>
            <img src={setting} height={36} width={36} />
            ตั้งค่า
          </Title>
        </Button>
      </Container>
    </Container>
  );
}
