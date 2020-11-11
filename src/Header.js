import React from "react";
import styled from "styled-components";
import ImgPath from "./img/header_logo.png";

const HeaderDiv = styled.div`
  display: flex;
  margin: auto;
`;

const headerNav = styled.div`
  margin-right: 25px;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <img src={ImgPath} width="325" height="68" alt="ロゴ" />
      <headerNav className="header_nav">
        <ul>
          <li className="nav_memu">
            <a href="#about">ABOUT</a>
          </li>
          <li className="nav_memu">
            <a href="#course">COURSE</a>
          </li>
          <li className="nav_memu">
            <a href="#news">NEWS</a>
          </li>
          <li className="nav_memu">
            <a href="#Access">ACCESS</a>
          </li>
          <li className="nav_memu">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </headerNav>
    </HeaderDiv>
  );
};

export default Header;
