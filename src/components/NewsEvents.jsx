"use client";

import { events } from "@/constants/newsEventsapi";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { useState } from "react";
export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState("Workshop");




  return (
    <section className="w-full py-16 px-4 md:px-10 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center bg-blue px-6 py-2 rounded-full text-md font-bold flex items-center gap-2">
          News & Events
        </span>
        <h2 className="text-center text-[30px] mt-4">
          Find All the Latest <br/> News and Event Updates
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left - Upcoming Events */}
          <div className="bg-gradient-to-b from-[#2B3990] to-black text-white rounded-3xl p-6 md:p-8">
            <h2 className="text-white text-[24px] mb-4">Upcoming Events</h2>

            {/* Tabs */}
            <div className="flex space-x-3 mb-6">
              <button
                onClick={() => setActiveTab("Workshop")}
                className={`px-6 py-2 rounded-full text-[14px] font-semibold ${activeTab === "Workshop"
                  ? "bg-white text-primary-blue"
                  : "bg-[#766493]"
                  }`}
              >
                Work Shop
              </button>
              <button
                onClick={() => setActiveTab("Camp")}
                className={`px-6 py-2 rounded-full text-[14px] font-semibold ${activeTab === "Camp"
                  ? "bg-white text-primary-blue"
                  : "bg-[#766493]"
                  }`}
              >
                Camp
              </button>
            </div>

            {/* Events List with Scroll */}
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 rounded-xl">
              {events
                .filter((e) => e.type === activeTab)
                .slice(0, 10) // limit backend render, optional
                .map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-[#2B3990] rounded-xl p-4 bg-opacity-20 bg-white/10"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-center bg-white px-8 py-3 rounded-2xl">
                        <h6 className="text-[30px]">{event.date}</h6>
                        <p>{event.month}</p>
                      </div>
                      <div>
                        <h4 className="text-white text-[20px]">{event.title}</h4>
                        <Link
                          href={`/events/${event.slug}`}
                          className="text-white text-sm hover:underline flex gap-2 mt-4"
                        >
                          View details <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>



          {/* Right - News */}
          <div className="space-y-5">
            {events.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                {item.viewimage && (
                  <Image
                    src={item.viewimage}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-60 h-30 object-cover rounded-2xl"
                  />
                )}
                <div>
                  <h4 className="text-[18px]">{item.title}</h4>
                  <p>{item.viewDate}</p>
                </div>
              </div>
            ))}

            <Link href="/news-and-events"
             className="btn-diagonal ">
              View All <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
