import React from "react";
import styled from "styled-components";
import imgPath from "./img/news_img.jpg";
// import imgPath1 from ".img/syazai_men.png";

const button = () => {
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const modal = document.getElementById("modal");
  const mask = document.getElementById("mask");

  open.addEventListener("click", () => {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });

  mask.addEventListener("click", () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
};

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

        <div id="open" onClick={button} className="button">
          More
        </div>
        <div id="mask" class="hidden"></div>

        <section id="modal" class="hidden">
          {/* <img src={imgPath1} className="" alt="" /> */}
          <p>
            チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋「Kosuge
            Pizza」が渋谷でオープンしました！
          </p>
          <img src={imgPath} className="news_2" alt="" />

          <div id="close">閉じる</div>
        </section>

        {/* <!-- 余白60pxがわからんのでとりあえず余白を作る --> */}
        <div className="yohaku"></div>
      </div>
    </>
  );
};

export default News;
