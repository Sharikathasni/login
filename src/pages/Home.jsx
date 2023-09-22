import React from "react";
import "../home.css";
import NavBar from "../components/navbar/nav";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import { Footer } from "../components/footer/Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Footer />
    </>
  )
};
export default Home;
