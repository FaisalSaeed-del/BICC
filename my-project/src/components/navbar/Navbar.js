import React from "react";
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search.png";

function Navbar() {
  return (
    <div className=" absolute left-0 right-0 top-0 bg-transparent">
      <nav className="flex justify-center   md:justify-between  mt-5 px-9 relative w-full ">
        <div className="flex items-center  text-black mr-6">
          <img src={Logo} />
          <h1 className=" p-4 text-2xl md:text-3xl text-white font-bold font-serif">
            BICC
          </h1>
        </div>

        <div className="w-full flex justify-end self-center font-serif  ">
          <div className="flex">
            <div className="flex flex-wrap gap-5">
              <a href="#responsive-header" className="text-white font-bold">
                Home
              </a>
              <a href="#responsive-header" className="text-white font-bold">
                Services
              </a>
              <a href="#responsive-header" className="text-white font-bol">
                About US
              </a>
              <a href="#responsive-header" className="text-white font-bol">
                Contact US
              </a>
            </div>
            <div className="flex ml-4">
              <img src={Search} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
