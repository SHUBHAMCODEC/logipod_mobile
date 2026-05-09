"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Clock, Briefcase, ChevronRight, Filter } from "lucide-react";
import Link from "next/link";
import jobsData from "@/data/jobs.json";

const Middle = () => {
  const jobs = Array.isArray(jobsData) ? jobsData : [];
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sales", "Marketing", "Engineering", "Operations", "Design"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || 
                            (activeCategory === "Sales" && job.title.includes("Sales")) ||
                            (activeCategory === "Marketing" && job.title.includes("Marketing")) ||
                            (activeCategory === "Engineering" && job.title.includes("Developer")) ||
                            (activeCategory === "Operations" && job.title.includes("Operations")) ||
                            (activeCategory === "Design" && job.title.includes("Designer"));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="open-positions" className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-[#272D6D] mb-4">Open Opportunities</h2>
          <p className="text-gray-600 text-lg">
            Find your place in the future of logistics. Explore our current openings and join a team that values innovation and impact.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-4 mb-12">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by role or keyword..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-none bg-gray-50 focus:ring-2 focus:ring-[#F26341]/20 transition-all outline-none text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-[#272D6D] text-white shadow-lg shadow-[#272D6D]/20"
                    : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
            {jobs.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#272D6D]">Currently No Jobs are open</h3>
                <p className="text-gray-500">Check back later or follow us on LinkedIn for updates on new openings.</p>
              </motion.div>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#F26341]/30 hover:shadow-xl hover:shadow-[#272D6D]/5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-[#F26341]/5 text-[#F26341] group-hover:bg-[#F26341] group-hover:text-white transition-colors duration-300">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#272D6D] mb-3 group-hover:text-[#F26341] transition-colors duration-300">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#F26341]" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[#F26341]" />
                      {job.experience}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#F26341]" />
                      {job.type}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                    {job.description}
                  </p>

                  <Link 
                    href={`/careers/${job.slug}`}
                    className="w-full py-3 rounded-xl border border-gray-100 group-hover:border-[#F26341] group-hover:bg-[#F26341] group-hover:text-white text-[#272D6D] font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    Apply Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#272D6D]">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Middle;
