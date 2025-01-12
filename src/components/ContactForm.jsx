import React from "react";
import { Fade } from "react-awesome-reveal";

const ContactForm = () => {
  return (
    <>
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="container py-10 mx-auto contact-form-container">
        <h1 className="py-3 text-2xl font-bold text-center heading">
          Contact Form
        </h1>
        <form className="container px-5 mx-auto md:px-20 lg:px-48">
          <div className="flex flex-col gap-5 pb-5 form-fields-divider md:flex-row">
            <input
              className="w-full md:w-[50%] py-2 px-5"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full md:w-[50%] py-2 px-5"
              type="text"
              placeholder="Email*"
            />
          </div>

          <div className="pb-5 form-fields-divider">
            <input
              className="w-full px-5 py-2"
              type="text"
              placeholder="Phone number"
            />
          </div>

          <div className="text-area">
            <textarea
              className="w-full px-5 h-[100px] py-2"
              placeholder="Comment"
            ></textarea>
          </div>

          <div className="mt-5 text-center form-btn">
            <button className="bg-black text-[#FFF] py-2 px-8 text-sm">
              Send
            </button>
          </div>
        </form>
      </div>
      </Fade>
    </>
  );
};

export default ContactForm;
