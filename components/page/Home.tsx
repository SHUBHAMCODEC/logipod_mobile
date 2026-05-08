"use client";

import React from "react";
import HomeNavbar from "@/components/common/home/Navbar";
import Hero from "@/components/common/home/hero/Hero";
import Associates from "@/components/common/home/Associates";
import Choose from "@/components/common/home/Choose";
import Strengths from "@/components/common/home/Strengths";
import CTA from "@/components/common/home/CTA";
import dynamic from "next/dynamic";
import Footer from "@/components/common/Footer";


const Testimonials = dynamic(() => import("@/components/common/home/Testimonials"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-[#0A0A0A] animate-pulse" />
});

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <Associates />
      <Choose />


      <CTA />
      <Strengths />
      <Testimonials />
      <Footer />
    </>
  );
}
