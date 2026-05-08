import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import AboutHero from "@/components/common/OurCompany/AboutHero";
import AboutMissionVision from "@/components/common/OurCompany/AboutMissionVision";
import AboutValues from "@/components/common/OurCompany/AboutValues";
import AboutClients from "@/components/common/OurCompany/AboutClients";
import AboutTeam from "@/components/common/OurCompany/AboutTeam";
import AboutInsider from "@/components/common/OurCompany/AboutInsider";
import AboutCulture from "@/components/common/OurCompany/AboutCulture";
import AboutCTA from "@/components/common/OurCompany/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Logipod — Powering India's Logistics Future",
  description:
    "Logipod started in 2018 with a mission to revolutionize India's supply chain. Meet our team, learn our mission and vision, and discover how we're building the logistics platform India deserves.",
  openGraph: {
    title: "About Us | Logipod",
    description:
      "Powering global freight operations with a team of 50+ professionals across 20+ countries.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero — company intro, stats, image collage */}
        <AboutHero />

        {/* 2. Mission & Vision — two-column dark/light cards */}
        <AboutMissionVision />

        {/* 3. Our Values — 6-card grid + diversity stats */}
        <AboutValues />

        {/* 4. Our Clients — logo grid */}
        <AboutClients />

        {/* 5. Meet Our Team — avatar card grid */}
        <AboutTeam />

        {/* 6. Logipod Insider — team voice/quote cards */}
        <AboutInsider />

        {/* 7. Culture & Celebrations — vibrant photo grid */}
        <AboutCulture />

        {/* 8. CTA — dark banner with contact + quote CTA */}
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
