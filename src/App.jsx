import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styled from "styled-components";
import gsBg from "./assets/gs.png";

import "./App.css";

const MainTitle = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 60px;
  margin: 50px auto;
  background: #03a7ea;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;

  &:hover {
    color: #fff;
    opacity: 0.5;
  }
`;

const Test = styled.div`
  color: #fff;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.orange ? "orange" : "red")};
`;

function App() {
  return (
    <div className="App">
      <MainTitle>Gsアカデミーへようこそ</MainTitle>
      <img src={gsBg} />
      <Link href="https://gsacademy.jp/">ジーズ申し込みはこちらへ</Link>
    </div>
  );
}

export default App;
