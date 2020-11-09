import React from "react";
import "./styles.css";
import styled from "styled-components";
import Header from "./Header";
import Header_nav from "./Header_nav";
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
      <Header_nav />
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
