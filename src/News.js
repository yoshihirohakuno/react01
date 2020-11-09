import React from "react";
import styled from "styled-components";
import imgPath from "./img/news_img.jpg";

const News = () => {
  return (
    <>
      <div id="news" className="news">
        <div className="news-h2">
          <h2>NEWS</h2>
        </div>
        <div className="news-h2ja">
          <h2>ニュース</h2>
        </div>

        <div className="news-contents">
          <div className="news_1">
            <img src={imgPath} className="news_1" alt="" />
            <div className="date">
              <p>2016/11/18</p>
              <p>
                チーズアカデミー卒業生のコスゲさんによる
                <br />
                チーズだけをふんだんに使用した話題のピザ屋
                <br />
                「Kosuge Pizza」が渋谷でオープンしました！
              </p>
            </div>
          </div>

          <div className="news_1">
            <img src={imgPath} className="news_1" alt="" />
            <div className="date">
              <p>2016/11/18</p>
            </div>
            <p>
              チーズアカデミー卒業生のコスゲさんによる
              <br />
              チーズだけをふんだんに使用した話題のピザ屋
              <br />
              「Kosuge Pizza」が渋谷でオープンしました！
            </p>
          </div>

          <div className="news_1">
            <img src={imgPath} className="news_1" alt="" />
            <div className="date">
              <p>2016/11/18</p>
            </div>
            <p>
              チーズアカデミー卒業生のコスゲさんによる
              <br />
              チーズだけをふんだんに使用した話題のピザ屋
              <br />
              「Kosuge Pizza」が渋谷でオープンしました！
            </p>
          </div>
        </div>

        <div className="button">More</div>

        {/* <!-- 余白60pxがわからんのでとりあえず余白を作る --> */}
        <div className="yohaku"></div>
      </div>
    </>
  );
};

export default News;
