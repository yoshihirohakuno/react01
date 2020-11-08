import React from "react";
import "./styles.css";
import Header from "./Header";
import Header_nav from "./Header_nav";
import Main from "./Main";
import About from "./About";
import Course from "./Course";
import News from "./News";
export default function App() {
  return (
    <>
      <Header />
      <Header_nav />
      <Main />
      <About />
      <Course />
      <News />
    </>
  );
}
