// import React from 'react'
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>about text slkjdfsfklsjfldksfjsflsjflsfjfjsfjfdslfk</p>
          <p>another about text fdgkdfjdlkjlkfjskfjsfklsjflsknsdkfjskfjsf</p>
          <b className="text-gray-800">Our Mission</b>
          <p>dummy text jsdfoisjdofijdsiofjsfjsif</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">dummy text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus cupiditate facere consequatur, architecto labore exercitationem dolores saepe distinctio itaque dolor sit,</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">dummy text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus cupiditate facere consequatur</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">dummy text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus cupiditate facere consequatur</p>
        </div>
      </div>
      
     {/* testt */}
      <NewsLetterBox/>
    </div>
  );
};

export default About;
