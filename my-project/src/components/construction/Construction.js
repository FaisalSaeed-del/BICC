import React from "react";
import Img from "../../assets/images/gen.png";
function Construction() {
  return (
    <div>
      <section className="container">
        <div className=" mt-[195px] mb-5 text-3xl md:mt-[150px] sm:mt-[250px] text-center font-bold ">
          <h2>General Constructions</h2>
        </div>
        <div className="grid md:grid-cols-2 py-[95px] sm:grid-cols-1">
          <div>
            <img src={Img} alt="General construction" className="w-full" />
          </div>
          <div className=" bg-white shadow-md m-auto p-20 text-[32px]">
            <p>
              Need to design, build, or even remodel your property? BICC got
              your back! We offer general constructions services that include
              installing, replacing, or repairing the following structures:
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Construction;
