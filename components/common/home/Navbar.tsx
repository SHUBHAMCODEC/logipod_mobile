"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Globe, User, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [currentLang, setCurrentLang] = useState("EN");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const languages = [
    { code: "EN", name: "English" },
    { code: "FR", name: "Français" },
    { code: "DE", name: "Deutsch" },
    { code: "ES", name: "Español" },
  ];

  const navLinks = [
    {
      label: "Services",
      href: "/#",
      items: [
        { name: "Full Truck Load", href: "/ftl" },
        { name: "Freight Forwarding", href: "/Exim" }
      ]
    },
    {
      label: "Solutions",
      href: "/#",
      items: [
        { name: "Warehousing", href: "/warehousing" },
        { name: "Yard Management", href: "/yard-management" }
      ]
    },
    {
      label: "About Us",
      href: "/#",
      items: [
        { name: "Our Company", href: "/company/about" },
        { name: "Our Team", href: "/our-team" }
      ]
    },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Split links for desktop center-logo layout
  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  const NavLinkComponent = ({ link, isMobile = false }: { link: any, isMobile?: boolean }) => {
    const hasItems = link.items && link.items.length > 0;
    const isOpen = openDropdown === link.label;

    return (
      <div
        className="relative"
        onMouseEnter={() => !isMobile && hasItems && setOpenDropdown(link.label)}
        onMouseLeave={() => !isMobile && setOpenDropdown(null)}
      >
        <Link
          href={link.href}
          className={`flex items-center gap-1 cursor-pointer py-4 group transition-all ${isMobile ? "text-2xl font-bold text-white" : "text-[15px] font-bold tracking-wide text-[#272D6D]"
            }`}
        >
          <span className="transition-colors duration-300 group-hover:text-[#F36440]">{link.label}</span>
          {link.label === "Solutions" && (
            <span className="px-1.5 py-0.5 text-[8px] font-black uppercase tracking-tighter bg-[#F36440] text-white rounded-[4px] leading-none">
              Soon
            </span>
          )}
          {hasItems && (
            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMobile ? "text-white/40" : "text-[#272D6D]/40"
              } ${isOpen ? 'rotate-180' : ''}`} />
          )}
        </Link>

        {/* Dropdown Menu - Desktop Only */}
        {!isMobile && hasItems && isOpen && (
          <div className="absolute top-[90%] left-0 w-56 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-[110] animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="p-2 flex flex-col gap-1">
              {link.items.map((item: any) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-[13px] font-bold tracking-wider text-[#272D6D] hover:bg-[#F36440] hover:text-white rounded-lg transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <nav className="fixed top-[10px] md:top-[25px] left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between px-4 md:px-10 py-3 md:py-4 bg-[#FAFAFA]/95 backdrop-blur-md border border-gray-200/50 rounded-[32px] w-[96%] max-w-[1500px] shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)]">

        {/* Left Section: Nav Links (Desktop Only) */}
        <div className="hidden xl:flex items-center gap-[90px] xl:gap-12 xl:ml-15">
          {leftLinks.map((link) => (

            <NavLinkComponent key={link.label} link={link} />
          ))}
        </div>

        {/* Center Section: Logo (Desktop: Center, Mobile: Left) */}
        <div className="flex xl:absolute xl:left-1/2 xl:-translate-x-1/2 items-center justify-center shrink-0">
          <Link href="/" className="flex items-center group cursor-pointer">
            <Image
              src="/images/home/Logipod Logo.svg"
              alt="Logipod Logo"
              width={130}
              height={44}
              className="object-contain transition-all duration-300 w-[110px] md:w-[130px]"
            />
          </Link>
        </div>

        {/* Right Section: Nav Links + Utilities (Desktop Only) */}
        <div className="flex items-center gap-3 md:gap-6 flex-1 justify-end xl:ml-auto">
          <div className="hidden xl:flex items-center gap-8 xl:gap-12 mr-6">
            {rightLinks.map((link) => (
              <NavLinkComponent key={link.label} link={link} />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* Search Input - Increased contrast with border */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  console.log("Searching for:", searchQuery);
                  setSearchQuery("");
                }
              }}
              className="flex items-center gap-3 bg-white hover:bg-gray-50 transition-all duration-300 group focus-within:ring-2 focus-within:ring-[#F36440]/20 focus-within:border-[#F36440] w-[160px] xl:w-[200px] h-[44px] rounded-xl border-2 border-gray-300/80 px-4"
            >
              <button type="submit" className="hover:scale-110 transition-transform active:scale-95">
                <Search className="w-4 h-4 text-[#272D6D] shrink-0" strokeWidth={3} />
              </button>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-[13px] text-[#272D6D] placeholder:text-[#272D6D]/40 w-full font-black"
              />
            </form>

            {/* Localization */}
            <div
              className="relative"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <div className="flex items-center gap-2 cursor-pointer group h-[49px]">
                <Globe className="w-5 h-5 text-[#272D6D]/70 group-hover:text-[#F36440] transition-colors" strokeWidth={2} />
                <div className="flex items-center gap-1">
                  <span className="text-[12px] font-black tracking-widest text-[#272D6D]">{currentLang}</span>
                  <ChevronDown className={`w-3 h-3 text-[#272D6D]/40 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {isLangOpen && (
                <div className="absolute top-[90%] right-[-10px] w-40 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-[110] animate-in fade-in slide-in-from-top-2 duration-300">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className={`px-4 py-3 text-[12px] font-bold tracking-wider hover:bg-gray-50 transition-colors cursor-pointer ${currentLang === lang.code ? 'text-[#F36440]' : 'text-[#272D6D]'}`}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangOpen(false);
                      }}
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-[#272D6D] hover:text-white transition-all cursor-pointer group shrink-0">
              <User className="w-5 h-5 text-[#272D6D] group-hover:text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#272D6D] hover:bg-[#F36440] hover:text-white transition-all cursor-pointer"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[120]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-[#0A0A0A] z-[130] p-8 flex flex-col shadow-2xl border-l border-white/10"
            >
              <div className="flex items-center justify-between mb-12">
                <Image
                  src="/images/home/Logipod Logo.svg"
                  alt="Logipod Logo"
                  width={110}
                  height={36}
                  className="object-contain brightness-0 invert"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto pr-4 custom-scrollbar">
                {navLinks.map((link) => {
                  const hasItems = link.items && link.items.length > 0;
                  const isSubMenuOpen = openDropdown === link.label;

                  return (
                    <div key={link.label} className="flex flex-col border-b border-white/5 last:border-none">
                      <div
                        className="flex items-center justify-between py-4 cursor-pointer group"
                        onClick={() => {
                          if (hasItems) {
                            setOpenDropdown(isSubMenuOpen ? null : link.label);
                          } else {
                            setIsMenuOpen(false);
                            window.location.href = link.href;
                          }
                        }}
                      >
                        <span className={`text-2xl font-bold transition-colors ${isSubMenuOpen ? 'text-[#F36440]' : 'text-white hover:text-[#F36440]'}`}>
                          {link.label}
                          {link.label === "Solutions" && (
                            <span className="ml-3 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest bg-[#F36440] text-white rounded-md align-middle inline-block">
                              Coming Soon
                            </span>
                          )}
                        </span>
                        {hasItems && (
                          <motion.div
                            animate={{ rotate: isSubMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className={`w-6 h-6 ${isSubMenuOpen ? 'text-[#F36440]' : 'text-white/40'}`} />
                          </motion.div>
                        )}
                      </div>

                      <AnimatePresence>
                        {hasItems && isSubMenuOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-5 pl-5 pb-6 pt-2 border-l-2 border-[#F36440]/30 ml-1">
                              {link.items.map((item: any) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-white/60 text-lg font-semibold hover:text-white flex items-center justify-between group/item"
                                >
                                  {item.name}
                                  <ArrowRight className="w-5 h-5 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all text-[#F36440]" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-6">
                <div className="flex items-center justify-around text-white/60">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span className="text-xs font-bold">{currentLang}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-xs font-bold">Profile</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-4 bg-[#F36440] text-white font-black text-center rounded-xl tracking-widest uppercase text-sm shadow-xl shadow-[#F36440]/20 active:scale-95 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
