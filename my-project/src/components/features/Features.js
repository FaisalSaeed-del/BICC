import React from "react";
import Grid1 from "../../assets/images/grid1.png";
import Grid2 from "../../assets/images/grid2.png";
import Grid3 from "../../assets/images/grid3.png";

function Features() {
  return (
    <section className="container">
      <div className="text-3xl p-14 font-bold  text-center">
        <h1>OUR FEATURE'S</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6   ">
        <div className="card px-5 py-7">
          <img src={Grid1} alt="" className="w-full mb-6" />
          <p className=" txt">
            Belgian Iloilo Construction Corp is a construction corporation that
            provides various outstanding general works construction services
            such as roads, drainage, canals, warehouses, and buildings. We also
            take charge of land development, trucking services, and construction
            consultancy.
          </p>
        </div>
        <div className="card px-5 py-7">
          <img src={Grid2} alt="" className="w-full mb-6" />
          <p className=" txt ">
            Belgian Iloilo Construction Corp is a construction corporation that
            provides various outstanding general works construction services
            such as roads, drainage, canals, warehouses, and buildings. We also
            take charge of land development, trucking services, and construction
            consultancy.
          </p>
        </div>
        <div className="card px-5 py-7">
          <img src={Grid3} alt="" className="w-full mb-6" />
          <p className=" txt">
            Belgian Iloilo Construction Corp is a construction corporation that
            provides various outstanding general works construction services
            such as roads, drainage, canals, warehouses, and buildings. We also
            take charge of land development, trucking services, and construction
            consultancy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
