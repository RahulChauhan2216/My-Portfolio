import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [ham, setHam] = useState(false);

  const slider = () => {
    if (ham) {
      setHam(!ham);
    }
  };

  return (
    <>
      <div className="flex justify-between py-4 text-white items-center">
        <div className="font-semibold text-xl">
          {ham ? "" : <p>My Portfolio</p>}
        </div>
        <div>
          <ul
            className={
              ham
                ? "flex flex-col gap-8 absolute top-0 left-0 z-10 border w-[45vw] h-[100vh] p-8 pt-16 bg-gray-800"
                : "hidden xl:flex gap-6"
            }
          >
            <a href="#about">
              <li
                className={
                  ham
                    ? "hover:text-purple-500 cursor-pointer"
                    : "hover:text-purple-500 cursor-pointer hover:scale-125 transition ease-in-out"
                }
                onClick={slider}
              >
                About
              </li>
            </a>

            <a href="#skills">
              <li
                className={
                  ham
                    ? "hover:text-purple-500 cursor-pointer"
                    : "hover:text-purple-500 cursor-pointer hover:scale-125 transition ease-in-out"
                }
                onClick={slider}
              >
                Skills
              </li>
            </a>

            <a href="#experience">
              <li
                className={
                  ham
                    ? "hover:text-purple-500 cursor-pointer"
                    : "hover:text-purple-500 cursor-pointer hover:scale-125 transition ease-in-out"
                }
                onClick={slider}
              >
                Experience
              </li>
            </a>

            {/* -- */}

            <a href="#project">
              <li
                className={
                  ham
                    ? "hover:text-purple-500 cursor-pointer"
                    : "hover:text-purple-500 cursor-pointer hover:scale-125 transition ease-in-out"
                }
                onClick={slider}
              >
                Projects
              </li>
            </a>

            {/* -- */}
            <a href="#education">
              <li
                className={
                  ham
                    ? "hover:text-purple-500 cursor-pointer"
                    : "hover:text-purple-500 cursor-pointer hover:scale-125 transition ease-in-out"
                }
                onClick={slider}
              >
                Education
              </li>
            </a>

            <a href="#contact">
              <li
                className={
                  ham
                    ? "hover:text-purple-500 cursor-pointer"
                    : "hover:text-purple-500 cursor-pointer hover:scale-125 transition ease-in-out"
                }
                onClick={slider}
              >
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div className="font-semibold hidden xl:block">
          <a
            href="https://www.linkedin.com/in/rahul-chauhan-40540a28a/"
            target="blank"
          >
            <p className="px-6 py-2 border rounded-lg hover:text-purple-500 cursor-pointer">
              LinkeddIn Link
            </p>
          </a>
        </div>
        <div onClick={() => setHam(!ham)}>
          {ham ? (
            <RxCross2
              className="absolute left-[35%] top-6 z-10"
              onClick={() => setHam(!ham)}
            />
          ) : (
            <GiHamburgerMenu className="block xl:hidden" />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
