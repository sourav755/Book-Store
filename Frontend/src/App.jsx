import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}

export default App;
