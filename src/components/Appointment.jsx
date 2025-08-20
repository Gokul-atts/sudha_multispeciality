import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const RegistrationForm = () => {
  return (
    <div>
         <h2 className="text-[30px]  pb-5 ">
            Make An Appointment
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-[#000000] text-sm pb-2">
                Preferred Date  <span className="text-red-600">*</span>
              </label>
            <input
              type="date"
              placeholder="Preferred Date"
              className="border rounded-lg p-3 w-full text-sm"
            />
            </div>
            <div>
              <label className="font-semibold text-[#000000] text-sm pb-2" >Name  <span className="text-red-600">*</span></label>
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg p-3 text-black w-full text-sm"
            />
            </div>
            <div>     
              <label className="font-semibold text-[#000000] text-sm pb-2">Mobile Number <span className="text-red-600">*</span></label>
             <input
              type="tel"
              placeholder="Mobile Number"
              className="border rounded-lg p-3 w-full text-sm"
            />
            </div>
            <div>
               <label className="font-semibold text-[#000000] text-sm pb-2">Email<span className="text-red-600">*</span></label>
            <input
              type="email"
              placeholder="E-mail"
              className="border rounded-lg p-3 w-full text-sm pb-2"
            />
            </div>
            <div>
                <label className="font-semibold text-[#000000] text-sm pb-2">Department<span className="text-red-600">*</span></label>
            <select className="border rounded-lg p-3 w-full text-sm">
              <option>Select a department</option>
            </select>
            </div>
            <div>
            <label className="font-semibold text-[#000000] text-sm pb-2">Doctor<span className="text-red-600">*</span></label>
            <select className="border rounded-lg p-3 w-full text-sm">
              <option>Select a doctor</option>
            </select>
            </div>
            <div className="w-full">
              <label className="font-semibold text-[#000000] text-sm pb-2">Message<span className="text-red-600">*</span></label>
            <textarea
              placeholder="Enter your remarks..."
              className="border rounded-lg p-3 w-full text-sm "
              rows="3"
            ></textarea>
            </div>
          </form>
           <button className="btn-diagonal inline-flex items-center gap-2 bg-[#1F2B6C] mt-5  text-white font-semibold  pt-3 pb-3 pr-7 pl-7 rounded-full shadow text-sm">
           Book an Appointment <ArrowUpRight className="w-4 h-4" />
           </button>
    </div>
  )
}

export default RegistrationForm