"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntegrationShowcase from "@/components/IntegrationShowcase";
import InteractiveDemoSection from "@/components/InteractiveDemoSection";
import PricingSection from "@/components/PricingSection";
import WaitlistModal from "@/components/WaitlistModal";
import { motion } from "framer-motion";
import { ArrowRight, Users, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Home() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />

      {/* Integration Showcase */}
      <section
        id="integrations"
        className="w-full py-20 flex justify-center bg-white"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-light tracking-tight md:text-3xl lg:text-4xl text-gray-900">
              Seamlessly Integrate Your Favorite Tools
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-light">
              Connect all your essential apps in one unified workspace
            </p>
          </motion.div>
          <IntegrationShowcase />
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        id="use-cases"
        className="w-full py-20 flex justify-center bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-light tracking-tight md:text-3xl lg:text-4xl text-gray-900">
              Tailored For Every Team Member
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-light">
              Customize your workspace to match your specific role and workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Manager Use Case */}
            <motion.div
              className="rounded-sm border border-gray-200 bg-white hover:border-gray-300 transition-all duration-300 p-5 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-sm bg-gray-100 mb-4 group-hover:bg-gray-200 transition-all duration-300">
                <Users className="h-7 w-7 text-gray-700" />
              </div>
              <h3 className="text-lg font-light mb-2 text-gray-900">For Managers</h3>
              <p className="text-gray-600 mb-4 font-light text-sm">
                Track team performance, monitor project timelines, and stay on
                top of key metrics all in one view.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-light text-gray-700 border border-gray-200">
                  Jira
                </span>
                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-light text-gray-700 border border-gray-200">
                  HubSpot
                </span>
                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-light text-gray-700 border border-gray-200">
                  Calendar
                </span>
              </div>
            </motion.div>

            {/* Developer Use Case */}
            <motion.div
              className="rounded-sm border border-gray-200 bg-white hover:border-gray-300 transition-all duration-300 p-5 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-sm bg-gray-100 mb-4 group-hover:bg-gray-200 transition-all duration-300">
                <Code className="h-7 w-7 text-gray-700" />
              </div>
              <h3 className="text-lg font-light mb-2 text-gray-900">For Developers</h3>
              <p className="text-gray-600 mb-4 font-light text-sm">
                Manage code tasks, track pull requests, and communicate with
                your team without context switching.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-light text-gray-700 border border-gray-200">
                  Jira
                </span>
                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-light text-gray-700 border border-gray-200">
                  Slack
                </span>
                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-light text-gray-700 border border-gray-200">
                  GitHub
                </span>
              </div>
            </motion.div>

            {/* Marketer Use Case */}
            <motion.div
              className="rounded-sm border border-gray-200 bg-white hover:border-gray-300 transition-all duration-300 p-5 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-sm bg-gray-100 mb-4 group-hover:bg-gray-200 transition-all duration-300">
                <BarChart3 className="h-7 w-7 text-gray-700" />
              </div>
              <h3 className="text-lg font-light mb-2 text-gray-900">For Marketers</h3>
              <p className="text-gray-600 mb-4 font-light text-sm">
                Monitor campaign performance, track leads, and collaborate on
                content all from a single dashboard.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-light text-gray-700 border border-gray-200">
                  HubSpot
                </span>
                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-light text-gray-700 border border-gray-200">
                  Slack
                </span>
                <span className="inline-flex items-center rounded-sm bg-gray-100 px-2 py-1 text-xs font-light text-gray-700 border border-gray-200">
                  Analytics
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <div className="hidden md:block">
        <InteractiveDemoSection onJoinWaitlist={handleJoinWaitlist} />
      </div>

      {/* Pricing Section */}
      <PricingSection onJoinWaitlist={handleJoinWaitlist} />

      {/* CTA Section */}
      <section className="w-full py-20 flex justify-center bg-black text-white relative overflow-hidden">
        <div className="container px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-light tracking-tight md:text-3xl lg:text-4xl mb-4">
              Ready to revolutionize productivity?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto mb-8 !font-light">
              Be among the first to experience the next generation of productivity
              tools with Letwrk's unified workspace.
            </p>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleJoinWaitlist}
                  className="bg-white text-black hover:bg-gray-100 font-light px-6 py-3 text-base border-0 transition-all duration-300"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            <p className="text-sm text-gray-400 mt-4 font-light">
              Coming soon • Be the first to know • Free early access
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 bg-background border-t">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-7 w-7 rounded-sm flex items-center justify-center mr-2">
                <Image src={logo} alt="Letwrk" width={18} height={18} />
              </div>
              <span className="font-light text-xl">Let<b>Wrk</b>.io</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#integrations"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact
              </a>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Letwrk.io. All rights reserved.
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />
    </main>
  );
}
