import React from 'react'
import Link from 'next/link';
import achivement from "../assets/nursingservice/phone.png";
import Image from "next/image";
import healthcare from "../assets/nursingservice/hospital.png";
import finddoc from "../assets/nursingservice/finddoc.png";
import hospitalbed from "../assets/nursingservice/ambulance.png";
import { motion } from "framer-motion";

const Contactusfooter = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <motion.div
          className='nursingimg bg-white h-[200px] text-2xl p-6 relative'
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className='text-[20px] text-[#2B3990]'>
            24/7 Emergency Care 
          </h3>
          <p className='text-md font-bold mt-3 text-black'>
            24*7 healthcare support for your needs.  
          </p>
          <div className="absolute bottom-3 font-semibold flex items-center gap-2 z-30">
            <Link href="tel:+914242454545" className="text-[16px] text-[#2B3990] font-bold">042-424-54545</Link>
          </div>
          <Image
            src={achivement}
            alt='image'
            className="absolute bottom-1 right-1 w-8 h-8 flex items-center justify-center z-30 group "
          />
        </motion.div>
        <motion.div
          className='nursingimg bg-white h-[200px] text-2xl p-6 relative'
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className='text-[20px] text-[#2B3990]'>
            Book Ambulance 
          </h3>
          <p className='text-md font-bold mt-3 text-black'>
           Emergency ambulance service, always ready to respond. 
          </p>
          <div className="absolute bottom-3 font-semibold flex items-center gap-2 z-30">
            <Link href="tel:04242454545" className="text-[16px] text-[#2B3990] font-bold">+91 90420 65454</Link>
          </div>
          <Image
            src={hospitalbed}
            alt='image'
            className="absolute bottom-1 right-1 w-8 h-8 flex items-center justify-center z-30 group "
          />
        </motion.div>
        <motion.div
          className='nursingimg bg-white h-[200px] text-2xl p-6 relative'
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className='text-[20px] text-[#2B3990]'>
            Locate Us
          </h3>
          <p className='text-md font-bold mt-3 text-black'>
            No.162, 181, Perundurai Rd,
            Edayankattuvalasu, Erode,
            Tamil Nadu 638011
          </p>
          <div className="absolute bottom-3 font-semibold flex items-center gap-2 z-30">
            <Link href="https://maps.app.goo.gl/jzh6ueErkXLuD7kz8" className="text-[16px] text-[#2B3990] font-bold underline">Get Direction</Link>
          </div>
          <Image
            src={healthcare}
            alt='image'
            className="absolute bottom-1 right-1 w-8 h-8 flex items-center justify-center z-30 group "
          />
        </motion.div>

      </div>
    </div>
  )
}

export default Contactusfooter