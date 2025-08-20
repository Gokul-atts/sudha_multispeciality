import React from "react";

const ethicsCommitteeMembers = [
  { sNo: "01", name: "Mr. P Shanmugan", qualification: "BSc (Bachelor of Law)", role: "Chair Person" },
  { sNo: "02", name: "Dr. D Kandaswami", qualification: "MBBS (MD in General Medicine, DTCD)", role: "Member Secretary" },
  { sNo: "03", name: "Dr. K Sangeeth", qualification: "MBBS (MD in Microbiology)", role: "Medical Scientist" },
  { sNo: "04", name: "Mr. S Arunkumar", qualification: "LLB (Bachelor of Law)", role: "Legal Expert" },
  { sNo: "05", name: "Dr. M Vidhya Charanyan", qualification: "MBBS (MS, FMAS)", role: "Clinician" },
  { sNo: "06", name: "Dr. S Sathishkumar", qualification: "MBBS (MD in General Medicine)", role: "Clinician" },
  { sNo: "07", name: "Ms. I Sujatha", qualification: "B. COM (MBA)", role: "Member" },
  { sNo: "08", name: "Mr. C. V. Raman", qualification: "DHM", role: "Lay Person" },
  { sNo: "09", name: "Mrs. T. Prathibha", qualification: "MS, M. Phil", role: "Social Scientist" },
];

const EthicsCommitteeTable = ({ data = ethicsCommitteeMembers, title }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 overflow-x-auto">
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="px-5 py-2 text-left">S.no</th>
              <th className="px-7 py-2 text-left">Name of Member</th>
              <th className="px-7 py-2 text-left">Qualification</th>
              <th className="px-7 py-2 text-left">
                Role/Designation in Ethics Committee
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((member, index) => (
              <tr
                key={index}
                className="border-b bg-white border-gray-300 hover:bg-gray-100"
              >
                <td className="px-5 py-2 text-left">{member.sNo}</td>
                <td className="px-7 py-2 text-left">{member.name}</td>
                <td className="px-7 py-2 text-left">{member.qualification}</td>
                <td className="px-7 py-2 text-left">{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EthicsCommitteeTable;
