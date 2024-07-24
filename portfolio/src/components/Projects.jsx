import React from "react";
import Daksh from "../assets/Daksh.jpg";

const Projects = () => {
  return (
    <div className="pt-12 text-white" id="project">
      <h1 className="text-4xl text-center font-bold">Projects</h1>
      <p className="text-center py-6">
        I have worked on a wide range of projects. Here are one of my projects.
      </p>

      <a href="https://fastidious-crisp-f473ef.netlify.app/" target="blank">
        <div className="w-[65%] sm:w-[60%] rounded-2xl mx-auto text-white p-6 bg-gray-900 hover:scale-105 transition ease-in-out cursor-pointer">
          <img src={Daksh} className="rounded-lg" />
          <ul className="pt-6 flex flex-wrap flex-col text-center sm:flex-row gap-4 text-lg text-purple-500">
            <li className="bg-gray-700 px-4 py-1 rounded-md">React.js</li>
            <li className="bg-gray-700 px-4 py-1 rounded-md">Tailwind</li>
            <li className="bg-gray-700 px-4 py-1 rounded-md">Database</li>
            <li className="bg-gray-700 px-4 py-1 rounded-md">React-Slick</li>
            <li className="bg-gray-700 px-4 py-1 rounded-md">React-Icons</li>
          </ul>
          <h1 className="pt-6 font-semibold text-xl">Daksh Hindu Ritual App</h1>
          <p className="pt-2">
            Daksh is a web application use to purchase ritual items and book
            pandits for Hindu ceremonies, ensuring a seamless and authentic
            spiritual experience.
          </p>
        </div>
      </a>

      {/* <div className="w-[50%] rounded-2xl mx-auto text-white p-6 bg-gray-900 hover:scale-105 transition ease-in-out cursor-pointer">
        <img src={Daksh} className="rounded-lg" />
        <ul className="pt-6 flex flex-wrap gap-4 text-lg text-purple-500">
          <li className="bg-gray-700 px-4 py-1 rounded-md">React.js</li>
          <li className="bg-gray-700 px-4 py-1 rounded-md">Tailwind</li>
          <li className="bg-gray-700 px-4 py-1 rounded-md">Database</li>
          <li className="bg-gray-700 px-4 py-1 rounded-md">React-Slick</li>
          <li className="bg-gray-700 px-4 py-1 rounded-md">React-Icons</li>
        </ul>
        <h1 className="pt-6 font-semibold text-xl">Daksh Hindu Ritual App</h1>
        <p className="pt-2">
          Daksh is a web application use to purchase ritual items and book
          pandits for Hindu ceremonies, ensuring a seamless and authentic
          spiritual experience.
        </p>
      </div> */}
    </div>
  );
};

export default Projects;
