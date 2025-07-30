'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Banner from "@/assets/termsandconditions/banner.png";

const Data = [
    { date: "01", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 0, bottle_waste_blue: 3.700, total_kgs: 322.9, vehicle_number: "9972" },
    { date: "02", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 5, bottle_waste_blue: 23.300, total_kgs: 397.7, vehicle_number: "9972" },
    { date: "03", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 2, bottle_waste_blue: 5.300, total_kgs: 396.0, vehicle_number: "9972" },
    { date: "04", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 2, bottle_waste_blue: 3.700, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "05", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 1, bottle_waste_blue: 23.300, total_kgs: 289.7, vehicle_number: "9972" },
    { date: "06", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 1, bottle_waste_blue: 3.700, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "07", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 3, bottle_waste_blue: 11.200, total_kgs: 289.7, vehicle_number: "9972" },
    { date: "08", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 0, bottle_waste_blue: 23.700, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "09", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 0, bottle_waste_blue: 13.600, total_kgs: 396.0, vehicle_number: "9972" },
    { date: "10", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 2, bottle_waste_blue: 21.800, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "11", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 1, bottle_waste_blue: 12.800, total_kgs: 289.7, vehicle_number: "9972" },
    { date: "12", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 3, bottle_waste_blue: 15.400, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "13", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 2, bottle_waste_blue: 12.800, total_kgs: 289.7, vehicle_number: "9972" },
    { date: "14", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 3, bottle_waste_blue: 15.400, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "15", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 1, bottle_waste_blue: 12.800, total_kgs: 289.7, vehicle_number: "9972" },
    { date: "16", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 2, bottle_waste_blue: 13.600, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "17", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 2, bottle_waste_blue: 11.200, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "18", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 1, bottle_waste_blue: 12.800, total_kgs: 289.7, vehicle_number: "9972" },
    { date: "19", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 2, bottle_waste_blue: 11.200, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "20", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 5, bottle_waste_blue: 12.800, total_kgs: 289.7, vehicle_number: "9972" },
    { date: "21", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 4, bottle_waste_blue: 11.200, total_kgs: 289.7, vehicle_number: "9972" },
    { date: "22", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 3, bottle_waste_blue: 15.400, total_kgs: 289.7, vehicle_number: "9972" },
    { date: "23", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 0, bottle_waste_blue: 21.800, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "24", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 3, bottle_waste_blue: 21.800, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "25", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 5, bottle_waste_blue: 15.400, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "26", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 5, bottle_waste_blue: 11.200, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "27", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 5, bottle_waste_blue: 12.800, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "28", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 5, bottle_waste_blue: 3.700, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "29", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 1, bottle_waste_blue: 3.700, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "30", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 1, bottle_waste_blue: 12.800, total_kgs: 342.0, vehicle_number: "9972" },
    { date: "31", clinical_waste_red: 138.0, infectious_waste_yellow: 161.3, sharp_waste_white: 2, bottle_waste_blue: 15.400, total_kgs: 289.7, vehicle_number: "9972" },
];


