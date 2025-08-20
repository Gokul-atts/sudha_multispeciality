'use client';

import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const DonorDataTable = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const donorData = {
    2025: {
      totalDonors: 10,
      donors: [
        { id: 1, shid: 'SH/25/275667', name: 'MRS. Tamilarasi', age: '30M/F', bGroup: 'A-', relationship: 'Cadaver', organ: 'KIDNEY', committee: '	TNOS 27562', status: 'STABLE', dateOfSurgery: '4-01-2025	', dateOfDischarge: '	9-1-2025' },
        { id: 2, shid: 'SH/25/200002', name: 'MRS. Chandran', age: '62/M', bGroup: 'B+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 39853', status: 'STABLE', dateOfSurgery: '11-01-2025', dateOfDischarge: '17-01-2025' },
        { id: 3, shid: 'SH/25/200003', name: 'MR. Pari', age: '32/M', bGroup: 'O-', relationship: 'Mother', organ: 'KIDNEY', committee: '2/1/2025//21550/E8/2024', status: 'STABLE', dateOfSurgery: '9-01-2025', dateOfDischarge: '14-01-2025' },
        { id: 4, shid: 'SH/25/200004', name: 'MRS. Vijayalakshmi', age: '43/F', bGroup: 'B+', relationship: 'Mother', organ: 'KIDNEY', committee: '2/1/2025//21549/E8/2024', status: 'STABLE', dateOfSurgery: '21-01-2025	', dateOfDischarge: '26-01-2025' },
        { id: 5, shid: 'SH/25/200005', name: 'MR. Mohankumar', age: '23/F', bGroup: 'B-', relationship: 'Mother', organ: 'KIDNEY', committee: '23/1/2025//854/E8/2025', status: 'STABLE', dateOfSurgery: '29-01-2025	', dateOfDischarge: '2-2-2025' },
        { id: 6, shid: 'SH/25/200006', name: 'MR. Thirumoorthy', age: '31/F', bGroup: 'O+', relationship: 'Mother', organ: 'KIDNEY', committee: '23/1/2025//853/E8/2025', status: 'STABLE', dateOfSurgery: '1-02-2025	', dateOfDischarge: '14-01-2025' },
        { id: 7, shid: 'SH/25/200007', name: 'MR. Prabu', age: '27/M', bGroup: 'A1B+', relationship: 'Father', organ: 'KIDNEY', committee: '23/1/2023//848/E82025', status: 'STABLE', dateOfSurgery: '3-03-2025', dateOfDischarge: '09-03-2025' },
        { id: 8, shid: 'SH/25/200008', name: 'MRS. Valarmathi', age: '45/F', bGroup: 'O+', relationship: 'Mother', organ: 'KIDNEY', committee: '	13/2/2025//2323/E8/2025', status: 'STABLE', dateOfSurgery: '10-03-2025', dateOfDischarge: '15-03-2025' },
        { id: 9, shid: 'SH/25/200009', name: 'MR. Dhanasekaran', age: '53/M', bGroup: 'O+', relationship: 'Mother', organ: 'KIDNEY', committee: '13/2/2025//2330/E8/2025', status: 'STABLE', dateOfSurgery: '20-03-2025', dateOfDischarge: '26-03-2025' },
        { id: 10, shid: 'SH/25/200010', name: 'MR. Thirumoorthy', age: '42/M', bGroup: 'B+', relationship: 'Wife', organ: 'KIDNEY', committee: '27/3/2025//4831/E8/2025', status: 'STABLE', dateOfSurgery: '10-04-2025', dateOfDischarge: '15-04-2025' },
        { id: 11, shid: 'SH/24/190001', name: 'MR. Arumugam', age: '55/M', bGroup: 'B+', relationship: 'Wife', organ: 'KIDNEY', committee: '8/5/2025//6845/E8/2025', status: 'STABLE', dateOfSurgery: '22-05-2025', dateOfDischarge: '27-05-2025' },
        { id: 12, shid: 'SH/24/190002', name: 'MR. Baskaran', age: '32/M', bGroup: 'B+', relationship: 'Father', organ: 'KIDNEY', committee: '8/5/2025//6846/E8/2025', status: 'STABLE', dateOfSurgery: '23-05-2025', dateOfDischarge: '29-05-2025' },
        { id: 13, shid: 'SH/24/190003', name: 'MRS. Chitra', age: '46/M', bGroup: 'O+', relationship: 'Mother', organ: 'KIDNEY', committee: '15/5/2025//7584/E8/2025', status: 'STABLE', dateOfSurgery: '31-05-2025', dateOfDischarge: '06-06-2025' },
        { id: 14, shid: 'SH/24/190004', name: 'MRS. Saranya', age: '33/F', bGroup: 'A+', relationship: 'Brother', organ: 'KIDNEY', committee: '5/6/2025//9070E8/2025', status: 'STABLE', dateOfSurgery: '	9-06-2025', dateOfDischarge: '17-06-2025' },
        { id: 15, shid: 'SH/24/190005', name: 'MR. Chandrasekaran', age: '56/M', bGroup: 'B+', relationship: 'Swap', organ: 'KIDNEY', committee: '	12/16/2025//9514/E8/2025', status: 'STABLE', dateOfSurgery: '13-07-2025', dateOfDischarge: 'On Treatment' },
        { id: 16, shid: 'SH/24/190001', name: 'MRS. Jagathambal', age: '44/F', bGroup: 'A+', relationship: 'Swap', organ: 'KIDNEY', committee: '	12/6/2025//9514/E8/2025', status: 'STABLE', dateOfSurgery: '13-07-2025', dateOfDischarge: 'On Treatment' },

      ]
    },
    2024: {
      totalDonors: 5,
      donors: [
        { id: 1, shid: 'SH/22/201667', name: 'MR. GowriSankar', age: '31/M', bGroup: 'B+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 37657	', status: 'STABLE', dateOfSurgery: '	02-02-2024', dateOfDischarge: '	02-10-2024' },
        { id: 2, shid: 'SH/23/242679', name: 'MS. Keerthana', age: '22/F', bGroup: 'O+', relationship: 'Father', organ: 'KIDNEY', committee: '29/2/2024//2856/E6(1)/2024', status: 'STABLE', dateOfSurgery: '23-03-2024', dateOfDischarge: '27-03-2024	' },
        { id: 3, shid: 'SH/23/242945', name: 'MR. BalaMurugan', age: '22/M', bGroup: 'B+', relationship: 'Father', organ: 'KIDNEY', committee: '29/2/2024//2857/E6(1)2024', status: 'STABLE', dateOfSurgery: '04-01-2024	', dateOfDischarge: '04-08-2024' },
        { id: 4, shid: 'SH/23/238252', name: 'MR. Raja', age: '47/F', bGroup: 'O+', relationship: 'Sister', organ: 'KIDNEY', committee: '25/4/2024//6249/E6(1)2024', status: 'STABLE', dateOfSurgery: '	05-04-2024', dateOfDischarge: '05-10-2024' },
        { id: 5, shid: 'SH/23/228726', name: 'MR. Srinivasan', age: '53/M', bGroup: 'O+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 37644', status: 'STABLE', dateOfSurgery: '05-02-2024', dateOfDischarge: '05-09-2024' },
        { id: 6, shid: 'SH/23/238530	', name: 'MR. Prithviraj', age: '30/M', bGroup: 'O+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 39098', status: 'STABLE', dateOfSurgery: '05-06-2024', dateOfDischarge: '15-05-2024' },
        { id: 7, shid: 'SH/22/215851', name: 'MR. Dhatchinamoorthi', age: '52/F', bGroup: 'A+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 29286', status: 'STABLE', dateOfSurgery: '23-05-2024', dateOfDischarge: '06-01-2024' },
        { id: 8, shid: 'SH/24/252737', name: 'MR. Harsha', age: '29/M', bGroup: 'B+', relationship: 'Mother', organ: 'KIDNEY', committee: '	20/6/2024//9649/E3/2024', status: 'STABLE', dateOfSurgery: '22-07-2024', dateOfDischarge: '29-07-2024' },
        { id: 9, shid: 'SH/24/257196', name: 'MR. MohanaSundaram', age: '45/M', bGroup: 'B+', relationship: 'Mother', organ: 'KIDNEY', committee: '20/6/2024//9649/E3/2024', status: 'STABLE', dateOfSurgery: '22-07-2024', dateOfDischarge: '29-07-2024' },
        { id: 10, shid: 'SH/263256', name: 'MR. KannanMayavan', age: '34/M', bGroup: 'AB+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 24497', status: 'STABLE', dateOfSurgery: '7-08-2024', dateOfDischarge: '18-08-2024' },
        { id: 11, shid: 'SH/17/014477', name: 'MR. Chandrasekaran', age: '63/M', bGroup: 'A+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 37956', status: 'STABLE', dateOfSurgery: '8-08-2024', dateOfDischarge: '15-08-2024' },
        { id: 12, shid: 'SH/24/258682', name: 'MS. LavanyaPalanivel', age: '25/F', bGroup: 'O+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 42259', status: 'STABLE', dateOfSurgery: '23-08-2024', dateOfDischarge: '1-09-2024' },
        { id: 13, shid: 'SH/22/208187', name: 'MR. Karthi', age: '25/M', bGroup: 'A+', relationship: 'Mother', organ: 'KIDNEY', committee: '27/6/2024//9996/E3(1)2024', status: 'STABLE', dateOfSurgery: '8-09-2024', dateOfDischarge: '14-09-2024' },
        { id: 14, shid: 'SH/24/252487', name: 'MRS. Jhothika', age: '22/F', bGroup: 'O+', relationship: 'Mother', organ: 'KIDNEY', committee: '	25/4/2024//6200/E6(1)2024', status: 'STABLE', dateOfSurgery: '22-09-2024', dateOfDischarge: '30-09-2024' },
        { id: 15, shid: 'SH/24/256759', name: 'MR. Stalin', age: '28/M', bGroup: 'B+', relationship: 'Mother', organ: 'KIDNEY', committee: '12/9/2024//14514/E8/2024', status: 'STABLE', dateOfSurgery: '23-09-2024', dateOfDischarge: '1-10-2024' },
        { id: 16, shid: 'SH/24/258131', name: 'MR. Krishnan', age: '', bGroup: 'A+', relationship: 'Brother', organ: 'KIDNEY', committee: '26/9/2024//15222/E8/2024', status: 'STABLE', dateOfSurgery: '15-10-2024', dateOfDischarge: '21-10-2024' },
        { id: 17, shid: 'SH/24/260154', name: 'MS. Sivasankari', age: '39/F', bGroup: 'O+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 29859', status: 'STABLE', dateOfSurgery: '10-11-2024', dateOfDischarge: '20-11-2024' },
        { id: 18, shid: 'SH/23/232667', name: 'MRS. Kowsalya', age: '28/M', bGroup: 'B+', relationship: 'Cadaver', organ: 'KIDNEY', committee: 'TNOS 38209', status: 'STABLE', dateOfSurgery: '	28-11-2024', dateOfDischarge: '4-12-2024' },
        { id: 19, shid: 'SH/24/265977', name: 'MR. Manikandan', age: '39/M', bGroup: 'A+', relationship: 'Father-in-Law', organ: 'KIDNEY', committee: '14/11/2024//18588/E8/2024', status: 'STABLE', dateOfSurgery: '	9-12-2024', dateOfDischarge: '4-12-2024' },
      ]
    },
    2023: {
      totalDonors: 8,
      donors: [
        { id: 1, shid: 'SH/23/220888', name: 'MR Mathiyalagan', age: '31/M', bGroup: 'O+', relationship: 'Father', organ: 'KIDNEY', committee: '16/12/2022/110130H&DII/4/2022', status: 'STABLE', dateOfSurgery: '	01-11-2023', dateOfDischarge: '17-01-2023' },
        { id: 2, shid: 'SH/22/216444', name: 'MR. SathisKumar', age: '30/F', bGroup: 'O+', relationship: 'Mother', organ: 'KIDNEY', committee: '5/1/2023//142/E6/2023', status: 'STABLE', dateOfSurgery: '	01-11-2023', dateOfDischarge: '17-01-2023' },
        { id: 3, shid: 'SH/19/118089', name: 'MR. Ravichandran', age: '58/M', bGroup: 'A+', relationship: 'Mother', organ: 'KIDNEY', committee: '9/2/2023//1397/E6/2023', status: 'STABLE', dateOfSurgery: '15-04-2023', dateOfDischarge: '26-04-2023' },
        { id: 4, shid: 'SH/23/220645', name: 'MR. Thangarasu', age: '49/M', bGroup: 'B+', relationship: 'Mother', organ: 'KIDNEY', committee: '23/2/2023//1396/E6/2023', status: 'STABLE', dateOfSurgery: '15-04-2023', dateOfDischarge: '26-04-2023' },
        { id: 5, shid: 'SH/22/218644', name: 'MRS. Jayalakshmi', age: '35/F', bGroup: 'O+', relationship: 'Father', organ: 'KIDNEY', committee: '4/5/2023//6028/E6/2023', status: 'STABLE', dateOfSurgery: '07-10-2023', dateOfDischarge: '19-07-2023' },
        { id: 6, shid: 'SH/23/234239', name: 'SELVI. Dhanushree', age: '15/F', bGroup: 'A+', relationship: 'Swap', organ: 'KIDNEY', committee: '24/8/2023//12069/E6/2023', status: 'STABLE', dateOfSurgery: '09-08-2023', dateOfDischarge: '19-09-2023' },
        { id: 7, shid: 'SH/22/199960', name: 'MR. Govindasamy', age: '56/F', bGroup: 'B+', relationship: 'Swap', organ: 'KIDNEY', committee: '24/8/2023//12069/E6/2023', status: 'STABLE', dateOfSurgery: '09-08-2023', dateOfDischarge: '19-09-023' },
        { id: 8, shid: 'SH/23/233153', name: 'MR. Anbukumar', age: '45/M', bGroup: 'B+', relationship: 'Mother', organ: 'KIDNEY', committee: '27/7/2023//10687/E6/2023', status: 'STABLE', dateOfSurgery: '19-10-2023', dateOfDischarge: '30-10-2023' }
      ]
    },
    2022: {
      totalDonors: 2,
      donors: [
        { id: 1, shid: 'SH/22/206656', name: 'MR Siva', age: '29/M', bGroup: 'O+', relationship: 'Mother', organ: 'KIDNEY', committee: '21/4/2022//5141/E6/2022	', status: 'STABLE', dateOfSurgery: '	13-05-2022', dateOfDischarge: '24-05-2022' },
        { id: 2, shid: 'SH/22/199367', name: 'MR. KrishnaMoorthy', age: '52/M', bGroup: 'B+', relationship: 'Sister', organ: 'KIDNEY', committee: '28/4/2022//4576/E6/2022', status: 'STABLE', dateOfSurgery: '18-06-2022', dateOfDischarge: '28-06-2022' },
      ]
    }
  };

  const getFilteredDonors = () => {
    if (selectedYear === 'All') {
      return Object.values(donorData).flatMap((yearData) => yearData.donors);
    }

    return donorData[selectedYear]?.donors || [];
  };

  const filteredDonors = getFilteredDonors();
  const availableYears = Object.keys(donorData);

  const handleViewDonor = (donor) => {
    setSelectedDonor(donor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDonor(null);
  };



  return (
    <div className="p-4 md:p-8 lg:p-12 min-h-screen pt-4">
      <div className=" rounded-lg  overflow-hidden">
        {/* Header */}
        <div className=" text-black p-4">
          <div className="flex justify-between items-center pb-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Donor List</h1>
            <div className="flex gap-4">
              {/* Year Dropdown */}
              <div className="relative ">
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                  }}
                   className="appearance-none bg-white text-black px-3 md:px-4 py-2 pr-8 rounded-md border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
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
        </div>

        {/* Table */}
        <div className="overflow-x-auto w-full scrollbar-hide">
          <table className="min-w-[1200px] w-full table-auto">
            <thead className="bg-blue-900 ">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">S.no</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">R/SHID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Recipient Details</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Age/Sex</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">B-Group</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Relationship</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">T/Organ</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Committee/Approval no</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Date of Surgery</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Date of Discharge</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Patient Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-200">
              {filteredDonors.map((donor, index) => (
                <tr key={`${donor.shid}-${index}`} className="hover:bg-blue-50 transition-colors duration-150">
                  <td className="px-4 py-3 text-sm text-black-900">{String(index + 1).padStart(2, '0')}</td>
                  <td className="px-4 py-3 text-sm text-black-900 font-medium">{donor.shid}</td>
                  <td className="px-4 py-3 text-sm text-black-900 font-medium">{donor.name}</td>
                  <td className="px-4 py-3 text-sm text-black-600">{donor.age}</td>
                  <td className="px-4 py-3 text-sm text-black-600">{donor.bGroup}</td>
                  <td className="px-4 py-3 text-sm text-black-600">{donor.relationship}</td>
                  <td className="px-4 py-3 text-sm text-black-600 font-medium">{donor.organ}</td>
                  <td className="px-4 py-3 text-sm text-black-600">{donor.committee}</td>
                  <td className="px-4 py-3 text-sm text-black-600">{donor.dateOfSurgery}</td>
                  <td className="px-4 py-3 text-sm text-black-600">{donor.dateOfDischarge}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 rounded-full text-sm font-medium">{donor.status}</span>
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
      </div>

      {/* Modal */}
      {isModalOpen && selectedDonor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-2 sm:mx-4">

            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">View Donor</h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Modal Content - 2 column layout */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">Donor ID</div>
                <div className="text-sm text-gray-500">{selectedDonor.shid}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">Donor Name</div>
                <div className="text-sm text-gray-500">{selectedDonor.name}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">Donor Age / Sex</div>
                <div className="text-sm text-gray-500">{selectedDonor.age}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">Donor Blood Group</div>
                <div className="text-sm text-gray-500">{selectedDonor.bGroup}</div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DonorDataTable;