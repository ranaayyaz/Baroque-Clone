import React from 'react'

function ContactUs() {
  return (
    <div>
<div className="mt-[4.5rem] border-t border-gray-300"></div>
  <div className="p-4 mt-[6rem] mb-[4rem]">
  <h1 className="text-4xl letterSpacing  text-center mb-12">CONTACT</h1>
  
  <div className="max-w-md mx-auto">
    <div className="space-y-4">
      {/* Name and Email in one line */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded"
        />
        
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-3 border "
        />
      </div>
      
      <textarea
        placeholder="Message"
        rows="4"
        className="w-full p-3 border "
      ></textarea>
      
      <button className="w-full bg-black text-white p-3 trans letterSpacing">
        SEND MESSAGE
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default ContactUs