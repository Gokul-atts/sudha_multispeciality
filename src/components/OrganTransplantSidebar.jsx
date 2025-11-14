"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import sidebar1 from "@/assets/organtransplant/renal.webp";
import sidebar2 from "@/assets/organtransplant/overview-liver.webp";
import Image from "next/image";
import Logo from "../assets/nursingservice/Group.png";
import Link from "next/link";
import BookAppointmentModal from "@/components/bookappointmentmodal";
import "./bookappointment.css";

const rightbar = [
  {
    head: "Renal Transplant",
    label: "Expert Renal Transplant ensuring healthier kidney function",
    image: sidebar1,
    link: "/facilities/organ-transplant/renal-transplant",
  },
  {
    head: "Liver Transplant",
    label: "Transforming lives with safe, advanced Liver Transplant.",
    image: sidebar2,
    link: "/facilities/organ-transplant/liver-transplant",
  },
];

const OrganTransplantSidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // If you don’t actually need scroll tracking, you can remove this
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    // ⚠️ serviceSections not defined → so commenting this
    // serviceSections.forEach(({ id }) => {
    //   const el = document.getElementById(id);
    //   if (el) observer.observe(el);
    // });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <aside className="w-full lg:w-1/2 space-y-6 lg:sticky lg:top-24 h-fit">
          <h5 className="inline-block px-4 py-1.5 font-semibold bg-white text-[#2B3990] rounded-full text-[14px]">
            Organ Transplant
          </h5>

          <div>
            <h2 className="text-[30px] pb-4">
              Comprehensive Organ Transplant Services
            </h2>
            <p className="mb-4">
              At Sudha Multispeciality Hospital, our Allied Health Care Services
              offer critical support that complements your medical treatment.
              Our expert professionals provide personalised care across
              physiotherapy, dietetics, psychology, maternal health, and organ
              transplant rehab. From the very first step in your healing
              journey, we focus on enhancing recovery outcomes, boosting your
              physical and emotional strength, and ensuring that your overall
              well-being is restored with compassion, collaboration, and
              cutting-edge therapies.
            </p>

            <button
              className="btn-diagonal mt-5 flex items-center gap-2 mx-auto"
              onClick={() => setOpenModal(true)}
            >
              Book an Appointment <ArrowUpRight className="w-5 h-5" />
            </button>

            <BookAppointmentModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>
        </aside>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            {rightbar.map((item, index) => (
              <Link href={item.link} key={index}>
                <div className="relative group">
                  <div className="bg-white md:h-auto h-[340px] rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start">
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.head}
                      className="w-full sm:w-60 h-[220px] sm:h-[260px] object-cover rounded-3xl mx-auto"
                    />

                    {/* Text Content */}
                    <div className="flex flex-col flex-1 justify-between h-full w-full">
                      <div className="flex justify-between items-end w-full">
                        <h3 className="text-[20px] sm:text-[22px]">
                          {item.head}
                        </h3>
                        <Image
                          height={40}
                          width={40}
                          alt="Logo"
                          src={Logo}
                          className="hidden sm:block"
                        />
                      </div>

                      <div className="pt-4 absolute bottom-6 mr-4">
                        <div className="border-t border-gray-200 mt-4 mb-2" />
                        <p className="text-[14px]">{item.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganTransplantSidebar;
