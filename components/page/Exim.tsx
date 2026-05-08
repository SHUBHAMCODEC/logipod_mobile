"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import EximHeader from "@/components/common/Exim/EximHeader";
import EximCapabilities from "@/components/common/Exim/EximCapabilities";
import EximStrength from "@/components/common/Exim/EximStrength";
import EximProcess from "@/components/common/Exim/EximProcess";
import EximService from "../common/Exim/EximService";

import EximTestimonials from "@/components/common/Exim/EximTestimonials";
import EximFaq from "@/components/common/Exim/EximFaq";

function Exim() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <EximHeader />
        <EximCapabilities />
        <EximStrength />

        <EximProcess />
        <EximService />
        <EximTestimonials />
        <EximFaq />
      </main>
      <Footer />
    </div>
  );
}

export default Exim;