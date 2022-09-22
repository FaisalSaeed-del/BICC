import React from "react";

function Contact() {
  return (
    <div className="items py-[60px]">
      <section className="container">
        <div className="mb-[30px]">
          <div className=" mb-11  text-center text-[40px]">
            <h1>Contact Us</h1>
          </div>

          <div className="text-center mb-11 text-3xl">
            <p>
              For more information, visit our official website
              http://www.bicc.ph/ or our official FB page.
            </p>
            <p>
              For inquiries, you can set an appointment to visit our office
              Belgian Iloilo Construction Corp at E Lopez Street, Iloilo City,
              Philippines
            </p>
          </div>

          <div className=" max-w-[606px] mx-auto">
            <div>
              <div>
                <input
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                  className=" bordertxt  mt-2  border-4 w-full p-[10px] h-[50px] rounded-lg  text-start"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="company"
                  placeholder="Company"
                  className="  bordertxt w-full p-[10px] h-[50px] rounded-lg text--start "
                />
              </div>
              <div>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Contact"
                  className="  bordertxt w-full p-[10px] h-[50px] rounded-lg text--start "
                />
              </div>
              <div>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Message"
                  className="  bordertxt w-full p-[10px] h-[50px] rounded-lg text--start "
                />
              </div>
              <div>
                <button className="btntext rounded-full h-[38px]  mt-3 px-8">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
