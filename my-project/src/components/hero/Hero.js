import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./Herostyle.css";

function Hero() {
  return (
    <div className=" hero">
      <div className="p-[220px]">
        <p className="text-white text-center  bg-gradient-to-r from-sky-200 via-pink-300 to-pink-100 font-serif font-bold text-2xl p-10">
          We are pleased to introduce our Company, Belgian <br /> Iloilo
          Construction Corp., an outstanding novice <br /> construction company
          situated in the city of Iloilo, <br /> Philippines.
        </p>
        <div className="flex flex-row justify-center relative bottom-8 space-x-4 cursor-pointer ">
          <a className=" text-3xl bg-pink-400 ">
            <AiFillFacebook />
          </a>
          <a className="  text-3xl bg-pink-400 ">
            <AiFillLinkedin />
          </a>
          <a className="  text-3xl  bg-pink-400">
            <AiFillTwitterCircle />
          </a>
        </div>
        <div>
          <button class="bg-pink-700 hover:bg-pink-500  text-white font-bold py-2 px-4  ">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
