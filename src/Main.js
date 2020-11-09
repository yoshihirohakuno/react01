import React from "react";
import styled from "styled-components";
import Background from "./img/mainbg.png";
// background: url(./img/mainbg.png);

const Mv_h1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding-top: 100px;
`;

const Mv_p = styled.p`
  font-size: 30px;
  color: white;
  text-align: center;
`;

const Main = () => {
  return (
    <div className="mv">
      <Mv_h1>
        <h1>セカイを変えるチーズを作ろう</h1>
      </Mv_h1>
      <Mv_p className="mv-p">
        <p>チーズ職人養成学校「チーズアカデミーTOKYO」</p>
      </Mv_p>
      {/* <img src={imgPath} className="mv" alt="" />; */}
    </div>
  );
};

export default Main;
