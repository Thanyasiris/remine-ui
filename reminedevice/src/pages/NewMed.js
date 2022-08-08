import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff9393;
`;

const Title = styled.div`
  font-size: 64px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #52525b;
  color: #ffffff;
  font-size: 36px;
  padding: 20px 50px;
  border-radius: 50px;
  margin: 10px 0px;
  align-items: center;
  justify-content: center;
`;

function NewMed() {
  return (
    <Container style={{ backgroundColor: "#FF9393", height: "100vh" }}>
      <Title>กรุณากรอกรายละเอียดยาบนแอพพลิเคชั่น</Title>
      <Link to={"/"}>
        <Button>ยกเลิก</Button>
      </Link>
    </Container>
  );
}

export default NewMed;
