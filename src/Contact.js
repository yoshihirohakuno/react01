import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    // <!-- CONTACT -->
    <div id="contact" className="contact">
      <div className="contact-h2">
        <h2>CONTACT</h2>
      </div>

      <div className="contact-p1">
        <p>説明会お申し込み・お問い合わせ</p>
        <br />

        <p>
          ぜひ1度、足を運んでみませんか。説明会は随時開催中。
          <br />
          その他、お問い合わせもお気軽にどうぞ。お待ちしております。
          <br />
        </p>
        <p>
          ※チーズアカデミーは実際には存在しません。
          <br />
          間違っても問い合わせしないようお願いいたします。
        </p>
      </div>

      {/* // コンタクトフォーム -------// */}
      <div className="contact-form">
        <form method="post" action="">
          <table className="contact-inside">
            <tr>
              <th>
                <label for="name">名前</label>
              </th>
              <td className="form-textfild">
                <input type="text" name="name" placeholder="チーズ好太郎" />
              </td>
            </tr>

            <tr>
              <th>
                <label for="kana">カナ</label>
              </th>
              <td className="form-textfild">
                <input type="text" name="kana" placeholder="チーズコウタロウ" />
              </td>
            </tr>

            <tr>
              <th>
                <label for="email">メールアドレス</label>
              </th>
              <td className="form-textfild">
                <input
                  type="text"
                  name="email"
                  placeholder="cheese_k@mail.com"
                />
              </td>
            </tr>

            <tr>
              <th>
                <label for="notice">
                  <p>
                    チーズアカデミーを
                    <br />
                    知ったきっかけ
                  </p>
                </label>
              </th>
              <td className="form-textfild">
                <select
                  className="selectbox"
                  input
                  type="select"
                  name="myfavorite"
                >
                  <option value=""></option>
                  <option value="">google検索</option>
                  <option value="">SNS</option>
                  <option value="">紹介</option>
                  <option value="">たまたま通りかかった</option>
                  <option value="">その他</option>
                </select>
              </td>
            </tr>

            <tr>
              <th>
                <label for="hope">志望動機</label>
              </th>
              <td>
                <p className="boxtext">
                  <input type="checkbox" id="check1" />
                  <label class="htext" for="check1">
                    起業したい
                  </label>
                </p>
                <p className="boxtext">
                  <input type="checkbox" id="check1" />
                  <label class="htext" for="check2">
                    チーズ系企業に就職・転職したい
                  </label>
                </p>
                <p className="boxtext">
                  <input type="checkbox" id="check1" />
                  <label class="htext" for="check3">
                    チーズと関わる仕事をしており、仕事に生かしたい
                  </label>
                </p>
                <p className="boxtext">
                  <input type="checkbox" id="check1" />
                  <label class="htext" for="check4">
                    チーズの教養を身につけたい
                  </label>
                </p>
              </td>
            </tr>

            <tr>
              <th>
                <label for="detail">詳細</label>
              </th>
              <td>
                <textarea
                  className="detail"
                  placeholder="面白いことを書いてください"
                  cols="47"
                  rows="8"
                ></textarea>
              </td>
            </tr>
          </table>

          {/* <!-- コンタクトフォームのボタン --> */}
          <div className="submit-button">
            <input
              className="sub-button"
              type="button"
              type="submit"
              name="submit"
              value="送信"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
