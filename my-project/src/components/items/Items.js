import React from "react";
import Img5 from "../../assets/images/grid7.png";
import Img6 from "../../assets/images/grid8.png";
import Img7 from "../../assets/images/grid9.png";

function Items() {
  return (
    <div className=" items mt-9">
      <section className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-2 py-10 ">
          <div className="m-auto rounded-lg border border-white shadow-md bg-white">
            <img
              src={Img5}
              alt=""
              className="w-full rounded-md max-h-[400px] min-h-[350px]"
            />
            <div className="p-20 text-center m-auto">
              <h1 className="text-[40px] text-center mt-4 mb-10">
                Hello World
              </h1>
              <p className="itemstxt">
                Land Development is the process of altering a landscape to make
                the environment suitable for building. And here at Belgian
                Iloilo Construction Corp, we understand how important Land
                Development is in property construction whether it’s for
                agriculture or housing. BICC provides professionals and experts
                to oversee the process of your land development to avoid any
                miscalculations and provide you with a perfect lot space for
                your project.
              </p>
            </div>
          </div>
          <div className="m-auto rounded-lg border border-white shadow-md bg-white ">
            <img
              src={Img6}
              alt=""
              className="w-full rounded-md max-h-[400px] min-h-[350px]"
            />
            <div className="p-20 text-center m-auto">
              <h1 className="text-[40px] text-center mt-4 mb-10">
                Hello World
              </h1>
              <p className="itemstxt">
                Land Development is the process of altering a landscape to make
                the environment suitable for building. And here at Belgian
                Iloilo Construction Corp, we understand how important Land
                Development is in property construction whether it’s for
                agriculture or housing. BICC provides professionals and experts
                to oversee the process of your land development to avoid any
                miscalculations and provide you with a perfect lot space for
                your project.
              </p>
            </div>
          </div>
          <div className="m-auto rounded-lg border border-white shadow-md bg-white">
            <img
              src={Img7}
              alt=""
              className="w-full rounded-md max-h-[400px] min-h-[350px]"
            />
            <div className="p-20 text-center m-auto">
              <h1 className="text-[40px] text-center mt-4 mb-10">
                Hello World
              </h1>
              <p className="itemstxt">
                Land Development is the process of altering a landscape to make
                the environment suitable for building. And here at Belgian
                Iloilo Construction Corp, we understand how important Land
                Development is in property construction whether it’s for
                agriculture or housing. BICC provides professionals and experts
                to oversee the process of your land development to avoid any
                miscalculations and provide you with a perfect lot space for
                your project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Items;
