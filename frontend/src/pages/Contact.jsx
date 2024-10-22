// import React from 'react'
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

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
          <p className="font-semibold text-gray-600">Get in Touch</p>
          <p className="text-gray-500">Email: diagonalley@gmail.com </p>
          <p className="text-gray-500">Phone: +2-01012345689</p>
          <p className="text-gray-500">Tel:  047-13246759</p>
          <p className="font-semibold text-gray-600">We're Here to Help</p>
          <p className="text-gray-500">
          We’d love to hear from you! Whether you have questions about our exhibitions, are interested in purchasing artwork, or want to collaborate, feel free to reach out. Our team is here to assist you with any inquiries.
          </p>
          <p className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
          Get in Touch
          </p>
        </div>
      </div>
     <NewsLetterBox/>
    </div>
  );
};

export default Contact;
