"use client";

import React, { useState } from "react";
import { Upload, Send, CheckCircle2, User, Mail, Phone, MapPin, Building, Globe, MessageSquare, Briefcase } from "lucide-react";
import { motion } from "motion/react";

const JobApplicationForm = ({ jobTitle }: { jobTitle: string }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: "",
    portfolio: "",
    motivation: ""
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic URL validation if provided
    if (formData.portfolio && !formData.portfolio.startsWith("http")) {
      setError("Please provide a valid URL (starting with http:// or https://)");
      setIsSubmitting(false);
      return;
    }

    if (!resumeFile) {
      setError("Please upload your resume.");
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("experience", formData.experience);
      data.append("portfolio", formData.portfolio);
      data.append("motivation", formData.motivation);
      data.append("jobTitle", jobTitle);
      data.append("resume", resumeFile);

      const response = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to send application.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl shadow-[#272D6D]/10 border border-gray-100 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F26341] to-[#272D6D]" />
        <div className="w-24 h-24 bg-green-50 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-3xl font-extrabold text-[#272D6D] mb-4">Application Sent!</h3>
        <p className="text-gray-500 mb-10 max-w-sm mx-auto text-lg leading-relaxed">
          We've received your application for <span className="text-[#F26341] font-bold">{jobTitle}</span>. Our team will review your profile and get in touch via email shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="w-full py-4 bg-[#272D6D] text-white rounded-2xl font-bold hover:bg-[#1A1F4D] transition-all shadow-xl shadow-[#272D6D]/20"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <div id="apply-form" className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-[#272D6D]/5 border border-gray-100 relative">
      <div className="absolute -top-3 -right-3 bg-[#F26341] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
        Fast Track
      </div>
      
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-[#272D6D] mb-2 tracking-tight">Apply Now</h3>
        <p className="text-gray-500 font-medium">Complete your application in under 2 minutes.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-bold animate-shake">
              {error}
            </div>
          )}

          {/* Personal Info */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-[#272D6D]/40 px-1">Identity</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#F26341] transition-colors" />
              <input 
                required
                type="text" 
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#F26341]/10 focus:border-[#F26341]/30 outline-none transition-all font-bold text-gray-700"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#F26341] transition-colors" />
              <input 
                required
                type="email" 
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#F26341]/10 focus:border-[#F26341]/30 outline-none transition-all font-bold text-gray-700"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* Professional Details */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-[#272D6D]/40 px-1">Professional Path</label>
            <div className="space-y-4">
              <div className="relative group">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#F26341] transition-colors" />
                <select 
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#F26341]/10 focus:border-[#F26341]/30 outline-none transition-all font-bold text-gray-700 appearance-none"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                >
                  <option value="">Select Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5-8">5-8 Years</option>
                  <option value="8+">8+ Years</option>
                </select>
              </div>
              <div className="relative group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#F26341] transition-colors" />
                <input 
                  type="url" 
                  placeholder="Portfolio / LinkedIn (https://...)"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#F26341]/10 focus:border-[#F26341]/30 outline-none transition-all font-bold text-gray-700"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-[#272D6D]/40 px-1">Credentials</label>
            <div className={`relative border-2 border-dashed rounded-[2rem] p-10 transition-all cursor-pointer text-center group/upload ${resumeFile ? "border-green-200 bg-green-50/30" : "border-gray-100 bg-gray-50/50 hover:border-[#F26341]/30 hover:bg-gray-50"}`}>
              <input 
                required
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mx-auto mb-4 shadow-sm transition-all ${resumeFile ? "bg-white border-green-200 text-green-500" : "bg-white border-gray-100 group-hover/upload:border-[#F26341]/30 group-hover/upload:text-[#F26341]"}`}>
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-gray-700 font-black text-sm">
                {resumeFile ? resumeFile.name : "Upload Resume"}
              </p>
              <p className="text-gray-400 text-xs mt-1">PDF, DOCX up to 10MB</p>
            </div>
          </div>

          <div className="relative group">
            <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-400 group-focus-within:text-[#F26341] transition-colors" />
            <textarea 
              required
              rows={4}
              placeholder="Your motivation to join Logipod..."
              className="w-full pl-12 pr-4 py-5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#F26341]/10 focus:border-[#F26341]/30 outline-none transition-all resize-none font-bold text-gray-700"
              value={formData.motivation}
              onChange={(e) => setFormData({...formData, motivation: e.target.value})}
            />
          </div>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-[#F26341] text-white rounded-2xl font-extrabold text-xl hover:bg-[#d85536] transition-all shadow-xl shadow-[#F26341]/20 flex items-center justify-center gap-3 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10">
            {isSubmitting ? "Sending..." : "Submit Application"}
          </span>
          <Send className={`w-6 h-6 relative z-10 transition-transform ${isSubmitting ? "translate-x-10 -translate-y-10 opacity-0" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
        </button>
        
        <p className="text-center text-xs text-gray-400 font-medium px-4">
          By clicking submit, you agree to our <span className="underline cursor-pointer hover:text-gray-600">Privacy Policy</span> and terms of recruitment.
        </p>
      </form>
    </div>
  );
};

export default JobApplicationForm;
