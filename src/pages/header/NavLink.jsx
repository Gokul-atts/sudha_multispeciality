"use client";


import { cn } from "@/lib/utility";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ handleMouseEnter, hovering, index, link }) {
  const pathname = usePathname();

  return (
    <div
      className="block group"
      onMouseEnter={() => handleMouseEnter(index)}
    >
      <Link
        href={link.href}
        className={cn(
          "text-muted flex items-center gap-x-0.5 group-hover:text-accent transition-all px-3 py-1 rounded-md hover:bg-secondary",
          pathname === link.href && "text-accent font-semibold bg-secondary",
          hovering === index && "text-accent font-semibold bg-secondary"
        )}
      >
        {link.label}
        {link.subLinks && (
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-all group-hover:text-accent",
              hovering === index && "rotate-180"
            )}
          />
        )}
      </Link>
    </div>
  );
}
