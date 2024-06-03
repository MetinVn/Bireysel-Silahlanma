import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import transition from "../Transition";
function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default transition(Main);
