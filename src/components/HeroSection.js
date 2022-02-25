import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover jumbotron">
      <h1 className="py-2 text-6xl font-bold text-white">
        ALIENJOMRIDE COME HERE
      </h1>
      <p className="py-4 text-3xl text-white">What are you waiting for?</p>
      <div>
        <button
          type="button"
          className="py-3 mr-3 text-xl font-bold text-center text-white duration-200 delay-100 rounded-sm px-9 hover:text-gray-900 bg outline outline-slate-100 hover:bg-slate-100 md:mr-0"
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
