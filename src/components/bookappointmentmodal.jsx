"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import AppointmentImage from "@/assets/bookappointmentmodal/appointment.png";
import { ArrowUpRight } from "lucide-react";

const BookAppointmentModal = ({ open, onClose }) => {
  const modalRef = useRef(null);

  if (!open) return null; //  Don't render if not open

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose(); // close when clicking outside
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative bg-[#EEF6FF] rounded-2xl shadow-lg max-w-6xl w-full mx-4 overflow-hidden grid md:grid-cols-2"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>

        {/* Left Side Image */}
        <div className="relative hidden md:block">
          <Image
            src={AppointmentImage}
            alt="Appointment"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-6 sm:p-8 md:p-12 relative bg-white">
          <h2 className="text-[24px] md:text-[30px] font-semibold mb-8 text-center md:text-left relative z-10">
            Book an Appointment for Comprehensive Medical Care
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 relative z-10">
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
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Department */}
            <div className="flex flex-col relative">
              <label className="text-sm font-medium mb-1">
                Department <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="appearance-none border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                >
                  <option>Select a department</option>
                  <option>Anaethesiology</option>
                  <option>Cardiology</option>
                  <option>Cardiothoracic Surgery</option>
                  <option>Densitry and Oral Surgery</option>
                  <option>Dermatology Aesthetics and Lasers</option>
                  <option>ENT</option>
                  <option>Emergency Care</option>
                  <option>Gastroenterology</option>
                  <option>Radiology</option>
                  <option>General Medicine</option>
                  <option>General Surgery</option>
                  <option>Intensive Care Unit</option>
                  <option>Urology</option>
                  <option>Orthopaedics</option>
                  <option>Nephrology</option>
                  <option>Neurology</option>
                  <option>Imaging and Diagnostic Services</option>
                  <option>obstetrics & Gynaecology</option>
                  <option>Pulmonology</option>
                  <option>Paediatrics</option>
                  <option>Neonatology</option>
                  <option>Pain Medicine</option>
                  <option>Plastic Surgery</option>
                  <option>Oncology</option>
                  <option>Laryngology</option>
                </select>
                {/* Custom dropdown icon */}
                <svg
                  className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>


            {/* Doctor */}
            <div className="flex flex-col relative">
              <label className="text-sm font-medium mb-1">
                Doctor <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="appearance-none border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                  <option>Select a doctor</option>
                  <option>Dr. Smith</option>
                  <option>Dr. John</option>
                </select>
                <svg
                  className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>


            {/* Remarks */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-medium mb-1">
                Remarks <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="3"
                placeholder="Enter your remarks…"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-1 mt-2">
              <Link href="/">
                <button
                  type="submit"
                  className="w-full bg-[#2B3990] hover:bg-[#1f2e6e] text-white text-sm font-semibold py-3 rounded-full transition flex items-center justify-center gap-2"
                >
                  Book an Appointment
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
