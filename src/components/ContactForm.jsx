import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div className='contact-form-container mx-auto container'>
            <h1 className='font-bold text-2xl text-center py-3 heading'>Contact Form</h1>
            <form className='w-[800px] container mx-auto flex flex-col gap-4'>
                <div className="form-fields-divider flex gap-5">
                <input className='w-[50%] py-2 px-5' type="text" placeholder='Name'/>
                <input className='w-[50%] py-2 px-5' type="text" placeholder='Email*'/>
                </div>

                <div className="form-fields-divider">
                <input className='w-[100%] py-2 px-5' type="text" placeholder='Phone number'/>
                </div>

                <div className="text-area">
                    <textarea className='w-[100%] px-5 h-[100px] py-2' placeholder='Comment'></textarea>
                </div>

                <div className="form-btn">
                    <button className='bg-black text-[#FFF] py-2 px-8 text-sm'>Send</button>
                </div>
            </form>
        </div>  
    </>
  )
}

export default ContactForm