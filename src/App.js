import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Card />
      <Footer />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
}

export default App;
