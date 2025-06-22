"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Lock, Zap, Users, Crown } from "lucide-react";

interface PricingSectionProps {
  onJoinWaitlist: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onJoinWaitlist }) => {
  return (
    <section id="pricing" className="w-full py-20 flex justify-center bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, black 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-light mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Lock className="h-4 w-4" />
            Pricing Strategy
          </motion.div>
          
          <h2 className="text-2xl font-light tracking-tight md:text-3xl lg:text-4xl text-gray-900 mb-4">
            Transparent Pricing, Coming Soon
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-light max-w-2xl mx-auto">
            We're crafting a pricing model that delivers exceptional value. Details will be revealed after our first phase launch.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Starter Plan */}
            <motion.div
              className="relative bg-white rounded-sm border border-gray-200 p-8 hover:border-gray-300 transition-colors duration-200 group flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transition: { duration: 0.2 }
              }}
              style={{ willChange: "transform" }}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-gray-100 mb-6 group-hover:bg-gray-200 transition-colors duration-200">
                <Zap className="h-6 w-6 text-gray-700" />
              </div>
              
              <h3 className="text-xl font-light mb-2 text-gray-900">Starter</h3>
              <p className="text-gray-600 font-light text-sm mb-6">
                Perfect for individuals and small teams getting started with unified productivity.
              </p>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-light text-gray-400">$</span>
                  <span className="text-4xl font-light text-gray-400 mx-1">--</span>
                  <span className="text-gray-400 font-light">/month</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 font-light">Pricing to be disclosed</p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow relative">
                <div className="blur-sm select-none pointer-events-none">
                  {[
                    "Basic workspace",
                    "4 integrations",
                    "Email support",
                    "Basic analytics overview"
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3 mb-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                      </div>
                      <span className="text-sm text-gray-600 font-light">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Overlay message */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-sm px-3 py-2 text-center">
                    <p className="text-xs text-gray-600 font-medium">To be revealed soon</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button 
                  onClick={onJoinWaitlist}
                  variant="outline" 
                  className="w-full font-light border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                >
                  Get Notified
                </Button>
              </div>
            </motion.div>

                          {/* Professional Plan - Featured */}
            <motion.div
              className="relative bg-black text-white rounded-sm p-8 shadow-xl transition-shadow duration-200 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transition: { duration: 0.2 }
              }}
              style={{ willChange: "transform" }}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-white/10 mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-light mb-2">Professional</h3>
              <p className="text-white/80 font-light text-sm mb-6">
                Advanced features for growing teams that need powerful productivity tools.
              </p>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-light text-white/60">$</span>
                  <span className="text-4xl font-light text-white/60 mx-1">--</span>
                  <span className="text-white/60 font-light">/month</span>
                </div>
                <p className="text-xs text-white/50 mt-1 font-light">Pricing to be disclosed</p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow relative">
                <div className="blur-sm select-none pointer-events-none">
                  {[
                    "All Starter features",
                    "Advanced integrations",
                    "Custom workflows",
                    "Priority support",
                    "Team collaboration"
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3 mb-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-sm text-white/90 font-light">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Overlay message */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-sm px-3 py-2 text-center">
                    <p className="text-xs text-white/90 font-medium">To be revealed soon</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button 
                  onClick={onJoinWaitlist}
                  className="w-full font-light bg-white text-black hover:bg-gray-100"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Custom Solutions Section */}
        {/* <motion.div
          className="max-w-2xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white rounded-sm border border-gray-200 p-8 hover:border-gray-300 transition-all duration-300"
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-gray-100 mb-6 mx-auto">
              <Crown className="h-6 w-6 text-gray-700" />
            </div>
            
            <h3 className="text-xl font-light mb-4 text-gray-900">
              Need something custom?
            </h3>
            <p className="text-gray-600 font-light mb-6">
              Large teams, specific integrations, or unique requirements? 
              Let's discuss a tailored solution that fits your organization perfectly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={onJoinWaitlist}
                variant="outline" 
                className="font-light border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </motion.div> */}

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-light text-gray-900 mb-4">
              Fair, Transparent, Value-Driven
            </h3>
            <p className="text-gray-600 font-light mb-6">
              Our pricing will reflect the true value Letwrk brings to your productivity. 
              No hidden fees, no surprises – just honest pricing for powerful tools.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={onJoinWaitlist}
                className="bg-black text-white hover:bg-gray-800 font-light px-6 py-3"
              >
                Join Waitlist for Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-gray-500 font-light">
                First 100 users get special pricing
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 