import React from "react";
import styled from "styled-components";

const FooterD = styled.h1`
  background-color: #707070;
  width: 1200px;
  text-align: center;
`;

const FooterP = styled.h1`
  color: white;
  font-size: 14px;
  padding: 30px 0px;
`;

const Footer = () => {
  return (
    <FooterD>
      <FooterP>
        copyrights 2016 Cheeese Academy Tokyo All RIghts Reserved.
      </FooterP>
    </FooterD>
  );
};

export default Footer;
