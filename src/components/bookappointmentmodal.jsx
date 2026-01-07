"use client";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import AppointmentImage from "@/assets/bookappointmentmodal/consultation-form.webp";
import toast, { Toaster } from "react-hot-toast";

const BookAppointmentModal = ({ open, onClose }) => {
  const modalRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ensure we're on client before touching document / createPortal
  // useEffect(() => {
  //   setIsMounted(true);
  //   return () => setIsMounted(false);
  // }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isMounted) return;
    const origOverflow =
      typeof document !== "undefined" ? document.body.style.overflow : "";
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = origOverflow || "";
    }
    return () => {
      if (typeof document !== "undefined")
        document.body.style.overflow = origOverflow || "";
    };
  }, [open, isMounted]);

  // Close on ESC
  useEffect(() => {
    if (!isMounted || !open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, isMounted, onClose]);

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    mobile: "",
    email: "",
    department: "",
    doctor: "",
    remarks: "",
  });
  const [errors, setErrors] = useState({});

  // Doctor List
  const doctorsList = {
    Anaesthesiology: [
      "Dr.Kumaravel Pandiyan",
      "Dr.P.Nithiyanandhan",
      "Dr.V.Amutha",
      "Dr.Balaji Mani",
      "Dr.Aarthi Sasivarnan",
      "Dr.V.Sountharajan",
    ],
    BariatricMetabolic: ["Dr.S.Balamurugan"],
    Cardiology: ["Dr.N.Rajasekar", "Dr.D.Kandaswamy", "Dr.K.Sudhakar"],
    CardiothoracicSurgery: ["Dr.Minnathulla"],
    Dentistry: ["Dr.A.Aafia Parveen", "Dr.Sharath Ashokan"],
    Dermatology: ["Dr.M.Chakravarthi"],
    DMO: [
      "Dr.C.Senthur Raj",
      "Dr.K.E.Sakthi Saravanan",
      "Dr.K.V.Lakshmanan",
      "Dr.V.Kamall",
      "Dr.A.Krishna kumar",
      "Dr.D.Thriuvenkata Lakshmanan",
    ],
    ENT: ["Dr.M.P.Kavin Kumar"],
    FetalMedicine: ["Dr.Sathiya Lakshmi"],
    GeneralMedicine: [
      "Dr.K.Sudhakar",
      "Dr.S.N.Ganesha Moorthy",
      "Dr.G.Sathish Kumar",
    ],
    Gynecology: [
      "Dr.P.Vanitha",
      "Dr.Deepika",
      "Dr.S.Pradeepa",
      "Dr.S.Dhanabagyam",
    ],
    Nephrology: ["Dr.V.Nagendran"],
    Neurology: ["Dr.G.Vikram Raj", "Dr.S.Mohan"],
    NuclearMedicine: ["Dr.Prathap"],
    Oncology: ["Dr.J.Sugeshwaran"],
    Orthopedic: ["Dr.K.Attiyanan", "Dr.T.Janarthanan"],
    Pediatrics: ["Dr.S.Rangesh", "Dr.N.Gowrishankar"],
    Pathology: ["Dr.R.Renuga"],
    PlasticSurgery: ["Dr.Gnanasekaran"],
    Psychiatry: ["Dr.S.Anand"],
    Pulmonology: ["Dr.P.Duraikannan"],
    Radiology: ["Dr.Subhashree Ramasamy", "Dr.M.Thirunavukarasu"],
    Urology: ["Dr.M.Gopinath"],
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Preferred date is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.doctor) newErrors.doctor = "Doctor is required";
    if (!formData.remarks) newErrors.remarks = "Remarks are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([k, v]) => form.append(k, v));
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyfAqPmwT117o8qJ2U_hEaSfh9cBlB6CjHbxtGUq7EnVQM9HzfNCen_d0JWq1Et5rVB/exec",
        { method: "POST", body: form }
      );
      const result = await res.json();

      if (result.result === "success") {
        toast.success("Appointment booked successfully!");
        setFormData({
          date: "",
          name: "",
          mobile: "",
          email: "",
          department: "",
          doctor: "",
          remarks: "",
        });
        setTimeout(() => onClose(), 2000); // Auto close after success
      } else {
        toast.error("Something went wrong!");
        console.error("API error response:", result);
      }
    } catch (err) {
      toast.error("Error connecting to server!");
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Render
  if (!isMounted || !open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center px-2 sm:px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative bg-[#EEF6FF] rounded-3xl shadow-lg w-full max-w-lg sm:max-w-2xl md:max-w-6xl mx-auto z-[10000] overflow-hidden grid md:grid-cols-2 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>

        {/* Left Image */}
        <div className="relative hidden md:block h-full">
          <Image
            src={AppointmentImage}
            alt="Appointment"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        {/* Form */}
        <div className="p-6 sm:p-8 md:p-12 bg-white relative">
          <h2 className="text-[22px] font-extrabold mb-6 md:mt-0 mt-4 sm:mb-8 text-center md:text-left">
            Book an Appointment for Comprehensive Medical Care
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
          >
            <Toaster />

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 py-2 h-11 text-sm"
              />
              {errors.date && (
                <p className="text-red-500 text-xs">{errors.date}</p>
              )}
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Name *</label>
              <input
                type="text"
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 h-11 py-2 text-sm"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Mobile *</label>
              <input
                type="number"
                pattern="[0-9]{10}"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 h-11 py-2 text-sm"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs">{errors.mobile}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Email *</label>
              <input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 h-11 py-2 text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Department */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Department *
              </label>
              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    department: e.target.value,
                    doctor: "",
                  })
                }
                className="border border-gray-200 rounded-lg px-4 h-11 text-sm"
              >
                <option value="">Select a department</option>
                {Object.keys(doctorsList).map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              {errors.department && (
                <p className="text-red-500 text-xs">{errors.department}</p>
              )}
            </div>

            {/* Doctor */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Doctor *</label>
              <select
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({ ...formData, doctor: e.target.value })
                }
                disabled={!formData.department}
                className="border border-gray-200 rounded-lg px-4 h-11 text-sm"
              >
                <option value="">Select a doctor</option>
                {formData.department &&
                  doctorsList[formData.department]?.map((doc) => (
                    <option key={doc} value={doc}>
                      {doc}
                    </option>
                  ))}
              </select>
              {errors.doctor && (
                <p className="text-red-500 text-xs">{errors.doctor}</p>
              )}
            </div>

            {/* Remarks */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-1">Remarks *</label>
              <textarea
                rows="3"
                placeholder="Enter remarks"
                value={formData.remarks}
                onChange={(e) =>
                  setFormData({ ...formData, remarks: e.target.value })
                }
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm"
              />
              {errors.remarks && (
                <p className="text-red-500 text-xs">{errors.remarks}</p>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                disabled={loading}
                className={`btn-diagonal flex items-center gap-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Booking..." : "Book an Appointment"}
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    typeof document !== "undefined" ? document.body : null
  );
};

export default BookAppointmentModal;
