import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Academics({ subLink, index, setHoveredSubLinkImage }) {

  
    if (!subLink) return null;
  return (
    <React.Fragment key={index}>
      {subLink?.header && (
        <div
          onMouseEnter={() => {
            if (subLink.hoverImage) {
              setHoveredSubLinkImage(subLink.hoverImage || subLink?.image);
            }
          }}
          onMouseLeave={() => {
            setHoveredSubLinkImage(null);
          }}
        >
         
          {subLink.hrefs ? (
            <Link href={subLink?.hrefs}>
              <div className="bg-white hover:bg-[#EEF8FF] transition duration-200 rounded-md p-3">
                <div className="text-[#2B3990] font-bold pb-1">
                  {subLink?.header}
                </div>

                {subLink.subMenu?.length > 0 && (
                  <div className="space-y-1">
                    {subLink?.subMenu.map((menuItem, idx) => (
                      <p key={idx} className=" text-sm text-[#5E566A]">
                        {menuItem?.dec}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ) : (
            <div className="bg-white hover:bg-[#EEF8FF] transition duration-200 rounded-md p-3">
              <div className="text-[#2B3990] font-bold pb-1">
                {subLink?.header}
              </div>

              {subLink?.subMenu?.length > 0 && (
                <div className="space-y-1">
                  {subLink?.subMenu.map((menuItem, idx) => (
                    <p key={idx} className=" text-sm text-[#5E566A]">
                      {menuItem?.dec}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ✅ Conditionally render subImages if available */}
      {subLink.subImages?.length > 0 && (
        <div className="grid gap-4 mt-4">
          {subLink.subImages.map((subImage, idx) => (
            <div
              key={idx}
              className="relative w-[100px] h-[60px] rounded-lg overflow-hidden"
            >
              <Image
                src={subLink?.image}
                alt={subLink?.image}
                fill
                className="object-cover object-center group-hover:scale-105 group-hover:opacity-90 transition duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
