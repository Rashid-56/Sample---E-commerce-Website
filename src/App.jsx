import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  

  

  return (
    <>
    <Navbar/>
    <Hero></Hero>
    
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
}

export default App;
