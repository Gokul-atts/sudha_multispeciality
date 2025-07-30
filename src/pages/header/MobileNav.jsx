"use client";

import { links } from "@/constants/navLinks";
import { cn } from "@/lib/utility";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(null);

  const handleClick = (index, e) => {
    e.preventDefault();
    setOpenedMenu(openedMenu === index ? null : index);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block lg:hidden"
      >
        <Menu className="w-8 h-8" />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "fixed top-0 left-0 z-50 h-full w-full min-h-screen bg-background border-r border-accent px-6 pt-12 flex flex-col overflow-y-auto lg:hidden"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <Link
                href="/"
                className="text-3xl font-bold text-muted hover:text-accent transition"
              >
                Logo
              </Link>
              <button
                className="hover:text-accent transition"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4 pt-6">
              {links.map((link, index) => (
                <div key={link?.label + index}>
                  <Link
                    href={link?.hrefs}
                    className={cn(
                      "text-muted py-2 px-2 flex items-center justify-between rounded-md transition hover:text-accent hover:bg-secondary",
                      pathname === link?.hrefs &&
                        "text-accent bg-secondary font-semibold",
                      openedMenu === index &&
                        "text-accent bg-secondary font-semibold"
                    )}
                  >
                    <button
                      className="flex gap-3 items-center"
                      onClick={(e) => handleClick(index, e)}
                    >
                      {link.label}
                      {link.subLinks && (
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform",
                            openedMenu === index ? "rotate-180" : ""
                          )}
                        />
                      )}
                    </button>
                  </Link>

                  {/* Dropdown for sublinks */}
                  <AnimatePresence>
                    {openedMenu === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-3"
                      >
                        {link.subLinks?.map((subLink, idx) => (
                          <div
                            key={idx}
                            className="mt-2 rounded-md overflow-hidden hover:bg-secondary transition"
                          >
                            {subLink.header && (
                              <Link
                                href={subLink?.hrefs || "#"}
                                className="block px-3 py-2 text-xs font-semibold text-primary hover:text-accent cursor-pointer transition"
                              >
                                {subLink?.header}
                              </Link>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
