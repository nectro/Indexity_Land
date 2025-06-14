"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <motion.div 
        className={`transition-all ease-out ${
          isScrolled 
            ? "w-[90%] md:w-[900px] bg-white/40 backdrop-blur-md rounded-xl" 
            : "w-full bg-transparent"
        } ${isScrolled ? "duration-300" : "duration-0"}`}
        style={{
          border: isScrolled ? "1px solid rgb(229, 231, 235)" : "1px solid transparent",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        animate={{
          width: isScrolled ? (typeof window !== 'undefined' && window.innerWidth >= 768 ? "900px" : "90%") : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="container mx-auto transition-all duration-300 ease-out py-4 px-3 md:px-3">
          <div className="flex items-center justify-between gap-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("hero")}
            >
              <div className="h-7 w-7 rounded-sm flex items-center justify-center">
                <Image  src={logo} alt="Letwrk" width={18} height={18} />
              </div>
              <span className="font-light text-xl text-gray-900">Let<b>Wrk</b>.io</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { label: "Features", id: "integrations" },
                { label: "Demo", id: "demo" },
                { label: "Use Cases", id: "use-cases" },
                { label: "Pricing", id: "pricing" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" className={`font-light text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isScrolled ? "hidden" : "text-gray-600"}`}>
                Sign In
              </Button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="font-light text-sm bg-black text-white hover:bg-gray-800 border-0 px-4 py-2">
                  Get Early Access
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-200"
              >
                <nav className="flex flex-col space-y-4 pt-4">
                  {[
                    { label: "Features", id: "integrations" },
                    { label: "Demo", id: "demo" },
                    { label: "Use Cases", id: "use-cases" },
                    { label: "Pricing", id: "pricing" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4">
                    <Button variant="ghost" className="justify-start font-light text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                      Sign In
                    </Button>
                    <Button className="justify-start font-light text-sm bg-black text-white hover:bg-gray-800 border-0">
                      Get Early Access
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
