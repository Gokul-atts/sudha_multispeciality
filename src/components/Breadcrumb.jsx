import React from "react";
import { ChevronRight } from "lucide-react"; // Optional icon
import Link from "next/link";

const Breadcrumb = ({ items }) => {
  return (
    <div
      className="w-full overflow-x-auto whitespace-nowrap"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center text-sm text-gray-600 space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center shrink-0">
            {index !== 0 && (
              <ChevronRight className="w-4 h-4 text-white mx-1 ml-0" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:underline text-white text-[14px] font-medium truncate max-w-[120px] md:max-w-none"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white text-[14px] truncate max-w-[120px] md:max-w-none">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;
