import React from "react";
import Img2 from "../../assets/images/grid4.png";
import Img3 from "../../assets/images/grid5.png";
import Img4 from "../../assets/images/grid6.png";

function Listitem() {
  return (
    <section className="container">
      <div className="grid  gap-4 mt-11 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className=" items ">
          <img src={Img2} alt="" className="w-full" />

          <p className="w-full mt-[39px] p-10 text-center text-2xl">
            Damaged Road is very common especially here in the Philippines due
            to the hot and wet climate. But with BICC, we assure high-quality
            service that will make the road stronger and long-lasting.
          </p>
        </div>
        <div className=" items ">
          <img src={Img3} alt="" className="w-full" />
          <p className="w-full mt-[39px] p-10 text-center text-2xl">
            Damaged Road is very common especially here in the Philippines due
            to the hot and wet climate. But with BICC, we assure high-quality
            service that will make the road stronger and long-lasting.
          </p>
        </div>
        <div className=" items ">
          <img src={Img4} alt="" className="w-full" />
          <p className="w-full mt-[39px] p-10 text-center text-2xl">
            Damaged Road is very common especially here in the Philippines due
            to the hot and wet climate. But with BICC, we assure high-quality
            service that will make the road stronger and long-lasting.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Listitem;
