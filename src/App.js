import React from "react";
import "./styles.css";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Course from "./Course";
import News from "./News";
import Access from "./Access";
import Contact from "./Contact";
import Footer from "./Footer";
export default function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Course />
      <News />
      <Access />
      <Contact />
      <Footer />
    </>
  );
}
