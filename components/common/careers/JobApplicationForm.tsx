"use client";

import React, { useState } from "react";
import { Upload, Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const JobApplicationForm = ({ jobTitle }: { jobTitle: string }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    currentCompany: "",
    portfolio: "",
    motivation: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-[#272D6D]/5 border border-gray-100 text-center"
      >
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-[#272D6D] mb-4">Application Sent!</h3>
        <p className="text-gray-600 mb-8 max-w-sm mx-auto">
          Thank you for applying to the {jobTitle} position. Our recruiting team will review your application and get back to you soon.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-[#272D6D] text-white rounded-xl font-semibold hover:bg-[#1A1F4D] transition-colors"
        >
          Close
        </button>
      </motion.div>
    );
  }

  return (
    <div id="apply-form" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-[#272D6D]/5 border border-gray-100">
      <h3 className="text-2xl font-bold text-[#272D6D] mb-8">Apply for this position</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Full Name *</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F26341]/20 focus:border-[#F26341] outline-none transition-all"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Email Address *</label>
            <input 
              required
              type="email" 
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F26341]/20 focus:border-[#F26341] outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
            <input 
              required
              type="tel" 
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F26341]/20 focus:border-[#F26341] outline-none transition-all"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Current Location *</label>
            <input 
              required
              type="text" 
              placeholder="City, Country"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F26341]/20 focus:border-[#F26341] outline-none transition-all"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Years of Experience *</label>
            <select 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F26341]/20 focus:border-[#F26341] outline-none transition-all bg-white"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
            >
              <option value="">Select experience</option>
              <option value="fresher">Fresher</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="5-8">5-8 Years</option>
              <option value="8+">8+ Years</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Current Company</label>
            <input 
              type="text" 
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F26341]/20 focus:border-[#F26341] outline-none transition-all"
              value={formData.currentCompany}
              onChange={(e) => setFormData({...formData, currentCompany: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">LinkedIn / Portfolio URL</label>
          <input 
            type="url" 
            placeholder="https://linkedin.com/in/username"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F26341]/20 focus:border-[#F26341] outline-none transition-all"
            value={formData.portfolio}
            onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Resume Upload *</label>
          <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-8 hover:border-[#F26341]/50 hover:bg-orange-50/30 transition-all cursor-pointer text-center">
            <input 
              required
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept=".pdf,.doc,.docx"
            />
            <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Click to upload or drag and drop</p>
            <p className="text-gray-400 text-sm mt-1">PDF, DOC, DOCX (Max 5MB)</p>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Why do you want to join Logipod? *</label>
          <textarea 
            required
            rows={4}
            placeholder="Tell us about your motivation..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F26341]/20 focus:border-[#F26341] outline-none transition-all resize-none"
            value={formData.motivation}
            onChange={(e) => setFormData({...formData, motivation: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-[#F26341] text-white rounded-xl font-bold text-lg hover:bg-[#d85536] transition-all shadow-lg shadow-[#F26341]/20 flex items-center justify-center gap-2 group"
        >
          Submit Application <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
