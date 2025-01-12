import React from 'react'

const ContactHeader = () => {
  return (
    <>
        <div className="contact-header text-center py-10 w-[60vw] container mx-auto">
        <p className='py-3 text-2xl font-bold heading'>Contact Us</p>
        <p>
          Want to get in touch with us? Just fill out the form below and we'll
          get back to you as soon as possible. You can also reach us at&nbsp;
          <u className='cursor-pointer'>rabailomar@gmail.com</u> or on our Instagram Page&nbsp;<u className='cursor-pointer'>@rabailomar</u>.
        </p>

        <p>
          📍: 80/1, Street 2, Khayaban Badar, Phase 6, DHA, Karachi.
        </p>

        <p>📞
        +92322-2737090</p>
      </div>
    </>
  )
}

export default ContactHeader