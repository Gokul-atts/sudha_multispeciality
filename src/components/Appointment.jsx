"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
const RegistrationForm = () => {
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

  // Department → Doctors mapping
  const doctorsList = {

    Anaesthesiology: ["Dr.Kumaravel Pandiyan","Dr.P.Nithiyanandhan","Dr.V.Amutha","Dr.Balaji Mani","Dr.Aarthi Sasivarnan","Dr.V.Sountharajan"],
    BariatricMetabolic: ["Dr.S.Balamurugan"],
    Cardiology: ["Dr.N.Rajasekar","Dr.D.Kandaswamy","Dr.K.Sudhakar"],
    CardiothoracicSurgery: ["Dr.Minnathulla"],
    Dentistry: ["Dr.A.Aafia Parveen","Dr.Sharath Ashokan"],
    Dermatology: ["Dr.M.Chakravarthi"],
    DMO: ["Dr.C.Senthur Raj","Dr.K.E.Sakthi Saravanan","Dr.K.V.Lakshmanan","Dr.V.Kamall","Dr.A.Krishna kumar","Dr.D.Thriuvenkata Lakshmanan"],
    ENT: ["Dr.M.P.Kavin Kumar"],
    FetalMedicine: ["Dr.Sathiya Lakshmi"],
    GeneralMedicine: ["Dr.K.Sudhakar","Dr.S.N.Ganesha Moorthy","Dr.G.Sathish Kumar"],
    Gynecology: ["Dr.P.Vanitha","Dr.Deepika","Dr.S.Pradeepa","Dr.S.Dhanabagyam"],
    Nephrology: ["Dr.V.Nagendran"],
    Neurology: ["Dr.G.Vikram Raj","Dr.S.Mohan"],
    NuclearMedicine: ["Dr.Prathap"],
    Oncology: ["Dr.J.Sugeshwaran"],
    Orthopedic : ["Dr.K.Attiyanan","Dr.T.Janarthanan"],
    Pediatrics: ["Dr.S.Rangesh","Dr.N.Gowrishankar"],
    Pathology: ["Dr.R.Renuga"],
    PlasticSurgery: ["Dr.Gnanasekaran"],
    Psychiatry: ["Dr.S.Anand"],
    Pulmonology: ["Dr.P.Duraikannan"],
    Radiology: ["Dr.Subhashree Ramasamy","Dr.M.Thirunavukarasu"],
    Urology: ["Dr.M.Gopinath"],
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.date) newErrors.date = "Preferred date is required";
    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.doctor) newErrors.doctor = "Doctor is required";
    if (!formData.remarks) newErrors.remarks = "Remarks are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const form = new FormData();
      form.append("date", formData.date);
      form.append("name", formData.name);
      form.append("mobile", formData.mobile);
      form.append("email", formData.email);
      form.append("department", formData.department);
      form.append("doctor", formData.doctor);
      form.append("remarks", formData.remarks);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyfAqPmwT117o8qJ2U_hEaSfh9cBlB6CjHbxtGUq7EnVQM9HzfNCen_d0JWq1Et5rVB/exec",
        {
          method: "POST",
          body: form,
        }
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
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Error connecting to server!");
    }
  };
  return (
    <div>
      <h2 className="text-[24px] pb-5 ">Make an Appointment</h2>

                {/* Form */}
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
                    <label className="text-sm font-semibold mb-1">
                      Mobile *
                    </label>
                    <input
                      type="tel"
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
                    <label className="text-sm font-semibold mb-1">
                      Email *
                    </label>
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
                        <option key={dept}>{dept}</option>
                      ))}
                    </select>
                    {errors.department && (
                      <p className="text-red-500 text-xs">
                        {errors.department}
                      </p>
                    )}
                  </div>

                  {/* Doctor */}
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">
                      Doctor *
                    </label>
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
                          <option key={doc}>{doc}</option>
                        ))}
                    </select>
                    {errors.doctor && (
                      <p className="text-red-500 text-xs">{errors.doctor}</p>
                    )}
                  </div>

                  {/* Remarks */}
                  <div className="md:col-span-2 flex flex-col">
                    <label className="text-sm font-semibold mb-1">
                      Remarks *
                    </label>
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
                  <div className="md:col-span-1 mt-2">
                    <button
                      type="submit"
                      className="btn-diagonal flex items-center gap-2"
                    >
                      Book an Appointment <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
    </div>
  );
};

export default RegistrationForm;
