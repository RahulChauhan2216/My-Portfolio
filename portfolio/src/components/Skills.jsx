import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiThealgorithms } from "react-icons/si";

const Skills = () => {
  return (
    <div className="pt-12 text-white" id="skills">
      <h1 className="text-4xl text-center font-bold">Skills</h1>
      <p className="text-center py-6">
        Here are some of my skills on which i have been working on for the past
        2 year
      </p>
      <div className="flex flex-col sm:flex-row items-center sm:flex-wrap justify-evenly gap-6">
        <div className="border px-6 py-2 rounded-lg flex items-center">
          <FaHtml5 className=" text-orange-500" />
          <p className="pl-2">HTML 5</p>
        </div>
        <div className="border px-6 py-2 rounded-lg flex items-center">
          <FaCss3 className="text-blue-500" />
          <p className="pl-2">CSS3 & Framework</p>
        </div>
        <div className="border px-6 py-2 rounded-lg flex items-center">
          <IoLogoJavascript className="text-yellow-500" />
          <p className="pl-2">Javascript</p>
        </div>
        <div className="border px-6 py-2 rounded-lg flex items-center">
          <FaReact className="text-sky-500" />
          <p className="pl-2">React.Js</p>
        </div>
        <div className="border px-6 py-2 rounded-lg flex items-center">
          <TbBrandRedux className="text-sky-500" />
          <p className="pl-2">Redux Toolkit</p>
        </div>
        <div className="border px-6 py-2 rounded-lg flex items-center">
          <FaGithub />
          <p className="pl-2">Github</p>
        </div>
        <div className="border px-6 py-2 rounded-lg flex items-center">
          <SiThealgorithms className="text-sky-500" />
          <p className="pl-2">DSA</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
