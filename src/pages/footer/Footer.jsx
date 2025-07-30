"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/home/whiteLogo.svg"; // Replace with your actual path
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import facebookIcon from "@/assets/footer/socialIcons/facebook.svg";
import youtubeIcon from "@/assets/footer/socialIcons/youtube.svg";
import instagramIcon from "@/assets/footer/socialIcons/instagram.svg";


const Footer = () => {
  return (
    <footer>
      <div className=" text-gray-700 pt-9 relative z-20">
        <div className="max-w-7xl mx-auto p-8  bg-gradient-to-r from-[#2A3D90] to-[#0C122A] text-white rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            {/* Left: Logo + About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-start"
            >
              <div className="flex justify-center md:justify-start ">
                <Image src={logo} alt="Logo" className="h-10 w-auto mb-4" />
              </div>
              <p className="text-[#FFF] mb-4">
                Sudha Hospital is a leading multispeciality hospital in Erode,
                known for its exceptional healthcare services.
              </p>
              <p className="font-semibold text-[#FFF] mb-4">Social Media</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/sudhahospitals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Image src={facebookIcon} alt="Facebook" width={16} height={16} />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@sudhafertilitycentre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Image src={youtubeIcon} alt="Youtube" width={16} height={16} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/sudhahospitals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Image src={instagramIcon} alt="Instagram" width={16} height={16} />
                  </div>
                </a>
              </div>

            </motion.div>

            {/* Middle: Two Hospital Locations */}
            <motion.div
              className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Location 1 */}
              <div>
                <h4 className=" mb-2">
                  Sudha Multispeciality Hospital
                </h4>
                <p className="text-[#FFF] flex gap-3 mt-7">
                  <MdOutlineLocationOn className="size-8" />
                  No. 162, 1B1, Perundurai Rd, Edayankattuvalsu, Erode, Tamil
                  Nadu 638011
                </p>
                <p className="text-[#FFF] mt-7 flex gap-3">
                  <IoMail className="size-5" />
                  care@sudhahospitals.com
                </p>
                <div className="text-[#FFF] flex gap-3 mt-7">
                  <IoCall className="size-6" />
                  <div>
                    <a
                      href="tel:+914242454545"
                      className="text-white font-semibold text-sm"
                    >
                      +91-424-454545
                    </a>
                    <p>
                      <a
                        href="tel:+7670076006"
                        className="text-white font-semibold text-sm"
                      >+91 76-7007-6006
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Location 2 */}
              <div>
                <h4 className="text-[#FFF] mb-2">
                  Sudha Institute of Medical Science
                </h4>
                <p className="text-[#FFF] flex gap-3 mt-7">
                  <MdOutlineLocationOn className="size-8" />
                  No. 162, 1B1, Perundurai Rd, Edayankattuvalsu, Erode, Tamil
                  Nadu 638011
                </p>
                <p className="text-[#FFF] mt-7 flex gap-3">
                  <IoMail className="size-5" />
                  care@sudhahospitals.com
                </p>
                <div className="text-[#FFF] flex gap-3 mt-7">
                  <IoCall className="size-6" />
                  <div>
                    <a
                      href="tel:+914242454545"
                      className="text-white font-semibold text-sm"
                    >
                      +91-424-454545
                    </a>
                    <p>
                      <a
                        href="tel:+7670076006"
                        className="text-white font-semibold text-sm"
                      >+91 76-7007-6006
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="bg-[#FFFFFF] rounded-t-3xl -z-20 pt-40 -mt-36">
        {/* Top Grid Section */}
        <div className="max-w-7xl mx-auto  py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 ">
          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-[18px] mb-3">Specialties</h4>
            <ul className="columns-1 gap-8 space-y-3 text-[16px]">
              {["Centre of Excellence", "Cardiology", "Cardiothoracic Surgery", "Anaesthesiology", "Dentistry & Oral Surgery", "Dermatology Aesthetics & Lasers", "ENT", "Emergency Care", "Gastroenterology", "Radiology", "General Medicine"].map((item, i) => (
                <li key={i} className=" text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer flex gap-2 items-center "><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* <h4 className="font-semibold text-black mb-3">Specialties</h4> */}
            <ul className="columns-1 gap-8 space-y-3 text-[16px]">
              {["General Surgery", "Intensive Care Unit", "Urology", "Orthopedics", "Nephrology", "Neurology", "Obstetrics & Gynaecology", "Imaging & Diagnostic Services", "Pulmonology", "Pediatrics & Neonatology", "Pain Medicine", "Plastic Surgery"].map((item, i) => (
                <li key={i} className="text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue cursor-pointer flex gap-3 items-center"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* About Sudha, Academics, Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-[18px] mb-3">About Sudha Hospital</h4>
              <ul className="space-y-3 gap-8">
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Our Growth Story</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Board of Trustees</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Awards & Honours</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Infrastructure</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Why Sudha?</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] mb-3">Academics</h4>
              <ul className="space-y-3 gap-8">

                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Post MBBS Diploma Courses (DNB)</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Fellow of National Board (FNB)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] mb-3">Facility Insight</h4>
              <ul className="space-y-3 gap-8">
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Allied Health Service</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Nursing Services</li>

                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Biomedical Report</li>
              </ul>
            </div>
          </motion.div>

          {/* Careers, Contact, Media, Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-[18px] mb-3">Careers</h4>
              <ul className="space-y-3 gap-8">
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] mb-3">Contact Us</h4>
              <ul className="space-y-3 gap-8">
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] mb-3 ">Media Centre</h4>
              <ul className="space-y-3 gap-8">
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Blogs</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Camps</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> News & Events</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] mb-3">Important link</h4>
              <ul className="space-y-3 gap-8">
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Privacy Policy</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Terms & Conditions</li>
                <li className="flex gap-3 items-center text-[14px] font-semibold text-[#5E566A] hover:text-primary-blue"><div className="w-2 h-2 rounded-lg bg-[#2B3990]"></div> Disclaimer</li>

              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 text-xs text-center text-gray-500 py-4">
          <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-black text-[14px]">© Copyright 2025 Sudha Hospital. All rights reserved.</p>
            <p className="text-black text-[14px]">
              Designed & Developed by {" "}
              <Link
                href="https://arionmedia.co"
                target="_blank"
                className="text-primary-blue underline"
              >
                Arion Media Corp
              </Link>
            </p>
          </div>
        </div>


      </section>
    </footer>
  );
};

export default Footer;
