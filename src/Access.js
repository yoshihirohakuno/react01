import React from "react";
import styled from "styled-components";

const Access = () => {
  return (
    <div id="Access" className="Access">
      <div className="Access-h2">
        <h2>Access</h2>
      </div>
      <div className="Access-h2ja">
        <h2>会社情報</h2>
      </div>

      {/* <!--google map  --> */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.6960843364031!2d139.71298772653475!3d35.66734449647571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9faa249f2b%3A0x3563e92b2a0598d3!2z44CSMTA3LTAwNjEg5p2x5Lqs6YO95riv5Yy65YyX6Z2S5bGx77yT5LiB55uu77yV4oiS77yW!5e0!3m2!1sja!2sjp!4v1597189921135!5m2!1sja!2sjp"
          width="1200"
          height="450"
          frameborder="0"
        />
      </div>

      {/* <!-- 会社情報 --> */}
      <div className="company">
        <table>
          <tr>
            <th>学校名</th>
            <th>チーズアカデミーTOKYO</th>
          </tr>
          <tr>
            <td>事務所所在地</td>
            <td>〒107-0061東京都港区北青山3-5-6 青朋ビル2F</td>
          </tr>
          <tr>
            <td>TEL</td>
            <td>03-5413-5045</td>
          </tr>
          <tr>
            <td>FAX</td>
            <td>03-5413-5046</td>
          </tr>
          <tr>
            <td>MAIL</td>
            <td>dummy@cheeseacademy.tokyo</td>
          </tr>
        </table>
      </div>
      {/* <!-- 余白60pxがわからんのでとりあえず余白を作る --> */}
      <div className="yohaku"></div>
    </div>
  );
};

export default Access;
