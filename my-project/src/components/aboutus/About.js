import React from "react";
import gif from "../../assets/images/grid10.png";

function About() {
  return (
    <div className="py-14">
      <section className="container">
        <div className="text-[30px] text-center font-bold p-[60px]">
          <h1>About US</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <img src={gif} alt="" className="w-full" />
            <p className="abouttxt py-7">
              Despite being a rookie in the industry of corporation, we assure
              you that Belgian Iloilo Construction Corp consists of collected
              qualified, experienced professionals in the general construction
              field to provide quality services to all of our clients. We
              prioritize our company’s good reputation.
            </p>
          </div>
          <div>
            <p className=" abouttxt py-10">
              Belgian Iloilo Construction Corp is a novice construction company
              located in the city of Iloilo in the Philippines that provides
              outstanding general works contractors and services. We assist in
              general construction such as roads, drainage, canals, warehouses,
              and buildings. Plus, we also have professionals that can help
              administer and take charge of land development, trucking services,
              and construction consultancy. We assist in general construction
              such as roads, drainage, canals, warehouses, and buildings. Plus,
              we also have professionals that can help administer and take
              charge of land development, trucking services, and construction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
