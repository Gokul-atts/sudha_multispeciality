import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SpecialSubLink({ subLink, setHoveredSubLinkImage }={}) {
   if (!subLink) return null;
  return (
    <Link href={subLink?.hrefs}>
      <div
        className="hover:border-b-2 hover:rounded-t-md  hover:border-[#2B3990] bg-white hover:bg-[#EEF8FF] text-black hover:text-[#2B3990] p-4 flex items-center gap-2 "
        //   onMouseEnter={() => {
        //     if (subLink.image) setHoveredSubLinkImage(subLink.image);
        //   }}
        //   onMouseLeave={() => setHoveredSubLinkImage(null)}
      >
        {subLink?.image && (
          <div>
            <Image
              src={subLink?.image}
              alt={subLink?.header}
              className="rounded-md w-9 h-9 object-contain"
            />
          </div>
        )}
        <h3 className="text-[14px] font-bold ">{subLink?.header}</h3>

        {/* {subLink.subMenu?.map((item, idx) => (
        <p key={idx} className="text-sm text-muted">
          {item.dec}
        </p>
      ))} */}

        {/* If image needed inside also */}
      </div>
    </Link>
  );
}
