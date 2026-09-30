import React from "react";
import { bg_style } from "../../utils/style";
import { FaSearch } from "react-icons/fa";
import Cone1 from "../../assets/Cone.png";
import Cone2 from "../../assets/Cone (1).png";
import Cone3 from "../../assets/Cone (2).png";
import Frame1 from "../../assets/Frame.png";
import Frame2 from "../../assets/Frame (1).png";
import Frame3 from "../../assets/Frame (2).png";
import Ellipse from "../../assets/Ellipse 7.png";
import person from "../../assets/Image.png";

const Banner = () => {
  return (
      <section className={`min-h-256 w-full ${bg_style} relative text-center`}>
        <h1 className="text-6xl leading-18 font-bold  mt-16">
          Get Access to Hundreds <br className="hidden md:block"></br> Courses
          Available
        </h1>
        <p className="mt-8 font-extralight text-sm py-2 line-h">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-15 pb-20 relative w-130 mx-auto">
          <input
            className="py-3 px-11 w-full bg-white rounded-3xl outline-0 text-gray-600 "
            type="text"
            placeholder="Course, topic, creator"
          ></input>
          <FaSearch className="absolute z-10 left-5 top-4 text-gray-500 font-extrabold" />
          <button className="py-3 px-6 rounded-3xl bg-lime-400 text-black">
            Search
          </button>
        </div>
        <div className="overflow-hidden pointer-events-none">
          <img
            src={Cone1}
            alt="Cone icon"
            className="absolute top-118 right-36"
          />
          <img
            src={Ellipse}
            alt="Frame icon"
            className="absolute  left-1/2 -translate-x-1/2 bottom-0"
          />
          <img
            src={Cone2}
            alt="Cone icon"
            className="absolute top-180 left-4"
          />
          <img
            src={Cone3}
            alt="Cone icon"
            className="absolute top-55 right-0"
          />
          <img
            src={Frame1}
            alt="Frame icon"
            className="absolute top-58 left-0"
          />
          <img
            src={Frame2}
            alt="Frame icon"
            className="absolute top-120 left-45"
          />
          <img
            src={Frame3}
            alt="Frame icon"
            className="absolute top-170 right-10"
          />
          <img
            src={person}
            alt="Frame icon"
            className="absolute left-1/2 -translate-x-1/2 bottom-0"
          />
        </div>
      </section>
  );
};

export default Banner;
