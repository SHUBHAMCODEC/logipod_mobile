"use client";

import React from "react";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";
import teamData from "@/data/teamdetails.json";

const LinkedInSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function AboutTeam() {
  return (
    <section className="w-full bg-[#F8F9FF] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#252B61] leading-tight">
            The Minds Behind Logipod
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-lg mx-auto leading-relaxed">
            The team behind this incredible company who work relentlessly, with persistence and passion — building the logistics platform India deserves.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="flex flex-col gap-16 mt-8">
          {teamData.slice(0, 2).map((member: any, i: number) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image Card */}
                <div className="w-full md:w-1/2 lg:w-1/3 relative h-[400px] rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex-shrink-0">
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252B61] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>
                  
                  {/* LinkedIn Button */}
                  <div className="absolute top-5 right-5 z-20">
                    {member["LinkedIn URL"] ? (
                      <Link 
                        href={member["LinkedIn URL"]}
                        target="_blank"
                        className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#0A66C2] hover:scale-110 active:scale-95"
                      >
                        <LinkedInSVG />
                      </Link>
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <LinkedInSVG />
                      </div>
                    )}
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <motion.div
                      initial={false}
                      className="flex flex-col gap-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <span 
                        className="text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-md bg-[#F36440] text-white w-fit mb-2 shadow-lg"
                      >
                        {member.level === 1 ? "Leadership" : member.level === 2 ? "Operations" : "Team"}
                      </span>
                      <h3 className="text-2xl font-black text-white leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {member.designation}
                      </p>
                    </motion.div>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F36440]/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#252B61] mb-2">{member.name}</h3>
                  <p className="text-[#F36440] font-semibold text-lg mb-6">{member.designation}</p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {member.Information}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View full team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="/our-team"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#252B61] text-[#252B61] font-bold text-sm hover:bg-[#252B61] hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            Get to know more team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
