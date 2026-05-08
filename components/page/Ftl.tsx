"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FtlHeader from "@/components/common/Ftl/FtlHeader";
import FtlCapabilities from "@/components/common/Ftl/FtlCapabilities";
import FtlStrength from "@/components/common/Ftl/FtlStrength";
import FtlProcess from "@/components/common/Ftl/FtlProcess";
import FtlService from "@/components/common/Ftl/FtlService";
import FtlTestimonials from "@/components/common/Ftl/FtlTestimonials";
import FtlFaq from "@/components/common/Ftl/FtlFaq";

function Ftl() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FtlHeader />
        <FtlCapabilities />
        <FtlStrength />
        <FtlProcess />
        <FtlService />
        <FtlTestimonials />
        <FtlFaq />
      </main>
      <Footer />
    </div>
  );
}

export default Ftl;
