import React from "react";

const Education = () => {
  return (
    <div className="pt-12 text-white" id="education">
      <h1 className="text-4xl text-center font-bold">Education</h1>
      <p className="text-center py-6">
        My education has been a jorney of self-discovery and growth. My
        educational details are as follows.
      </p>
      <div className="mx-auto sm:w-[75%] border p-6 rounded-2xl shadow-md shadow-cyan-500/70">
        {/* --- */}
        <div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
            <div>
              <img
                src="https://mdu.ac.in/Imgs/logo%20colored%20transparent244x221.png"
                className="w-[70px] rounded-lg bg-white mt-2"
              />
            </div>
            <div className="sm:pl-4">
              <h1 className="text-lg font-semibold">
                Maharshi Dayanand University, Rohtak
              </h1>
              <p>Computer Science & Engineering</p>
            </div>
          </div>
          <p className="pt-4">
            Pursued a Bachelor of Technology in Computer Science and Engineering
            from Maharshi Dayanand University. Acquired strong foundational
            knowledge in programming, algorithms, and software development,
            complemented by practical experience in various projects and
            internships, enhancing technical and problem-solving skills.
          </p>
        </div>

        <div className="pt-6">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
            <div>
              <img
                src="https://bseh.org.in/logo.png"
                className="w-[70px] rounded-lg bg-white mt-2"
              />
            </div>
            <div className="sm:pl-4">
              <h1 className="text-lg font-semibold">
                S.D. BOYS SR. SEC. SCHOOL
              </h1>
              <p>XII (Board of School Education Haryana)</p>
            </div>
          </div>
          <p className="pt-4">
            I completed my Class 12 education at S.D. Boys Sr. Sec. School,
            specializing in Non-Medical subjects, which provided a strong
            foundation in science and mathematics.
          </p>
        </div>

        <div className="pt-6">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
            <div>
              <img
                src="https://bseh.org.in/logo.png"
                className="w-[70px] rounded-lg bg-white mt-2"
              />
            </div>
            <div className="sm:pl-4">
              <h1 className="text-lg font-semibold">
                Govt. Model Sanskriti Sr. Sec School
              </h1>
              <p>X (Board of School Education Haryana)</p>
            </div>
          </div>
          <p className="pt-4">
            I completed my Class 10 education at Govt. Model Sanskriti Sr. Sec
            School, where I studied the basics of computer fundamentals, laying
            the groundwork for my future interest in technology and programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
