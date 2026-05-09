"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  CornerDownRight,
  ShieldCheck,
  FileText,
  Lock
} from "lucide-react";

const FooterLink = ({ href, children, isSubLevel = false }: { href: string, children: React.ReactNode, isSubLevel?: boolean }) => (
  <Link href={href} className="group flex items-center gap-2 text-[#4A4F73] hover:text-[#F26341] transition-colors duration-300 w-fit">
    {isSubLevel ? (
      <CornerDownRight size={14} className="text-[#F26341]/50 group-hover:text-[#F26341] group-hover:translate-x-1 transition-transform duration-300" />
    ) : (
      <ChevronRight size={14} className="text-[#F26341]/50 group-hover:text-[#F26341] group-hover:translate-x-1 transition-transform duration-300" />
    )}
    <span className="text-sm font-semibold">{children}</span>
  </Link>
);

const SocialIcon = ({ children, href }: { children: React.ReactNode, href: string }) => (
  <Link
    href={href}
    className="w-10 h-10 rounded-full bg-[#272D6D]/5 flex items-center justify-center text-[#272D6D] hover:bg-[#F26341] hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(242,99,65,0.2)] transition-all duration-300"
  >
    {children}
  </Link>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#FAF7F2] text-[#272D6D] pt-24 pb-8 overflow-hidden border-t border-gray-200">

      {/* Ambient Background Glows - Adjusted for light mode */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F26341]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#272D6D]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/home/Logipod Logo.svg"
                alt="Logipod Logo"
                width={160}
                height={54}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-[#4A4F73] text-sm leading-relaxed max-w-sm font-medium">
              Powering global supply chains with intelligent, scalable, and fully visible logistics solutions. We bridge the gap between complex operations and seamless execution.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3 text-[#4A4F73] text-sm group cursor-pointer hover:text-[#272D6D] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#F26341]/10 flex items-center justify-center text-[#F26341] group-hover:bg-[#F26341] group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <p className="font-bold uppercase tracking-tight">Headquarters<br /><span className="font-medium normal-case text-gray-500">Gurugram, Haryana</span></p>
              </div>
              <div className="flex items-center gap-3 text-[#4A4F73] text-sm group cursor-pointer hover:text-[#272D6D] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#F26341]/10 flex items-center justify-center text-[#F26341] group-hover:bg-[#F26341] group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <p className="font-bold">+91 1800 123 4567</p>
              </div>
              <div className="flex items-center gap-3 text-[#4A4F73] text-sm group cursor-pointer hover:text-[#272D6D] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#F26341]/10 flex items-center justify-center text-[#F26341] group-hover:bg-[#F26341] group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <p className="font-bold">contact@logipod.in</p>
              </div>
            </div>
          </div>

          {/* Column 2: Service Ecosystem */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-lg font-black text-[#272D6D] relative inline-block w-fit uppercase tracking-wider">
              Service Ecosystem
              <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-[#F26341]" />
            </h3>

            <ul className="flex flex-col gap-4 mt-4">
              <li><FooterLink href="/Exim">EXIM (Freight Forwarding)</FooterLink></li>
              <li><FooterLink href="/ftl">FTL (Full Truckload)</FooterLink></li>
              <li><FooterLink href="/warehousing">Warehousing</FooterLink></li>
              <li><FooterLink href="/tms">Tech Sol. (TMS)</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Corporate Directory */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-lg font-black text-[#272D6D] relative inline-block w-fit uppercase tracking-wider">
              Corporate
              <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-[#F26341]" />
            </h3>

            <ul className="flex flex-col gap-4 mt-4">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/company/about">Our Company</FooterLink></li>
              <li><FooterLink href="/our-team">Our Team</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-lg font-black text-[#272D6D] relative inline-block w-fit uppercase tracking-wider">
              Legal & Policies
              <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-[#F26341]" />
            </h3>

            <p className="text-[#4A4F73] text-sm leading-relaxed mb-2 font-medium">
              Logipod adheres to the highest global standards for data protection and operational transparency.
            </p>

            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/privacy-policy" className="group flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-[#F26341]/5 border border-gray-100 hover:border-[#F26341]/30 shadow-sm transition-all duration-300">
                  <ShieldCheck size={18} className="text-[#F26341]" />
                  <span className="text-sm font-bold text-[#272D6D] group-hover:text-[#F26341] transition-colors">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="group flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-[#F26341]/5 border border-gray-100 hover:border-[#F26341]/30 shadow-sm transition-all duration-300">
                  <FileText size={18} className="text-[#F26341]" />
                  <span className="text-sm font-bold text-[#272D6D] group-hover:text-[#F26341] transition-colors">Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="group flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-[#F26341]/5 border border-gray-100 hover:border-[#F26341]/30 shadow-sm transition-all duration-300">
                  <Lock size={18} className="text-[#F26341]" />
                  <span className="text-sm font-bold text-[#272D6D] group-hover:text-[#F26341] transition-colors">Cookie Policy</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Socials & Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <SocialIcon href="https://www.linkedin.com/company/logipod/about/"><LinkedInIcon /></SocialIcon>
            <SocialIcon href="#"><XIcon /></SocialIcon>
            <SocialIcon href="https://www.facebook.com/people/Logipod-Logistics-Private-Limited/61576141095076/"><FacebookIcon /></SocialIcon>
            <SocialIcon href="https://www.instagram.com/logipodlogistics/"><InstagramIcon /></SocialIcon>
          </div>

          <div className="text-[#4A4F73] text-sm flex flex-col sm:flex-row items-center gap-2 sm:gap-6 font-bold uppercase tracking-widest">
            <p>© {new Date().getFullYear()} LOGIPOD EXPRESS PVT. LTD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
