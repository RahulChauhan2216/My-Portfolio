import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-12 text-white pb-12" id="contact">
      <h1 className="text-4xl text-center font-bold">Contact Me</h1>
      <p className="text-center py-6">
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <div className="sm:w-[75%] rounded-2xl mx-auto text-white p-6 bg-gray-900 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:gap-10">
          <HiOutlineMail className="text-2xl" />
          <h1 className="text-lg hover:text-purple-500 cursor-pointer hover:scale-125 transition ease-in-out">
            rahul.ch153@gmail.com
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center sm:gap-10">
          <FaPhoneAlt className="text-2xl" />
          <h1 className="text-lg hover:text-purple-500 cursor-pointer hover:scale-125 transition ease-in-out">
            9560221652
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
