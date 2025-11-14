"use client";

import { links } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import ThemeSwitch from "../ThemeSwitch";
import MenuImage from "./MenuImage";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import SubLink from "./SubLink";
import Call from "../../assets/home/call.svg";
import TeleCall from "../../assets/home/tele-call.svg";
import { cn } from "@/lib/utility";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import homeLogo from "../../assets/home/logo.svg"; // For home page before scroll
import darkLogo from "../../assets/home/logo.svg"; // For home page after scroll
import whiteLogo from "../../assets/home/whiteLogo.svg";
import SpecialSubLink from "./Specialites";
import Academics from "./Academics";
import HeaderOne from "@/assets/header_one.svg";
import HeaderTwo from "@/assets/header_two.svg";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [hovering, setHovering] = useState(null);
  const subRef = useRef(null);
  const [hoveredSubLinkImage, setHoveredSubLinkImage] = useState(null);

  const whiteTextRoutes = [
    "/cardiology",
    "/find-a-doctor",
    "/about",
    "/awards-and-honors",
    "/nursing-services",
    "/our-growth-story",
    "/doctor-detail",
    "/why-sudha",
    "/anaesthesiology",
    "/mother-and-child-care",
  ];
  const isWhitePage = whiteTextRoutes.some((route) =>
    pathname.startsWith(route)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleMouseEnter(index) {
    if (links[index].subLinks) {
      setHovering(index);
    } else {
      setHovering(null);
    }
  }

  let currentLogo = homeLogo;

  if (isScrolled) {
    currentLogo = darkLogo;
  } else {
    currentLogo = pathname === "/" ? whiteLogo : whiteLogo;
  }

  console.log("links", links);

  return (
    <>
      <div className="hidden md:block text-sm text-black py-4 max-w-7xl mx-auto">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-y-2">
          {/* Left - Welcome Text */}
          <p className="text-center md:text-left ">UpComing Events</p>

          {/* Right - Contact Numbers */}
          <div className="flex gap-4 items-center text-sm">
            <div className="flex items-center gap-2">
              <Image src={TeleCall} alt="Phone" className="w-8 h-8" />
              <Link
                href="tel:+914242454545"
                className="text-[#2B3990] font-semibold text-sm"
              >
                0424-245-4545
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Call} alt="WhatsApp" className="w-8 h-8" />
              <Link
                href="tel:+9042065454"
                className="text-[#2B3990] font-semibold text-sm"
              >
                +91-90-4206-5454
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section
        className={cn(
          "sticky top-0 z-50 mb-pl transition-all supports-[backdrop-filter]:bg-background-transparent",
          isScrolled
            ? "w-full bg-white text-black" // ✅ no mb-top when scrolled
            : isWhitePage
            ? "max-w-7xl mx-auto bg-transparent text-white lg:text-white mb-top" // ✅ mb-top only when not scrolled
            : "max-w-7xl mx-auto bg-transparent text-white mb-top" // ✅ mb-top only when not scrolled
        )}
      >
        <header
          className={cn(
            "sticky top-0 z-50 py-3  max-w-7xl mx-auto text-sm transition-all supports-[backdrop-filter]:bg-background-transparent",
            isScrolled
              ? "w-full bg-white text-black"
              : isWhitePage
              ? "max-w-7xl mx-auto bg-transparent text-white lg:text-white"
              : "max-w-7xl mx-auto bg-transparent text-white"
          )}
        >
          <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto px-4">
            {/* Logo (desktop + mobile) */}
            <Link
              href="/"
              className="flex items-center gap-x-3 font-bold text-muted hover:text-accent text-2xl sm:text-3xl transition"
            >
              <Image
                src={currentLogo}
                alt="Logo"
                className="h-10 w-24 md:w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-x-10">
              <nav
                className="flex items-center"
                onMouseLeave={() => {
                  if (!subRef.current) setHovering(null);
                }}
              >
                {links
                  ?.filter((link) => link?.hrefs && link?.label)
                  .map((link, index) => (
                    <NavLink
                      key={index}
                      handleMouseEnter={handleMouseEnter}
                      hovering={hovering}
                      index={index}
                      link={link}
                    />
                  ))}

                {/* Mega Menu */}
                <div
                  ref={subRef}
                  className={cn(
                    "absolute top-20 left-0 w-full px-4 sm:px-0 py-6 bg-white text-black transition-all ease-in-out",
                    hovering || hovering === 0
                      ? "opacity-100 border-t shadow-[0_4px_15px_rgba(0,0,0,0.08)] border-accent"
                      : "opacity-0 border-none pointer-events-none"
                  )}
                  onMouseLeave={() => setHovering(null)}
                >
                  <AnimatePresence>
                    {hovering !== null && links[hovering]?.subLinks && (
                      <motion.div
                        key="mega-menu"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* About Us */}
                        {links[hovering]?.type === "aboutus" && (
                          <div className="flex flex-col lg:flex-row gap-6 max-w-[1560px] px-6 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
                              {links[hovering].subLinks.map(
                                (subLink, index) => (
                                  <SubLink
                                    key={index}
                                    index={index}
                                    subLink={subLink}
                                    setHoveredSubLinkImage={
                                      setHoveredSubLinkImage
                                    }
                                    onCloseDropdown={() => setHovering(null)}
                                  />
                                )
                              )}
                            </div>
                            <div className="hidden lg:block w-[300px] shrink-0 rounded-2xl overflow-hidden">
                              <MenuImage
                                image={
                                  hoveredSubLinkImage ??
                                  links[hovering].imagestatic
                                }
                                width={300}
                                height={200}
                              />
                            </div>
                          </div>
                        )}

                        {/* Specialties */}
                        {links[hovering]?.type === "specialites" && (
                          <div className="max-w-[1560px] mx-auto px-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                              {links[hovering].subLinks.map(
                                (subLink, index) => (
                                  <SpecialSubLink
                                    key={index}
                                    index={index}
                                    subLink={subLink}
                                    setHoveredSubLinkImage={
                                      setHoveredSubLinkImage
                                    }
                                    onCloseDropdown={() => setHovering(null)}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* Facilities */}
                        {links[hovering]?.type === "facilities" && (
                          <div className="flex flex-col lg:flex-row gap-6 max-w-[1560px] px-6 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
                              {links[hovering].subLinks.map(
                                (subLink, index) => (
                                  <SubLink
                                    key={index}
                                    index={index}
                                    subLink={subLink}
                                    setHoveredSubLinkImage={
                                      setHoveredSubLinkImage
                                    }
                                    onCloseDropdown={() => setHovering(null)}
                                  />
                                )
                              )}
                            </div>
                            <div className="hidden lg:block w-[300px] shrink-0 rounded-2xl overflow-hidden">
                              <MenuImage
                                image={
                                  hoveredSubLinkImage ??
                                  links[hovering].imagestatic
                                }
                                width={300}
                                height={200}
                              />
                            </div>
                          </div>
                        )}

                        {/* Academics */}
                        {links[hovering]?.type === "academics" && (
                          <div className="flex flex-col lg:flex-row gap-6 max-w-[1560px] px-6 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
                              {links[hovering].subLinks.map(
                                (subLink, index) => (
                                  <Academics
                                    key={index}
                                    index={index}
                                    subLink={subLink}
                                    setHoveredSubLinkImage={
                                      setHoveredSubLinkImage
                                    }
                                    onCloseDropdown={() => setHovering(null)}
                                  />
                                )
                              )}
                            </div>
                            <div className="hidden lg:block w-[300px] shrink-0 rounded-2xl overflow-hidden">
                              <MenuImage
                                image={
                                  hoveredSubLinkImage ??
                                  links[hovering].imagestatic
                                }
                                width={300}
                                height={200}
                              />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
            </div>

            {/* CTA + MobileNav */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact-us"
                className="small-hidden display-block  btn-white items-center gap-x-2 rounded-full"
              >
                Consult Our Specialists
              </Link>

              {/* Mobile CTA */}
              <Link
                href="/contact-us"
                className="desktop-hidden text-sm small-block bg-white px-4 py-1 text-black text-nowrap items-center gap-x-2 rounded-full"
              >
                Contact Us
              </Link>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <MobileNav links={links} />
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}
