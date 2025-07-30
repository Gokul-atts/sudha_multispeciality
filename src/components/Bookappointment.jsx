import React from "react";
import clinicImage from "../assets/home/appointment.webp";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
function Bookappointment() {
  return (
    <div>
      <section className="relative bg-[#EEF6FF] py-16  overflow-hidden">
        <div className="max-w-7xl mx-auto  h-full">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              {/* Heading */}
              <h2 className="text-[30px]  text-center md:text-left mb-6 md:mb-8">
                Book an Appointment for <br className="hidden md:block" />
                Comprehensive Medical Care
              </h2>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-4xl mx-auto bg-white pl-8 pt-8 pb-8 pr-8  md:-mr-20 sm:mr-0 rounded-2xl"
              >
                {/* Rotated P.FORM text */}
                {/* <div className="absolute hidden md:block right-[-9.5rem] top-1/2 -translate-y-1/2 -rotate-90 text-gray-300 font-extrabold text-[85px] tracking-widest select-none">
                  P.FORM
                </div> */}

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Preferred Date */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* E-mail */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Department */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select a department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                    </select>
                  </div>

                  {/* Doctor */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      Doctor <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select a doctor</option>
                      <option>Dr. Smith</option>
                      <option>Dr. John</option>
                    </select>
                  </div>

                  {/* Remarks */}
                  <div className="md:col-span-2 flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      Remarks <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Enter your remarks..."
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-1 mt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#2B3990] hover:bg-[#2B3990] text-white  text-sm lg:text-md font-semibold py-3 rounded-[50px] transition duration-200"
                    >
                      Book an Appointment
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={clinicImage}
                alt="clinicImage"
                className="hidden md:block"
              />

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-4 justify-end  md:mt-8 "
              >
                <div className="flex flex-col md:flex-row w-full md:w-[500px] bg-[#fff] rounded-2xl">
                  {/* Medical Emergency */}
                  <div className=" p-4  text-center flex-1">
                    <h4 className="text-[16px] mb-2">
                      24/7 Medical Help
                    </h4>
                    <p className=" mb-2">
                      Dial our emergency services for immediate medical assistance.
                    </p>
                    <a
                      href="tel:+914242454545"
                      className="text-[#2B3990] font-semibold text-sm"
                    >
                      042-424-54545
                    </a>
                  </div>

                  {/* Book an Ambulance */}
                  <div className=" p-4 text-center flex-1">
                    <h4 className=" text-[16px] mb-2">
                      Book an Ambulance
                    </h4>
                    <p className=" mb-2">
                      24/7 Emergency Ambulance. Trusted Care, Available Always.
                    </p>
                    <a
                      href="tel:+919042065454"
                      className="text-[#2B3990] font-semibold text-sm"
                    >
                      +91 90420 65454
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bookappointment;
