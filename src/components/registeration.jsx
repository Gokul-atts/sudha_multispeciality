import React, { useState } from "react";
import clinic from "../assets/contactus/contactus.svg";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import RegistrationForm from "./Appointment";

const AppointmentForm = () => {
  const [isCustomer, setIsCustomer] = useState(false);

  const handleToggleCustomer = (value) => setIsCustomer(value);

  return (
    <div className="min-h-screen flex items-center w-full justify-center -mt-10">
      <div className="bg-white rounded-3xl  p-8 w-full max-w-8xl grid grid-col lg:grid-cols-2 gap-10">
        <div className="col-span-full space-y-2  flex flex-col items-center text-center">

          <div className="flex justify-center">
            <h5 className="bg-blue  px-5  py-2 rounded-full text-sm font-semibold">
              Sudha | Caring for People
            </h5>
          </div>

          <h2 className="text-[30px] ">
            Trusted by Families, Recommended by Experts
          </h2>

          <p className="text-gray-600 text-sm">
            Get expert consultations from top doctors for all your health concerns.
          </p>
        </div>
        <motion.div
          className="flex-1 space-y-6 mt-5"
          initial={{ x: -100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center  my-6 rounded-full text-md font-semibold w-fit mt-3 overflow-hidden">
            {["New Registration", "Existing Registration"].map((label, index) => {
              const isActive = isCustomer === (index === 1);

              return (
                <button
                  key={label}
                  onClick={() => handleToggleCustomer(index === 1)}
                  className={`px-6 py-2 transition-all font-semibold ${isActive
                    ? `text-white`
                    : "dark:bg-white dark:text-[#232323]"
                    } ${isActive ? "" : "#2B3990"
                    }`}
                  style={{
                    backgroundColor: isActive ? "#2B3990" : "#F0F7FD",
                    borderTopLeftRadius: index === 0 ? "0.75rem" : 0,
                    borderBottomLeftRadius: index === 0 ? "0.75rem" : 0,
                    borderTopRightRadius: index === 1 ? "0.75rem" : 0,
                    borderBottomRightRadius: index === 1 ? "0.75rem" : 0,
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* </div> */}

          <RegistrationForm />
        </motion.div>

        {/* <div className="relative hidden sm:block w-full"> */}
        <motion.div
          className="relative hidden sm:block w-full mt-5"
          initial={{ x: 100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={clinic}
            alt="Image"
            className="rounded-2xl w-full object-contain h-auto max-h-[540px]"
          />
        </motion.div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AppointmentForm;