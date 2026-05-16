"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
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
}

const TeamDetails = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const bioRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (selectedMember && bioRef.current) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bioRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, [selectedMember]);

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden min-h-screen">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
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

        {/* Bio Panel — Full Width, Above Grid */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              ref={bioRef}
              key={selectedMember.id}
              initial={{ opacity: 0, scale: 0.97, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -12 }}
              transition={{ type: "spring", stiffness: 260, damping: 32, mass: 0.8 }}
              className="w-full mb-8"
            >
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden flex flex-row">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#F36440] hover:bg-gray-200 transition-all z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Photo — side by side even on mobile */}
                <div className="relative w-[110px] sm:w-[200px] md:w-[260px] flex-shrink-0 min-h-[180px] sm:min-h-[220px]">
                  <Image
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    fill
                    sizes="(max-width: 640px) 110px, (max-width: 768px) 200px, 260px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-7 md:p-10 flex flex-col justify-center pr-10 sm:pr-14">
                  <h3 className="text-base sm:text-2xl md:text-3xl font-black text-[#252B61] tracking-tight mb-0.5 sm:mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-[#F36440] font-black text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
                    {selectedMember.designation}
                  </p>
                  <p className="text-gray-500 leading-relaxed italic text-xs sm:text-sm md:text-base mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                    {selectedMember.Information || "Transforming logistics through technology-driven leadership and innovative solutions for a global supply chain."}
                  </p>

                  {selectedMember["LinkedIn URL"] && (
                    <a
                      href={selectedMember["LinkedIn URL"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 self-start px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-gray-200 text-[#252B61] text-xs sm:text-sm font-bold hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-blue-50 transition-all"
                    >
                      <LinkedinIcon />
                      <span className="hidden sm:inline">Linkedin Profile</span>
                      <span className="sm:hidden">LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Team Grid — always 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {teamData.map((member: any) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => {
                if (selectedMember?.id === member.id) {
                  setSelectedMember(null);
                } else {
                  setSelectedMember(member);
                }
              }}
              className={`group relative h-[240px] sm:h-[380px] md:h-[480px] lg:h-[520px] rounded-[24px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden cursor-pointer transition-all duration-300
                ${selectedMember?.id === member.id
                  ? 'ring-[4px] ring-[#F36440] scale-[0.97]'
                  : 'active:scale-[0.97] hover:ring-[4px] hover:ring-gray-200'}
              `}
            >
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Lighter overlay on mobile so faces are clearer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-60 sm:opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

              <div className="absolute bottom-2 sm:bottom-5 lg:bottom-6 left-2 sm:left-4 lg:left-6 right-2 sm:right-4 lg:right-6 p-3 sm:p-4 lg:p-5 rounded-[18px] sm:rounded-[24px] lg:rounded-[28px] bg-white/10 backdrop-blur-sm sm:backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 group-hover:bg-white/20">
                <div className="flex justify-between items-start gap-1 text-white">
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-lg font-black mb-0.5 leading-tight truncate">
                      {member.name}
                    </h4>
                    <p className="text-[#F36440] font-bold text-[9px] sm:text-[10px] uppercase tracking-wider">
                      {member.designation}
                    </p>
                  </div>
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-lg border border-white/30 group-hover:bg-[#F36440] group-hover:border-[#F36440] transition-all flex-shrink-0 mt-0.5">
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>

                <div className="hidden sm:flex items-center text-white/90 mt-2.5">
                  <a
                    href={member["LinkedIn URL"] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 py-1 px-2 -ml-1 rounded-md hover:text-[#F36440] hover:bg-white/10 transition-all text-xs font-bold tracking-widest"
                  >
                    <LinkedinIcon />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamDetails;
