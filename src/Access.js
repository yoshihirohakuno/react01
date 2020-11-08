import React from "react";

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.396444816527!2d139.71190211506917!3d35.6672391801975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9fa9e2e881%3A0x35396adb5ba7ce03!2z44K444O844K644Ki44Kr44OH44Of44O85p2x5Lqs77yP6LW35qWt5a6244Ko44Oz44K444OL44Ki6aSK5oiQ5a2m5qCh77yI44OX44Ot44Kw44Op44Of44Oz44Kw77yJ!5e0!3m2!1sja!2sjp!4v1597040262602!5m2!1sja!2sjp"
          width="1200"
          height="300"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
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
