"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Phone, Building, Globe, Briefcase, ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Logo from "@/assets/logo.svg";
import Image from "next/image";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    workEmail: "",
    companyName: "",
    designation: "",
    companyWebsite: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const designationOptions = [
    "Full Stack Developer",
    "Frontend Developer", 
    "Backend Developer",
    "Product Manager",
    "Project Manager",
    "Team Lead",
    "Engineering Manager",
    "CEO/Founder",
    "CTO",
    "Marketing Manager",
    "Sales Representative",
    "Business Analyst",
    "UI/UX Designer",
    "DevOps Engineer",
    "Data Scientist",
    "Consultant",
    "Other"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
      
      if (!GOOGLE_SCRIPT_URL) {
        console.error('Google Script URL not configured');
        throw new Error('Configuration error');
      }

      // Create form data to avoid CORS preflight request
      const formDataToSend = new FormData();
      formDataToSend.append('timestamp', new Date().toISOString());
      formDataToSend.append('name', formData.name);
      formDataToSend.append('workEmail', formData.workEmail);
      formDataToSend.append('phone', formData.phone || '');
      formDataToSend.append('companyName', formData.companyName);
      formDataToSend.append('designation', formData.designation);
      formDataToSend.append('companyWebsite', formData.companyWebsite || '');

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      
      // Close modal after 5 seconds if submission was successful
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          workEmail: "",
          companyName: "",
          designation: "",
          companyWebsite: "",
        });
        onClose();
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.5 
              }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden relative rounded-lg"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left Side - Brand/Content */}
                <div className="bg-black text-white p-12 flex flex-col justify-between relative overflow-hidden">
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="mb-8">
                        <motion.div
                          className="w-16 h-16 bg-white rounded-sm mb-6 flex items-center justify-center"
                          animate={{ 
                            scale: [1, 1.02, 1],
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }}
                        >
                          <Image src={Logo} alt="Letwrk" className="w-10 h-10" />
                        </motion.div>
                        <h1 className="text-3xl font-[200] mb-4 tracking-tight">
                          Join the Waitlist
                        </h1>
                        <p className="text-white/80 text-lg !font-[100] leading-relaxed">
                          Be among the first to experience the future of productivity. 
                          Get early access to Letwrk's unified workspace.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative z-10"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-300 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-black" />
                        </div>
                        <span className="text-white/90 font-[100]">Free 1-Month Pilot – All Features Unlocked</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-300 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-black" />
                        </div>
                        <span className="text-white/90 font-[100]">Priority customer support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-300 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-black" />
                        </div>
                        <span className="text-white/90 font-[100]">No setup fees or hidden costs</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side - Form */}
                <div className="bg-white p-12 overflow-y-auto">
                  <motion.button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-black/60 hover:text-black transition-colors z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                  {!isSubmitted ? (
                    <motion.form
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="h-full flex flex-col"
                    >
                      <div className="mb-8">
                        <h2 className="text-2xl font-light text-black mb-2">Get Started</h2>
                        <p className="text-gray-600 font-light">Fill in your details to secure your spot</p>
                      </div>

                      <div className="flex-1 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <Label htmlFor="name" className="text-sm font-medium text-black mb-3 block">
                              Full Name *
                            </Label>
                            <div className="relative">
                              <User className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                placeholder="John Doe"
                                required
                                className="pl-8 py-3 border-gray-300 focus:border-black focus:ring-0 bg-white font-light text-black rounded-md shadow-none"
                              />
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <Label htmlFor="workEmail" className="text-sm font-medium text-black mb-3 block">
                              Work Email *
                            </Label>
                            <div className="relative">
                              <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="workEmail"
                                type="email"
                                value={formData.workEmail}
                                onChange={(e) => handleInputChange("workEmail", e.target.value)}
                                placeholder="john@company.com"
                                required
                                className="pl-8 py-3 border-gray-300 focus:border-black focus:ring-0 bg-white font-light text-black rounded-md shadow-none"
                              />
                            </div>
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <Label htmlFor="phone" className="text-sm font-medium text-black mb-3 block">
                              Phone Number
                            </Label>
                            <div className="relative">
                              <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                placeholder="+1 (555) 123-4567"
                                className="pl-8 py-3 border-gray-300 focus:border-black focus:ring-0 bg-white font-light text-black rounded-md shadow-none"
                              />
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                          >
                            <Label htmlFor="companyName" className="text-sm font-medium text-black mb-3 block">
                              Company Name *
                            </Label>
                            <div className="relative">
                              <Building className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="companyName"
                                value={formData.companyName}
                                onChange={(e) => handleInputChange("companyName", e.target.value)}
                                placeholder="Acme Corp"
                                required
                                className="pl-8 py-3 border-gray-300 focus:border-black focus:ring-0 bg-white font-light text-black rounded-md shadow-none"
                              />
                            </div>
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                          >
                            <Label htmlFor="designation" className="text-sm font-medium text-black mb-3 block">
                              Role/Designation *
                            </Label>
                            <div className="relative">
                              <Briefcase className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                              <Select
                                value={formData.designation}
                                onValueChange={(value) => handleInputChange("designation", value)}
                                required
                              >
                                <SelectTrigger className="pl-8 py-3 border-gray-300 focus:border-black focus:ring-0 bg-white font-light text-black rounded-md shadow-none">
                                  <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent>
                                  {designationOptions.map((option) => (
                                    <SelectItem key={option} value={option} className="font-light">
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                          >
                            <Label htmlFor="companyWebsite" className="text-sm font-medium text-black mb-3 block">
                              Company Website
                            </Label>
                            <div className="relative">
                              <Globe className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id="companyWebsite"
                                type="url"
                                value={formData.companyWebsite}
                                onChange={(e) => handleInputChange("companyWebsite", e.target.value)}
                                placeholder="https://company.com"
                                className="pl-8 py-3 border-gray-300 focus:border-black focus:ring-0 bg-white font-light text-black rounded-md shadow-none"
                              />
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="mt-8"
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting || !formData.name || !formData.workEmail || !formData.companyName || !formData.designation}
                          className="w-full bg-black hover:bg-gray-900 text-white font-medium py-4 transition-all duration-300 rounded-sm group"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <span>Join the Waitlist</span>
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          )}
                        </Button>
                        <p className="text-xs text-gray-500 text-center mt-4 font-light">
                          By joining, you agree to receive updates about Letwrk. No spam, ever.
                        </p>
                      </motion.div>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                      className="h-full flex flex-col items-center justify-center text-center"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 0.6,
                          repeat: 1
                        }}
                        className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6"
                      >
                        <Check className="h-10 w-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-light text-black mb-4 text-center">
                        Thanks for signing up! Exciting stuff ahead!
                      </h3>
                      <p className="text-gray-600 font-light text-lg max-w-md text-center">
                        You're all set! We'll notify you as soon as Letwrk launches!
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal; 