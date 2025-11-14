"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link"; // ✅ import Link
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

import Heart from "../assets/home/centreofexcellence/heart.svg";
import Lungs from "../assets/home/centreofexcellence/lungs.svg";
import Mother from "../assets/home/centreofexcellence/mother.svg";
import Cancercentre from "../assets/home/centreofexcellence/cancercentre.svg";
import Brain from "../assets/home/centreofexcellence/brain.svg";
import Fertility from "../assets/home/centreofexcellence/fertility.svg";

const excellenceData = [
  { id: 1, title: "Cardiology", slug: "/specialities/cardiology", description: "Comprehensive cardiac care led by experienced cardiologists and advanced diagnostic tools.", image: Heart, services: ["Coronary Angiography", "Pacemaker Implantation", "Peripheral Vascular Stenting", "Complex Heart Surgeries", "Preventive Cardiology", "Non-Invasive Cardiology", "Coronary Angioplasty", "Paediatric Cardiology"] },
  { id: 2, title: "Pulmonology", slug: "/specialities/pulmonology", description: "Advanced care and diagnosis for all your pulmonary needs, from diagnosis to recovery.", image: Lungs, services: ["Asthma", "Tuberculosis (TB)", "Pneumonia", "Interstitial Lung Disease", "Paediatric Pulmonology", "Pulmonology Surgeries", "Fungal & bacterial lung infections", "Chronic Obstructive Pulmonary Disease (COPD)"] },
  { id: 3, title: "Mother & Child Care", slug: "/mother-and-child-care", description: "Expert-led services for mothers and babies, from prenatal assessments to delivery and neonatal care.", image: Mother, services: ["Pre-natal Care", "Post-natal Care", "Paediatrics ", "Maternity Care", "Gynaecology",  "Painless Delivery", "Dietetics"] },
  { id: 4, title: "Cancer Centre", slug: "https://sudhacancercentre.com/", description: "Comprehensive cancer diagnosis and treatment led by expert oncologists using advanced technologies in a compassionate setting.", image: Cancercentre, services: ["Brain Cancer", "Breast Cancer", "Cervical Cancer", "Colorectal Cancer", "Endometrial Cancer", "Lung Cancer", "Lymphoma Cancer", "Renal Cancer"] },
  { id: 5, title: "Neurology", slug: "/specialities/neurology", description: "Comprehensive neurological support with cutting-edge evaluation and compassionate care.", image: Brain, services: ["Skull Base Surgery", "Paediatric Neurology", "Neurosurgery", "Epilepsy Surgeries", "Stereotactic Surgery", "Stroke Evaluation", "Micro Neurosurgical Tumour Removal", "Keyhole Brain Biopsy"] },
  { id: 6, title: "Fertility Centre", slug: "https://sudhafertilitycentre.com/", description: "Advanced fertility treatments and diagnostics, supporting couples in every stage of their parenthood journey with care.", image: Fertility, services: ["IVF", "IUI", "ICSI", "Fertility Checkup", "PCOD & PCOS", "Laparoscopy", "Male Infertility", "Female Infertility"] },
];

export default function CentreOfExcellence() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2, rows: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, rows: 2 } },
    ],
  };

  return (
    <section className="bg-gradient-to-br px-4 md:px-0  py-16 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white text-[#2B3990] px-6 py-2 rounded-full text-md font-bold mb-4">
            Centre of Excellence
          </div>
          <h2 className="text-[30px] mb-4">
           Advanced & Personalized Solutions for All Your <br/>Health Needs, Under One Roof
          </h2>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {excellenceData.map((item) => (
            <div key={item.id} className="p-4 h-[100%]">
              <Link href={item.slug} className="block h-full"> {/* ✅ Make entire card clickable */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 h-[300px] mb-custom-h flex flex-col relative  transition">
                  {/* Top-right Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 sm:w-12 sm:h-12">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-[22px] mb-3">{item.title}</h3>
                    <p className="text-[14px]">{item.description}</p>
                  </div>

                  {/* Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    {item.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#F0F7FD] text-[#2B3990] flex items-center justify-center">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <p className="font-semibold text-[13px]">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows bottom-right */}
        <div className="absolute -bottom-14 right-0 flex gap-3 p-4 ">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="border border-[#2B3990] text-[#2B3990] hover:bg-[#2B3990] hover:text-white p-2 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-[#2B3990] hover:bg-[#1f2e6e] text-white p-2 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
