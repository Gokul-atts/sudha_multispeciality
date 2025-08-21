"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import one from "../assets/about/1.svg";
import Image from "next/image";



export default function Accordion({accordionData}) {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="mb-4  rounded-2xl overflow-hidden  bg-white"
          >
            {/* Header */}
            <button
              className="w-full flex justify-between items-center px-4 py-4 text-left border-b  transition"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-[16px] text-primary-blue font-bold">
                {item.title}
              </span>
              <div className="w-5 h-5 text-[#2b3990]">
                {isOpen ? (
               
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
             
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </div>
            </button>

            {/* Content with fade & smooth height */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="px-4 pb-5 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.content}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
