import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import transition from "../Transition";
function Main (){
  return (
    <div className="min-w-fit w-full bg-white">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
};

export default transition(Main);
