import React from "react";
import styled from "styled-components";
import imgPath1 from "./img/course_01.jpg";
import imgPath2 from "./img/course_02.jpg";
import imgPath3 from "./img/course_03.jpg";

const CouseH3 = styled.h3`
  font-size: 26px;
  font-weight: bold;
  padding: 30px 0 20px 50px;
`;
const Box3TextH3 = styled.h3`
  font-size: 26px;
  font-weight: bold;
  padding: 40px 0px 40px 0px;
  display: block;
  margin: 0px 50px 0px 120px;
`;

const Course = () => {
  return (
    <div id="course" className="course">
      <div className="course-h2">
        <h2>COURSE</h2>
      </div>
      <div className="course-p">
        <p>未経験からでもスタートができるよう、カリキュラムは多くの専門家や</p>
        <p>現役チーズ職人のアドバイスのもと、作られました。</p>
      </div>

      {/*上段部分  以下６個のブロックとして考えてます*/}
      <div className="box-top">
        <div className="box1">
          <img src={imgPath1} className="box1" alt="" />;
        </div>

        <div className="box2">
          <CouseH3 className="text-h3">
            <h3>本格的な農園を使った実地研修</h3>
          </CouseH3>

          <div className="text-p">
            <p>
              チーズアカデミーでは、本格的な農園を使った実地研修を
              <br />
              行うことができます。プロとして活躍するチーズ職人も
              <br />
              使用するような、広大で環境も整った農園を余すところ
              <br />
              なく使い、卒業時には本格的なチーズを自分の力で作れる
              <br />
              実践力の養成を目指します。{" "}
            </p>
          </div>
        </div>
      </div>

      {/* 中段部分 */}
      <div className="box-middle">
        <div className="box3">
          <Box3TextH3 className="box3-text-h3">
            <h3>必要な知識もしっかりと取得</h3>
          </Box3TextH3>

          <div className="box3-text-p">
            <p>
              チーズ作りには、しっかりとした食に関する知識が
              <br />
              欠かせません。チーズアカデミーでは、一流講師陣による、
              <br />
              チーズ作りに必要ないろはを余すところなく学べます。
              <br />
              チーズそのものでなく、栄養学全般を学ぶことも
              <br />
              可能ですので、チーズ以外への展開も夢ではないでしょう。
            </p>
          </div>
        </div>
        <div class="box4">
          <img src={imgPath2} className="box4" alt="" />
        </div>
      </div>

      {/* 下段部分 */}
      <div className="box-bottom">
        <div className="box5">
          <img src={imgPath3} className="box5" alt="" />
        </div>

        <div className="box6">
          <CouseH3 className="text-h3">
            <h3>卒業制作はティスティング審査あり</h3>
          </CouseH3>

          <div className="text-p">
            <p>
              チーズアカデミーでは最後の2ヶ月間で卒業制作を実施。
              <br />
              卒業制作として、チーズ作りを実際に行います。卒業後、
              <br />
              一般参加によるティスティング審査があるため、作り手の
              <br />
              目線だけでなく、消費者の目線から、卒業制作作品としての
              <br />
              チーズを、しっかりと評価いただくことができます。
            </p>
          </div>
        </div>
      </div>
    </div>
    // Course全体の閉じ
  );
};

export default Course;
