"use client";

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const LiverTransplantDonar = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const donorsPerPage = 10;

  const donorData = {
    2025: {
      totalDonors: 10,
      donors: [
               {
                id: 1,
                rshid: "SH/25/297402",
                recipientdetails: "Mr.Subash chander Abrol",
                ageandsex: "63/M",
                bgroup: "O+",
                relationship: "Cadavar",
                torgan: "LIVER ",
                committeeapprovalno: "TNOS/47588/OR/25011788",
                status: "STABLE",
                dateofsurgery: "14/12/2025",
                dateofdischarge: "21/12/2025",
                donordetails: "Master.S.Paramasivan",
                donorageandsex: "15 Year/M",
                dshid:"10402",
                dbgroup: "O+"
              },
               {
                id: 2,
                rshid: "SH/25/302440",
                recipientdetails: "Mr.Yudhvir Singh",
                ageandsex: "55/M",
                bgroup: "O+",
                relationship: "Cadavar",
                torgan: "LIVER ",
                committeeapprovalno: "TNOS/48426/OR/250111367",
                status: "STABLE",
                dateofsurgery: "24/12/2025",
                dateofdischarge: "31/12/2025",
                donordetails: "Mrs.Baby",
                donorageandsex: "55/F",
                dshid:"10412",
                dbgroup: "O+"
              },
      ],
    },
  
  };

  const getFilteredDonors = () => {
    if (selectedYear === "All") {
      return Object.values(donorData).flatMap((yearData) => yearData.donors);
    }
    return donorData[selectedYear]?.donors || [];
  };

  const filteredDonors = getFilteredDonors();
  const availableYears = Object.keys(donorData);

  // Pagination logic
  const indexOfLastDonor = currentPage * donorsPerPage;
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  const currentDonors = filteredDonors.slice(
    indexOfFirstDonor,
    indexOfLastDonor
  );
  const totalPages = Math.ceil(filteredDonors.length / donorsPerPage);

  const handleViewDonor = (donor) => {
    setSelectedDonor(donor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDonor(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 md:p-0 min-h-screen my-16">
      <div className="rounded-lg overflow-hidden">
        {/* Header */}
        <div className="text-black flex justify-between items-center pb-4">
          <h1 className="text-[24px] font-bold">Donor List</h1>
          <div className="flex gap-4">
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setCurrentPage(1); // reset page when year changes
                }}
                className="appearance-none bg-white text-black px-3 md:px-4 py-2 pr-8 rounded-md  "
              >
                <option value="All">All</option>
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto overflow-y-auto w-full scrollbar-hide">
          <table className="min-w-[1200px] w-full table-auto">
            <thead className="bg-[#2B3990]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  S.no
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  R/SHID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Recipient Details
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Age/Sex
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  B-Group
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Relationship
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  T/Organ
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Committee/Approval no
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Date of Surgery
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Date of Discharge
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Patient Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-100">
              {currentDonors.map((donor, index) => (
                <tr
                  key={`${donor.rshid}-${index}`}
                  className="hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="px-4 py-3 text-sm text-black-900">
                    {String(indexOfFirstDonor + index + 1).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-900 font-medium">
                    {donor.rshid}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-900 font-medium">
                    {donor.recipientdetails}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.ageandsex}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.bgroup}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.relationship}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600 font-medium">
                    {donor.torgan}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.committeeapprovalno}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.dateofsurgery}
                  </td>
                  <td className="px-4 py-3 text-sm text-black-600">
                    {donor.dateofdischarge}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 rounded-full text-sm font-medium">
                      {donor.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      onClick={() => handleViewDonor(donor)}
                      className="text-blue-900 hover:text-blue-900 underline gap-1 text-xs font-medium whitespace-nowrap"
                    >
                      View Donor
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === i + 1
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900 border-blue-900"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedDonor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-2 sm:mx-4">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                View Donor
              </h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  Donor ID
                </div>
                <div className="text-sm text-gray-500">
                  {selectedDonor.dshid}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  Donor Name
                </div>
                <div className="text-sm text-gray-500">
                  {selectedDonor.donordetails}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  Donor Age / Sex
                </div>
                <div className="text-sm text-gray-500">{selectedDonor.donorageandsex}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">
                  Donor Blood Group
                </div>
                <div className="text-sm text-gray-500">
                  {selectedDonor.dbgroup}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiverTransplantDonar;
