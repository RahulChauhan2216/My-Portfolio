import React from "react";

const Experience = () => {
  return (
    <div className="pt-12 text-white" id="experience">
      <h1 className="text-4xl text-center font-bold">Experience</h1>
      <p className="text-center py-6">
        My work experience as a software enginner & working on different
        projects in a company.
      </p>

      <div className="mx-auto w-[75%] border p-6 rounded-2xl shadow-md shadow-cyan-500/50">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 ">
          <div>
            <img
              src="https://erawebstudio.com/wp-content/uploads/2022/04/logo-dark.png"
              className="w-[100px] rounded-lg bg-white mt-2"
            />
          </div>
          <div className="sm:pl-4">
            <h1 className="text-lg font-semibold">Frontend Developer</h1>
            <p>Era Web Studio </p>
            <p className=" text-gray-300">April 2023 - April 2024 </p>
          </div>
        </div>

        <p className="pt-4">
          Working on the frontend of the web application using React.Js,
          Javascript, HTML5, CSS3 & Framework and Redux Toolkit
        </p>

        <ul className="flex flex-wrap flex-col sm:flex-row items-center sm:justify-around list-disc pt-4 gap-6">
          <li className="list-none">Skills : </li>
          <li>HTML5</li>
          <li>CSS3 & Framework</li>
          <li>Javascript</li>
          <li>React.Js</li>
          <li>Redux Toolkit</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
