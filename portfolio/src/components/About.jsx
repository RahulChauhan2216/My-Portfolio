import React from "react";
import logo from "../assets/me1.jpg";

const About = () => {
  return (
    <div
      className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 text-center sm:text-start  text-white justify-between items-center pt-12 h-auto"
      id="about"
    >
      <div className="w-[70%] sm:w-[50%]">
        <h1 className="text-5xl font-bold">Hi, I am Rahul</h1>
        <h4 className="py-6 text-2xl">
          I am a <span className="text-purple-500">Frontend Developer</span>
        </h4>
        <p className="text-lg">
          I am a motivated and versatile frontend developer eager to take on new
          challenges.With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset,I
          am ready to make a meaningful contribution and achieve great things.
        </p>
        <a
          href="https://drive.google.com/file/d/1Qaj9ijkFI00L9trVcvdblPMfsuihTXj-/view?usp=sharing"
          target="blank"
        >
          <button className="px-8 py-2 bg-gradient-to-r from-purple-500 to-pink-500 mt-6 text-lg font-semibold rounded-lg">
            Check Resume
          </button>
        </a>
      </div>
      <div className="h-full">
        <img src={logo} className="h-[200px] rounded-full" />
      </div>
    </div>
  );
};

export default About;
