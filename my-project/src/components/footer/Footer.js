import React from "react";
import logo from "../../assets/images/logo.png";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-slate-900   ">
      <div className="items relative top-5  px-10 py-10">
        <section className="container ">
          <div className="flex flex-row mt-4">
            <img src={logo} alt="" />
            <h2 className="font-bold text-3xl  text-black ">
              BICC <span></span>
            </h2>
          </div>

          <div>
            <p className="px-[140px] text-[32px] text-black font-bold">
              Belgian Iloilo Construction Corp is a novice construction company
              located in the city of Iloilo in the Philippines
            </p>
          </div>
        </section>
      </div>
      <section className="container">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 cursor-pointer font-bold text-white justify-center text-xl py-20">
          <div>
            <ul>
              <li className="p-3">Home</li>
              <li className="p-3">About</li>
              <li className="p-3">Services</li>
            </ul>
          </div>
          <div>
            <h3>Follow us</h3>
            <div className="flex flex-row space-x-5 mt-8">
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
          </div>
          <div>
            <h3>Subscribe to Our NewsLetter</h3>
            <div className="flex flex-row ">
              <input
                className="mt-4 p-2 border-4 btntext w-[380px] h-14 "
                type="email"
                placeholder="xyz@gmail.com"
              />
              <button className="bg-black w-20 h-12 relative right-[80px] top-5 btntext">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
