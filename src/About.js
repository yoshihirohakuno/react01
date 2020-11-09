import React from "react";
import styled from "styled-components";
import imgPath1 from "./img/about_04.jpg";
import imgPath2 from "./img/about_03.jpg";
import imgPath3 from "./img/about_02.jpg";
import imgPath4 from "./img/about_01.jpg";

const About_h2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #ffd61a;
  text-align: center;
  padding-top: 60px;
`;

const About_h2ja = styled.h2`
  font-size: 18px;
  color: #222222;
  text-align: center;
  padding: 30px 0px 60px 0px;
`;
const About_p = styled.p`
  font-size: 16px;
  color: #222222;
  text-align: center;
  padding-bottom: 40px;
`;

const About = () => {
  return (
    <div id="about" className="about">
      <About_h2 className="about-h2">
        <h2>About</h2>
      </About_h2>
      <About_h2ja className="about-h2ja">
        <h2>チーズアカデミーについて</h2>
      </About_h2ja>
      <About_p className="about-p1">
        <p>チーズアカデミーは、チーズ職人養成学校です。</p>
        <br />
        <p>
          チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。
          <br />
          そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。
        </p>
        <br />
        <p>
          そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。
        </p>
        <br />
        <p>
          卒業後、チーズ自給自足のバックアップはもちろんのこと、
          <br />
          チーズ職人への就職・転職もサポートします。
        </p>
      </About_p>

      <div className="image">
        <img src={imgPath1} className="image" alt="" />
        <img src={imgPath2} className="image" alt="" />
        <img src={imgPath3} className="image" alt="" />
        <img src={imgPath4} className="image" alt="" />
      </div>
    </div>
  );
};

export default About;
