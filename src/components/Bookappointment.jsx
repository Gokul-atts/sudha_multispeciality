import React, { useState } from "react";
import clinicImage from "../assets/home/appointment.webp";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./bookappointment.css";
import toast, { Toaster } from "react-hot-toast";

function Bookappointment() {
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
      <section className="relative bg-[#EEF6FF] mb-m overflow-hidden">
        <div className="max-w-7xl mx-auto  h-full">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              {/* Heading */}
              <h2 className="text-[30px]  text-center md:text-left mb-6 md:mb-8">
                Book an Appointment for <br className="hidden md:block" />
                Comprehensive Medical Care
              </h2>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-4xl mx-auto bg-white pl-8 pt-8 pb-8 pr-8 lg:-mr-20 sm:mr-0 rounded-3xl"
              >
                {/* Rotated P.FORM text */}
                {/* <div className="absolute hidden md:block right-[-9.5rem] top-1/2 -translate-y-1/2 -rotate-90 text-gray-300 font-extrabold text-[85px] tracking-widest select-none">
                  P.FORM
                </div> */}

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
                      type="number"
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
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col">
              <Image
                src={clinicImage}
                alt="clinicImage"
                className="hidden lg:block"
              />

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-4 justify-end mt-5 md:mt-8 "
              >
                <div className="flex flex-col md:flex-row w-full md:w-[500px] bg-[#fff] rounded-2xl">
                  {/* Medical Emergency */}
                  <div className=" p-4  text-center flex-1">
                    <h4 className="text-[16px] mb-2">24/7 Medical Help</h4>
                    <p className=" mb-2">
                      Dial our emergency services for immediate medical
                      assistance.
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
                    <h4 className=" text-[16px] mb-2">Book an Ambulance</h4>
                    <p className=" mb-2">
                      24/7 Emergency Ambulance. Trusted Care, Available Always.
                    </p>
                    <a
                      href="tel:04242454545"
                      className="text-[#2B3990] font-semibold text-sm"
                    >
                      +91-90-4206-5454
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