const Medicalwastemanagement = () => {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    return (
        <div className="text-black">
            {/* Banner Section */}
            <section className="relative -mt-12 lg:-mt-20 mb-10">
                <div
                    className="relative max-w-7xl mx-auto px-4 py-36 z-10 text-white bg-[center_top_-40px] bg-no-repeat bg-cover lg:bg-contain rounded-[12px]"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-sm mb-4"
                            >
                                Home / Bio Medical Waste Management
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-5xl font-bold mb-2"
                            >
                                Bio Medical Waste Management
                            </motion.h1>

                            <p className="text-lg font-medium">
                                Biomedical Reports Maintained with Accuracy
                            </p>
                        </div>

                        {/* Corner Floating Card */}
                        <div className="absolute bottom-16 right-2 sm:right-8 md:right-[-4px] z-30 hidden md:block">
                            <div className="w-[220px] shadow-md overflow-hidden rounded-tl-xl rounded-tr-xl rounded-br-xl">
                                <div className="h-[30%] bg-transparent" />
                                <div className="bg-white p-4">
                                    <h3 className="text-[36px] font-bold text-[#2B3990]">40+</h3>
                                    <p className="text-lg leading-snug text-black font-semibold">
                                        Years of Trusted <br />
                                        Expertise in <br />
                                        Healthcare
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Filter Card Inside Banner */}
                        <div className="absolute left-4 md:left-8 bottom-[-50px] bg-white p-6 rounded-2xl shadow-xl z-20 w-[95%] md:w-[600px]">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">
                                Bio Medical Waste Management Data
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Month Dropdown */}
                                <select
                                    className="border rounded-md p-2 w-full bg-white text-black"
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                >
                                    <option value="">Select Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>

                                {/* Year Dropdown */}
                                <select
                                    className="border rounded-md p-2 w-full bg-white text-black"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                >
                                    <option value="">Select Year</option>
                                    {Array.from({ length: 25 }, (_, i) => {
                                        const y = 2025 - i;
                                        return (
                                            <option key={y} value={y}>
                                                {y}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table Section */}
            <section className="mt-24 mb-10 px-4">
                <div className="overflow-x-auto max-w-7xl mx-auto rounded-xl shadow-lg border">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="bg-[#e6f4ff] text-black">
                                <th className="p-3 border bg-white">Date</th>
                                <th className="p-3 border bg-red-100">Clinical Waste (Red)</th>
                                <th className="p-3 border bg-yellow-100">Infectious Waste (Yellow)</th>
                                <th className="p-3 border bg-white">Sharp Waste (White)</th>
                                <th className="p-3 border bg-blue-100">Bottle Waste (Blue)</th>
                                <th className="p-3 border bg-white">Total (kg)</th>
                                <th className="p-3 border bg-white">Vehicle No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((row, index) => (
                                <tr key={index} className="border-b text-black hover:bg-gray-50 transition duration-150">
                                    <td className="p-3 border bg-white">{row.date}</td>
                                    <td className="p-3 border bg-red-50">{row.clinical_waste_red.toFixed(3)}</td>
                                    <td className="p-3 border bg-yellow-50">{row.infectious_waste_yellow.toFixed(3)}</td>
                                    <td className="p-3 border bg-white">{row.sharp_waste_white}</td>
                                    <td className="p-3 border bg-blue-50">{row.bottle_waste_blue.toFixed(3)}</td>
                                    <td className="p-3 border bg-white">{row.total_kgs}</td>
                                    <td className="p-3 border bg-white">{row.vehicle_number}</td>
                                </tr>
                            ))}

                            {/* Total Row */}
                            {(() => {
                                const totals = Data.reduce(
                                    (acc, row) => {
                                        acc.clinical += row.clinical_waste_red;
                                        acc.infectious += row.infectious_waste_yellow;
                                        acc.sharp += row.sharp_waste_white;
                                        acc.bottle += row.bottle_waste_blue;
                                        acc.total += row.total_kgs;
                                        return acc;
                                    },
                                    { clinical: 0, infectious: 0, sharp: 0, bottle: 0, total: 0 }
                                );

                                return (
                                    <tr className="font-semibold text-black bg-white">
                                        <td className="p-3 border text-center bg-white">Total</td>
                                        <td className="p-3 border bg-white-100">{totals.clinical.toFixed(3)}</td>
                                        <td className="p-3 border bg-white-100">{totals.infectious.toFixed(3)}</td>
                                        <td className="p-3 border bg-white">{totals.sharp}</td>
                                        <td className="p-3 border bg-white-100">{totals.bottle.toFixed(3)}</td>
                                        <td className="p-3 border bg-white">{totals.total.toFixed(3)}</td>
                                        <td className="p-3 border bg-white text-center"></td>
                                    </tr>
                                );
                            })()}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Medicalwastemanagement;
