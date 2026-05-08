"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, X } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import teamData from "@/data/teamdetails.json";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  img: string;
  level: number;
  Information?: string;
  "LinkedIn URL"?: string;
  "X url"?: string;
  "Instagram url"?: string;
}

const TeamDetails = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  // Deep Analysis Optimal Solution: Auto-scroll to top of section on selection
  // This ensures the user doesn't have to scroll back up to see the bio
  React.useEffect(() => {
    if (selectedMember && sectionRef.current) {
      const offset = 80; // Buffer for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = sectionRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, [selectedMember]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 overflow-hidden min-h-screen"
    >
      {/* Decorative Black Pillar on Left (Only shown when bio is open) */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute left-0 top-0 bottom-0 w-2 bg-black z-20"
          />
        )}
      </AnimatePresence>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Header Section — Always Full Width */}
        <div className="mb-16 border-b border-gray-100 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#252B61] text-xs font-black uppercase tracking-widest mb-4 block">
                Our team
              </span>
              <h2 className="text-5xl lg:text-6xl font-black text-[#252B61] leading-[1.1] mb-6">
                Leadership team
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                We're a cross-disciplinary team that loves to create great experiences for our customers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/company/about"
                className="px-8 py-3.5 rounded-xl border border-gray-200 font-bold text-[#252B61] hover:bg-gray-50 transition-all text-center"
              >
                About us
              </Link>
              <Link 
                href="/careers"
                className="px-8 py-3.5 rounded-xl bg-[#F36440] text-white font-bold hover:bg-[#d95636] transition-all shadow-lg shadow-[#F36440]/20 text-center"
              >
                Open positions
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

          {/* Calm Bio Side Panel */}
          <AnimatePresence>
            {selectedMember && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: 1,
                  width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? "38%" : "100%"
                }}
                exit={{ opacity: 0, width: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                }}
                className="w-full lg:sticky lg:top-32 z-30"
              >
                <div className="bg-[#F8F9FF] rounded-[40px] p-8 md:p-10 relative border border-gray-100 shadow-sm">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#F36440] transition-all z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                      <Image
                        src={selectedMember.img}
                        alt={selectedMember.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#252B61] tracking-tight">
                        {selectedMember.name}
                      </h3>
                      <p className="text-[#F36440] font-black text-sm uppercase tracking-widest mt-1">
                        {selectedMember.designation}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed italic text-base md:text-lg">
                    "{selectedMember.Information || "Transforming logistics through technology-driven leadership and innovative solutions for a global supply chain."}"
                  </p>

                  <div className="absolute -bottom-10 -right-10 text-[#252B61]/[0.03] pointer-events-none">
                    <Globe className="w-48 h-48" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Team Grid */}
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 25,
            }}
            className="flex-1 w-full"
          >
            <div className={`grid gap-8 transition-all duration-700 ease-out
              ${selectedMember ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}
            `}>
              {teamData.map((member: any) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    if (selectedMember?.id === member.id) {
                      setSelectedMember(null);
                    } else {
                      setSelectedMember(member);
                    }
                  }}
                  className={`group relative h-[450px] md:h-[550px] rounded-[40px] overflow-hidden cursor-pointer transition-all duration-500
                    ${selectedMember?.id === member.id ? 'ring-[6px] ring-[#F36440] scale-[0.98]' : 'hover:ring-[6px] hover:ring-gray-100'}
                  `}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-[1s] ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[32px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-500 group-hover:bg-white/20 group-hover:-translate-y-2">
                    <div className="flex justify-between items-center mb-4 text-white">
                      <div>
                        <h4 className="text-xl font-black mb-0.5 leading-tight">
                          {member.name}
                        </h4>
                        <p className="text-[#F36440] font-bold text-[10px] uppercase tracking-widest">
                          {member.designation}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-lg border border-white/30 group-hover:bg-[#F36440] group-hover:border-[#F36440] transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex gap-4 items-center text-white/90">
                      <a
                        href={member["LinkedIn URL"] || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md hover:text-[#F36440] hover:bg-white/10 transition-all"
                      >
                        <LinkedinIcon />
                      </a>
                      <div className="p-1 rounded-md hover:text-[#F36440] hover:bg-white/10 transition-all cursor-pointer">
                        <a
                          href={member["X url"] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <XIcon />
                        </a>
                      </div>
                      <div className="p-1 rounded-md hover:text-[#F36440] hover:bg-white/10 transition-all cursor-pointer">
                        <a
                          href={member["Instagram url"] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <InstagramIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TeamDetails;
