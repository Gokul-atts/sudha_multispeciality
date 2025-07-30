"use client";

import { cn } from "@/lib/utility";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ handleMouseEnter, hovering, index, link }) {
  const pathname = usePathname();

  // ✅ Defensive check: if link is missing or invalid, don't render
  if (!link || typeof link !== "object" || !link.hrefs || !link.label) return null;

  const isActive = pathname === link.hrefs;
  const isHovering = hovering === index;

  return (
    <div className="block group" onMouseEnter={() => handleMouseEnter(index)}>
      <Link
        href={link.hrefs}
        className={cn(
          "text-muted flex items-center gap-x-0.5 group-hover:text-accent transition-all px-3 py-1 rounded-md hover:bg-secondary",
          isActive && "text-accent font-semibold bg-secondary",
          isHovering && "text-accent font-semibold bg-secondary"
        )}
      >
        {link.label}
        {Array.isArray(link.subLinks) && link.subLinks.length > 0 && (
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-all group-hover:text-accent",
              isHovering && "rotate-180"
            )}
          />
        )}
      </Link>
    </div>
  );
}
