import React from "react";
import imgPath1 from "./img/about_04.jpg";
import imgPath2 from "./img/about_03.jpg";
import imgPath3 from "./img/about_02.jpg";
import imgPath4 from "./img/about_01.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-h2">
        <h2>About</h2>
      </div>
      <div className="about-h2ja">
        <h2>チーズアカデミーについて</h2>
      </div>
      <div class="about-p1">
        <p>チーズアカデミーは、チーズ職人養成学校です。</p>
      </div>
      <div class="about-p2">
        <p>
          チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。
          <br />
          そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。
        </p>
      </div>
      <div class="about-p3">
        <p>
          そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。
        </p>
      </div>
      <div class="about-p4">
        <p>
          卒業後、チーズ自給自足のバックアップはもちろんのこと、
          <br />
          チーズ職人への就職・転職もサポートします。
        </p>
      </div>

      <div>
        <img src={imgPath1} className="image" alt="" />;
        <img src={imgPath2} className="image" alt="" />;
        <img src={imgPath3} className="image" alt="" />;
        <img src={imgPath4} className="image" alt="" />;
      </div>
    </div>
  );
};

export default About;
