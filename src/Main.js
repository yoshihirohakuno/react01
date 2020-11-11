import React from "react";
import styled from "styled-components";
import bgImg from "./img/mainbg.png";

const Mv = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0 auto;
  height: 500px;
`;

const MvH1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding-top: 100px;
`;

const MvP = styled.p`
  font-size: 30px;
  color: white;
  text-align: center;
`;

const Main = () => {
  return (
    <Mv>
      <MvH1>
        <h1>セカイを変えるチーズを作ろう</h1>
      </MvH1>
      <MvP>
        <p>チーズ職人養成学校「チーズアカデミーTOKYO」</p>
      </MvP>
    </Mv>
  );
};

export default Main;
