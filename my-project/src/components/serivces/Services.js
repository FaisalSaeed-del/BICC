import React from "react";
import SRV1 from "../../assets/images/service1.png";
import SRV2 from "../../assets/images/service2.png";

function Services() {
  return (
    <section className="container">
      <h1 className=" p-[116px] font-bold text-3xl text-center  ">
        CONSTRUCTION SERVICES
      </h1>
      <div className="grid  md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-2 m gap-4 px-20">
        <div className="bg-white">
          <img src={SRV1} alt="" className="px-2" />
          <span className="relative bg-slate-300 bottom-[80px] ml-8 font-bold text-[24px] textgradient ">
            ARCITECHTURE DESIGN
          </span>
        </div>
        <div className="bg-white ">
          <img src={SRV2} alt="" />
          <span className="relative bg-slate-300 bottom-[80px] ml-8 font-bold text-[24px] textgradient">
            ARCITECHTURE DESIGN
          </span>
        </div>
      </div>
      <div>
        <p className=" para ">
          Belgian Iloilo Construction Corp is a construction corporation that
          provides various outstanding general works construction services such
          as roads, drainage, canals, warehouses, and buildings. We also take
          charge of land development, trucking services, and construction
          consultancy.
        </p>
      </div>
    </section>
  );
}

export default Services;
