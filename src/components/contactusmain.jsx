import Link from 'next/link';
import React from 'react'
import achivement from "../assets/nursingservice/achivement.svg";
import Image from "next/image";
import healthcare from "../assets/nursingservice/healthcare.png";
import finddoc from "../assets/nursingservice/finddoc.png";
import hospitalbed from "../assets/nursingservice/hospitalbed.png";
import { motion } from "framer-motion";



const Contactusmain = () => {
    
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
              <motion.div
                  className='nursingimg bg-white h-[170px] text-2xl p-6 relative'
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
              >
                  <h1 className='text-[#2B3990] font-semibold text-4xl'>
                      45+
                  </h1>
                  <h3 className='text-md mt-4 font-semibold leading-[1.4] text-start text-[#000000]'>
                      Years Of Experience
                  </h3>
                  <Image
                      src={achivement}
                      alt='image'
                      className="absolute bottom-1 right-1 w-8 h-8 flex items-center justify-center z-30 group "
                  />
              </motion.div>
              <motion.div
                  className='nursingimg bg-white h-[170px] text-2xl p-6 relative'
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
              >
                <h1 className='text-[#2B3990] font-semibold text-4xl'>
                    150+
                </h1>
                <h1 className='text-[#000000] font-semibold text-xl'>
                  Patient Bed
                </h1>
                <Image
                    src={hospitalbed}
                    alt='image'
                    className="absolute bottom-1 right-1 w-8 h-8 flex items-center justify-center z-30 group "
                  />
            </motion.div>
             <motion.div
                  className='nursingimg bg-white h-[170px] text-2xl p-6 relative'
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
              >
                <h1 className='text-[#2B3990] font-semibold text-4xl'>
                    24+
                </h1>
                <h1 className='text-[#000000] font-semibold text-xl'>
                 Departments
                </h1>
                <Image
                    src={healthcare}
                    alt='image'
                    className="absolute bottom-1 right-1 w-8 h-8 flex items-center justify-center z-30 group "
                  />
            </motion.div>
              <motion.div
                  className='nursingimg bg-white h-[170px] text-2xl p-6 relative'
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
              >
                <h1 className='text-[#2B3990] font-semibold text-4xl'>
                    30+
                </h1>
                <h1 className='text-[#000000] font-semibold text-xl'>
                  Doctors
                </h1>
                <Image
                    src={finddoc}
                    alt='image'
                    className="absolute bottom-1 right-1 w-8 h-8 flex items-center justify-center z-30 group "
                  />
            </motion.div>
        </div>

    </div>
  )
}

export default Contactusmain;