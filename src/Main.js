import React from "react";
import imgPath from "./img/mainbg.png";

const Main = () => {
  return (
    <>
      <img src={imgPath} className="mv" alt="" />;
      <div className="mv-h1">
        <h1>セカイを変えるチーズを作ろう</h1>
      </div>
      <div className="mv-p">
        <p>チーズ職人養成学校「チーズアカデミーTOKYO」</p>
      </div>
    </>
  );
};

export default Main;
