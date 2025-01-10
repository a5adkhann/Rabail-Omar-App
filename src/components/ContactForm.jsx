import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div className="contact-form-container mx-auto container">
  <h1 className="font-bold text-2xl text-center py-3 heading">Contact Form</h1>
  <form className="container mx-auto px-5 md:px-20 lg:px-48">
    <div className="form-fields-divider flex flex-col md:flex-row gap-5 pb-5">
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

    <div className="form-fields-divider pb-5">
      <input
        className="w-full py-2 px-5"
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

    <div className="form-btn text-center mt-5">
      <button className="bg-black text-[#FFF] py-2 px-8 text-sm">Send</button>
    </div>
  </form>
</div>

    </>
  )
}

export default ContactForm