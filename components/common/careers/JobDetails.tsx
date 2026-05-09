"use client";

import React from "react";
import { MapPin, Clock, Briefcase, Calendar, ChevronLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

interface JobDetailsProps {
  job: {
    title: string;
    location: string;
    type: string;
    experience: string;
    about: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
  };
}

const JobDetails = ({ job }: JobDetailsProps) => {
  return (
    <div className="space-y-12">
      {/* Back Link */}
      <Link 
        href="/careers" 
        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F26341] transition-colors font-medium group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to All Jobs
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#272D6D] mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-6 text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#F26341]" />
              {job.location}
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#F26341]" />
              {job.experience}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#F26341]" />
              {job.type}
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* About the Role */}
      <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-[#272D6D] mb-4">About the role</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {job.about}
        </p>
      </section>

      {/* Grid for Responsibilities and Requirements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#272D6D] mb-6">Responsibilities</h2>
          <ul className="space-y-4">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F26341] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#272D6D] mb-6">Requirements</h2>
          <ul className="space-y-4">
            {job.requirements.map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#272D6D] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Benefits */}
      <section className="bg-[#272D6D] p-8 md:p-12 rounded-3xl text-white overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8">Perks & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {job.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 items-start bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-[#F26341]">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26341] blur-[100px] opacity-20 -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F26341] blur-[100px] opacity-10 -ml-32 -mb-32" />
      </section>

      {/* Company Culture */}
      <section className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-[#272D6D] mb-4">Company Culture</h2>
          <p className="text-gray-600 leading-relaxed">
            At Logipod, we are building more than just a logistics platform; we are building a community of innovators. Our culture is rooted in transparency, high performance, and collective growth. We believe in giving our team members the autonomy to make a real impact on how India moves goods.
          </p>
        </div>
      </section>
    </div>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default JobDetails;
