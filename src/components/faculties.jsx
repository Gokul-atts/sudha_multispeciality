import Image from 'next/image'
import React from 'react';
import Doctor from "@/assets/aboutus/kandhasami.webp";
import Doctor1 from "@/assets/ourmanagement/president.webp";
import Doctor2 from "@/assets/ourmanagement/vice-president.webp";
import Doctor4 from "@/assets/fellownationalboard/sangeeth.jpg";
import Doctor5 from "@/assets/fellownationalboard/amutha.jpg";
import Ramya from "@/assets/fellownationalboard/user-dummy.avif";
import Link from 'next/link';

const Faculties = () => {

    const team = [
        { image: Doctor, post: "Head of Institution, Chairman", name: "Dr. D. Kandasamy", specilist: "MD, DTCD Preventive Cardiologist" },
        { image: Doctor1, post: "Head of the Department", name: "Dr. S. Dhanabagyam MD, (OG), ART", specilist: "IVF & ART Specialist" },
        { image: Doctor2, post: "Senior Faculty", name: "Dr. S. Pradeepa DGO, DNB(OG), MNAMS, FICOG", specilist: "IVF & ART Specialist" },
        { image: Ramya, post: "Faculty ", name: "Dr. Ramya Selvaraj", specilist: "Anaesthesia/Intensive Care" },
        { image: Doctor4, post: "Faculty", name: "Dr. K.Sangeeth", specilist: "Microbiologist & Embryologist" },
        { image: Doctor5, post: "Faculty", name: "Dr. V. Amutha", specilist: "Anaesthesia/Intensive Care" },
    ]

    return (
        <div className="grid grid-cols-12 gap-8 ">
            {team.map((value, index) => {
                const isLast = index === team.length - 2; // last item
                return (
                    <div
                        key={index}
                        className={`flex flex-col text-start items-center bg-white rounded-3xl
                    col-span-12 
                    ${isLast ? 'md:col-span-3 md:col-start-4' : 'md:col-span-3'} 
                `}
                    >
                        <div className="executeimg relative w-full">
                            <Image
                                src={value.image}
                                alt="Doctor"
                                width={295}
                                height={200}
                                className="rounded-t-2xl z-10 object-cover w-full h-[300px]"
                            />
                        </div>
                        <div className="text-start p-4 w-full">
                            <span className="text-[#000000] font-bold text-[14px] ">{value.post}</span>
                            <h3 className="text-[#2B3990]  text-[16px] mt-2 mb-2">{value.name}</h3>
                            <p className="mb-2 text-[14px]">{value.specilist}</p>
                        </div>
                    </div>
                );
            })}
        </div>




    )
}

export default Faculties;