import Image from 'next/image'
import React from 'react';
import Doctor1 from "@/assets/ourmanagement/doctor1.png";
import Doctor2 from "@/assets/ourmanagement/doctor2.png";
import Doctor3 from "@/assets/ourmanagement/doctor3.png";
import calenter from "@/assets/ourmanagement/calendar-2.png"
import Link from 'next/link';

const Executiveteam = () => {

    const team = [
        { image: Doctor1, post: "President", name: "Dr. S. Dhanabagyam MD, (Og), ART", specilist: "IVF & ART Specialist" },
        { image: Doctor2, post: "President", name: "Dr. S. Pradeepa DGO, DNB(OG), MNAMS, FICOG", specilist: "IVF & ART Specialist" },
        { image: Doctor3, post: "Managing Director", name: "Dr. K. Sudhakar MD, DNB", specilist: "Cardiologist" },
    ]

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-[100px]'>
                {team.map((value, index) => (
                    <div
                        key={index}
                        className='flex flex-col text-start items-center w-72 bg-white rounded-2xl '
                    >
                        <div className='executeimg relative'>
                            <Image
                                src={value.image}
                                alt="Doctor"
                                width={295}
                                height={200}
                                className="rounded-2xl z-10 object-fill mb-4"
                            />
                            <Link
                                href=""
                                className="absolute bottom-5 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center z-30  group "
                            >
                                <Image
                                    src={calenter}
                                    alt='calenter'
                                />
                            </Link>
                            {/* <Image 
                          src={calenter}
                          alt='Calenter'
                           className="calendar-icon"
                          /> */}
                        </div>
                        <div className='text-start p-5'>
                            <span className="text-[#000000] font-bold text-sm mb-2">{value.post}</span>
                            <h3 className="text-[#2B3990] font-bold text-[16px] mb-2 ">{value.name}</h3>
                            <p className="mb-2">{value.specilist}</p>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Executiveteam