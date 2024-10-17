// import React from 'react'
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={" US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500">dummy address</p>
          <p className="text-gray-500">Tel: dummy phone num</p>
          <p className="font-semibold text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">
            learn more about our teams and job openings
          </p>
          <p className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </p>
        </div>
      </div>
      {/* not its time i think uncomment in the very end */}
      {/* <NewsLetterBox/> */}
    </div>
  );
};

export default Contact;
