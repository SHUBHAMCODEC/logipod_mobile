"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();
  const navRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/#",
      items: [
        { name: "Full Truck Load", href: "/ftl" },
        { name: "Freight Forwarding", href: "/Exim" },
      ],
    },
    {
      label: "Solutions",
      href: "/solutions",
      items: [
        { name: "Warehousing", href: "/#", comingSoon: true },
        { name: "Yard Management", href: "/#", comingSoon: true },
      ],
    },
    {
      label: "About Us",
      href: "/company/about",
      items: [
        { name: "Our Company", href: "/company/about" },
        { name: "Our Team", href: "/our-team" },
      ],
    },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement actual search routing logic here
      // e.g., router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
        ? "bg-white/95 backdrop-blur-md md:backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3 border-b border-gray-100"
        : "bg-white py-5"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Left: Company Logo */}
        <Link href="/" className="flex-shrink-0 group flex items-center">
          <div className="relative overflow-hidden">
            <Image
              src="/images/home/Logipod Logo.svg"
              alt="Logipod Logo"
              width={145}
              height={48}
              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href) && link.href !== "/";
            const isOpen = openDropdown === link.label;

            return (
              <div key={link.label} className="relative px-2 xl:px-3 py-2">
                <button
                  onClick={() => {
                    if (link.items) {
                      setOpenDropdown(isOpen ? null : link.label);
                    }
                  }}
                  className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-300 ${isActive || isOpen ? "text-[#F26341]" : "text-[#272D6D] hover:text-[#F26341]"}`}
                >
                  {link.items ? (
                    <>
                      {link.label}
                      <ChevronDown className={`w-4 h-4 opacity-70 transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`} />
                    </>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}

                  {/* Active indicator line */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#F26341] transition-all duration-300 ${isActive || isOpen ? "w-1/2 opacity-100" : "w-0 opacity-0"}`} />
                </button>

                {/* Dropdown Menu — click-controlled */}
                {link.items && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] z-50 ${
                    isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"
                  }`}>
                    <div className="w-[240px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(39,45,109,0.08)] border border-gray-100 overflow-hidden flex flex-col p-2.5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[#272D6D] before:to-[#F26341]">
                      {link.items.map((item: any) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="relative px-4 py-3.5 text-[14px] font-semibold text-[#272D6D] rounded-xl transition-all duration-300 flex items-center justify-between group/item overflow-hidden hover:bg-gray-50"
                        >
                          <span className="relative z-10 transition-transform duration-300 group-hover/item:translate-x-1 flex items-center gap-2">
                            {item.name}
                            {item.comingSoon && (
                              <span className="px-2 py-0.5 text-[9px] uppercase font-black tracking-wider bg-[#F26341]/10 text-[#F26341] rounded-full">
                                Coming Soon
                              </span>
                            )}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 relative z-10">
                            <ArrowRight className="w-3.5 h-3.5 text-[#F26341]" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Section: Search & Utilities */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 flex-shrink-0">
          {/* Professional Static Search Bar */}
          <form
            onSubmit={handleSearch}
            className={`relative flex items-center h-[46px] w-[220px] transition-all duration-300 rounded-full overflow-hidden ${isSearchFocused || searchQuery
              ? "bg-white shadow-[0_0_0_2px_rgba(242,99,65,0.2)] border-transparent"
              : "bg-gray-50/80 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
              }`}
          >
            <button
              type="submit"
              className={`absolute left-4 w-5 h-5 flex items-center justify-center transition-colors duration-300 ${isSearchFocused || searchQuery ? "text-[#F26341]" : "text-gray-400"}`}
            >
              <Search className="w-4 h-4" />
            </button>
            <input
              type="text"
              placeholder="Search Logipod..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full h-full pl-11 pr-4 bg-transparent outline-none text-[14px] font-medium text-[#272D6D] placeholder:text-gray-400 placeholder:font-normal"
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300 hover:text-gray-700 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </form>

          {/* Action Button */}
          <Link
            href="/contact"
            className="group relative h-[46px] px-7 rounded-full bg-[#272D6D] text-white flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[0_8px_25px_rgba(39,45,109,0.25)] hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 w-full h-full bg-[#F26341] origin-bottom-left -skew-x-[30deg] scale-x-0 group-hover:scale-x-150 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="relative text-[14.5px] font-bold tracking-wide z-10">Get a Quote</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#272D6D] hover:bg-gray-100 transition-colors"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setSearchQuery(""); // Clear search when toggling menu
          }}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[76px] bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-[76px] left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top overflow-y-auto max-h-[calc(100vh-76px)] ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          <form
            onSubmit={handleSearch}
            className="relative flex items-center h-12 border border-gray-200 rounded-xl bg-gray-50 focus-within:bg-white focus-within:border-[#F26341] focus-within:ring-2 focus-within:ring-[#F26341]/20 transition-all duration-300"
          >
            <button type="submit" className="absolute left-4 w-5 h-5 flex items-center justify-center">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
            <input
              type="text"
              placeholder="Search Logipod..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full pl-12 pr-11 bg-transparent outline-none text-[15px] font-medium text-[#272D6D]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          {/* Mobile Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col border-b border-gray-100 last:border-none py-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className={`text-[17px] font-bold py-2 transition-colors ${pathname.startsWith(link.href) && link.href !== "/" ? "text-[#F26341]" : "text-[#272D6D]"
                      }`}
                  >
                    {link.label}
                  </Link>
                </div>

                {link.items && (
                  <div className="pl-4 mt-2 mb-2 flex flex-col gap-3 border-l-2 border-gray-100/50">
                    {link.items.map((item: any) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-[15px] font-semibold text-gray-500 hover:text-[#F26341] transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span>{item.name}</span>
                          {item.comingSoon && (
                            <span className="px-2 py-0.5 text-[9px] uppercase font-black tracking-wider bg-[#F26341]/10 text-[#F26341] rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-6 border-t border-gray-100">
            <Link
              href="/contact"
              className="w-full h-12 rounded-xl bg-[#272D6D] text-white flex items-center justify-center text-[16px] font-bold transition-colors hover:bg-[#F26341]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
