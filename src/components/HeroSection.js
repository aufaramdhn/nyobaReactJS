import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('./assets/bg.jpg')] h-screen bg-cover ">
      <h1 className="py-2 text-3xl font-bold text-center text-white md:text-6xl">ALIENJOMRIDE COME HERE</h1>
      <p className="py-4 text-xl text-center text-white md:text-3xl">What are you waiting for?</p>
      <div>
        <Link to="/contact">
          <button type="button" className="py-3 mr-3 text-xl font-bold text-center text-white duration-200 delay-100 rounded-sm px-9 hover:text-gray-900 bg outline outline-slate-100 hover:bg-slate-100 md:mr-0">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
