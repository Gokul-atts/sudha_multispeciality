"use client";
import { useState } from "react";
import Image from "next/image";
import BackgroundIMage from "@/assets/newsandevents/events.png";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { events } from "@/constants/newsEventsapi";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "News and Events", href: "/news-and-events" },
];

const NewsAndEvents = () => {
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 6; // cards per page

  // ✅ filter events
  const filteredNews = events.filter(
    (n) =>
      (year ? n.year === year : true) &&
      (category ? n.category === category : true)
  );

  // ✅ pagination logic
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
          style={{ backgroundImage: `url(${BackgroundIMage.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm mb-4"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] mb-3"
            >
              News and Events
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-white"
            >
             Milestones in Medicine and Beyond
            </motion.p>
          </div>

          {/* Side Info Box */}
          <div className="absolute bottom-0 right-0 z-30 hidden md:block">
            <div className="w-[220px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="h-[30%] bg-transparent" />
              <div className="bg-white p-5">
                <h3 className="text-[36px] font-extrabold text-[#2B3990]">
                  40+
                </h3>
                <p className="text-[16px] text-black font-bold">
                  Years of Trusted <br />
                  Expertise in <br />
                  Healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto pt-16">
        <div className="bg-white z-20 w-full md:w-[70%] lg:w-[50%] absolute p-8 rounded-3xl -mt-28 ">
          <h5 className="mb-4 text-[20px] ">
            Explore news, workshops & events at Sudha Multispecialty Hospital
          </h5>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Year Filter */}
            <select
              className="border px-4 py-2 rounded-md w-full"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Select Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>

            {/* Category Filter */}
            <select
              className="border px-4 py-2 rounded-md w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Workshop">Workshop</option>
              <option value="Celebration">Celebration</option>
              <option value="Awareness">Awareness</option>
            </select>
          </div>
        </div>
      </div>

      {/* News Cards */}
      <div className="max-w-7xl mx-auto mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Card Image */}
              <Image
                src={item.viewimage}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />

              {/* Card Body */}
              <div className="mt-4 flex flex-col flex-grow">
                <p className=" mb-3">{item.date}</p>
                <h3 className="text-[18px] mb-6 line-clamp-2">
                  {item.title}
                </h3>

                {/* Spacer pushes button to bottom */}
                <div className="flex-grow" />

                {/* CTA Button */}
                <Link href={`/events/${item.slug}`} className="w-full">
                  <button className="btn-diagonal w-full justify-center text-center py-2 rounded-lg">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-2">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            {"<"}
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-4 py-2 rounded-full ${page === p
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsAndEvents;
