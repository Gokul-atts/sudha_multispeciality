import Image from 'next/image'
import React from 'react';
import Doctor1 from "@/assets/ourmanagement/president.webp";
import Doctor2 from "@/assets/ourmanagement/vice-president.webp";
import Doctor3 from "@/assets/ourmanagement/doctor3.webp";

const Executiveteam = () => {
  const team = [
    { image: Doctor3, post: "Managing Director", name: "Dr. K. Sudhakar MD, DNB", specilist: "Cardiologist" },
    { image: Doctor1, post: "President", name: "Dr. S. Dhanabagyam MD, (O&G), ART", specilist: "IVF & ART Specialist" },
    { image: Doctor2, post: "Vice President", name: "Dr. S. Pradeepa DGO, DNB(OG), MNAMS, FICOG", specilist: "IVF & ART Specialist" },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((value, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-3xl "
          >
            <div className="relative">
              <Image
                src={value.image}
                alt={value.name}
                className="w-full h-auto object-cover rounded-t-3xl"
              />
            </div>
            <div className="p-5 text-start">
              <span className="text-[#000000] font-bold text-sm">{value.post}</span>
              <h3 className="text-[#2B3990] font-bold text-[16px] mt-2 mb-2">
                {value.name}
              </h3>
              <p className="mb-2">{value.specilist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executiveteam;
