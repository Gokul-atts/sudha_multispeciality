"use client";
import { useState } from "react";
import Image from "next/image";
import { events } from "@/constants/newsEventsapi";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundIMage from "@/assets/newsandevents/events.png";
import { motion } from "framer-motion";
// ✅ dynamic import for slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NewsAndEvents = () => {
  const [selectedNews, setSelectedNews] = useState(1);

  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return <p className="p-10 text-red-500">Event not found</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // show 1 image at a time
    slidesToScroll: 1, // scroll 1 image at a time
  };

  return (
    <div>
      {/* Banner */}
      <section className="relative px-7 hero-section -mt-28 mb-hero-section">
        <div
          className="relative top-6 max-w-full mx-auto px-4 pt-36 pb-24 z-10 text-white bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-400"
          style={{ backgroundImage: `url(${BackgroundIMage.src})` }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div> */}

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
            {/* <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-white"
            >
              A Heartfelt Care For Your Heart Care
            </motion.p> */}
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

      <div className="max-w-7xl mx-auto pt-16 ">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left Featured News */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6">
              {/* ✅ Slick Slider */}
              <Slider {...settings}>
                {event?.detailsimage?.map((item, index) => (
                  <div key={`${item.img}-${index}`}>
                    <Image
                      src={item.img}
                      alt={`event-image-${index}`}
                      width={800}
                      height={400}
                      className="w-full h-72 md:h-96 object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </Slider>

              {/* Event Title & Info */}
              <h2 className="text-[30px]  mt-6">{event?.title}</h2>
              <p className=" mt-2">{event?.date}</p>

              {/* Event Description */}
              <p className="text-gray-700 leading-relaxed mt-6">
                {event?.description}
              </p>
            </div>

            {/* Right Sidebar */}
            <aside className="bg-white rounded-3xl  p-6">
              <h3 className="text-[20px]  border-b pb-3 mb-5">
                Latest News & Events
              </h3>

              <div className="space-y-4">
                {events.map((item) => (
                  <div
                    key={item.slug}
                    onClick={() => setSelectedNews(item.slug)}
                    className={`flex gap-4 cursor-pointer p-3 rounded-lg transition ${selectedNews === item.slug
                        ? "bg-blue-50 border-l-4 border-blue-600"
                        : "hover:bg-gray-50"
                      }`}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={60}
                        className="w-20 h-14 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-20 h-14 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
                        No Image
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="">{item.date}</p>
                      <h4 className="text-[14px] line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NewsAndEvents;
