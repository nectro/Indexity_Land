import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Zap, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - LetWrk | Building the Future of Work",
  description: "Learn about LetWrk's mission to eliminate workflow chaos and create seamless productivity for teams worldwide. Meet our team and discover our values.",
  keywords: "about letwrk, company story, team, mission, values, workflow management, productivity platform",
  openGraph: {
    title: "About LetWrk - Building the Future of Work",
    description: "Learn about LetWrk's mission to eliminate workflow chaos and create seamless productivity for teams worldwide.",
    url: "https://letwrk.io/about",
    siteName: "LetWrk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LetWrk - Building the Future of Work",
    description: "Learn about LetWrk's mission to eliminate workflow chaos.",
  },
  alternates: {
    canonical: "https://letwrk.io/about",
  },
};

"use client";

const AboutPage = () => {
  // JSON-LD structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LetWrk",
    "url": "https://letwrk.io",
    "logo": "https://letwrk.io/logo.png",
    "description": "LetWrk brings all your tools together in a customizable dashboard. No more tab switching, just seamless productivity.",
    "foundingDate": "2023",
    "founder": [
      {
        "@type": "Person",
        "name": "Sarah Chen",
        "jobTitle": "CEO & Co-founder"
      },
      {
        "@type": "Person", 
        "name": "Marcus Rodriguez",
        "jobTitle": "CTO & Co-founder"
      }
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Emma Thompson",
        "jobTitle": "Head of Design"
      },
      {
        "@type": "Person",
        "name": "David Kim", 
        "jobTitle": "Head of Product"
      }
    ],
    "sameAs": [
      "https://twitter.com/letwrk",
      "https://linkedin.com/company/letwrk"
    ]
  };

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team First",
      description: "We believe great products come from great teams. Every decision we make prioritizes collaboration and collective success."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Simplicity",
      description: "Complex problems deserve simple solutions. We cut through the noise to deliver what truly matters."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "We're constantly pushing boundaries to reimagine how teams work together in the digital age."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "User-Centric",
      description: "Every feature, every design decision, every line of code is written with our users' success in mind."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      bio: "Former VP of Engineering at Slack, passionate about streamlining workflows"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
      bio: "Ex-Google engineer with 10+ years building scalable platforms"
    },
    {
      name: "Emma Thompson",
      role: "Head of Design",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      bio: "Design lead from Figma, expert in creating intuitive user experiences"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      bio: "Product strategist from Microsoft, focused on user-driven development"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex min-h-screen flex-col items-center bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-background via-background/95 to-background/80 pt-32 pb-20 overflow-hidden">
        {/* Fade-in dotted background */}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.1) 1.5px, transparent 1.5px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 20px 20px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        <div className="container mx-auto px-8 md:px-12 lg:px-[100px]">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-6">
              We're building the <span className="text-gray-900">future of work</span>
            </h1>
            <p className="text-xl text-gray-600 font-light mb-8">
              Our mission is simple: eliminate the chaos of juggling multiple tools and create seamless, productive workflows for every team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 font-light">
                <p>
                  Founded in 2023, Letwrk was born from a simple frustration: the endless tab-switching 
                  between dozens of work tools. Our founders, having led engineering teams at major tech 
                  companies, experienced firsthand how productivity tools were ironically making teams less productive.
                </p>
                <p>
                  We saw teams spending more time managing their tools than using them. Important notifications 
                  were getting lost, context was constantly being switched, and collaboration was fragmented 
                  across platforms.
                </p>
                <p>
                  That's when we decided to build something different—a unified workspace that brings 
                  everything together without compromising the power of individual tools.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-sm p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-black rounded-sm flex items-center justify-center">
                      <span className="text-white font-light text-xl">23</span>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-gray-900">Founded</div>
                      <div className="text-gray-600 font-light">Started with a vision</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-gray-700 rounded-sm flex items-center justify-center">
                      <span className="text-white font-light text-xl">1K+</span>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-gray-900">Teams</div>
                      <div className="text-gray-600 font-light">Trust our platform</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-gray-500 rounded-sm flex items-center justify-center">
                      <span className="text-white font-light text-xl">50+</span>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-gray-900">Integrations</div>
                      <div className="text-gray-600 font-light">And growing daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-[100px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              These principles guide everything we do, from product decisions to how we work together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border border-gray-200 rounded-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="text-gray-700 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-light mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 font-light">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-[100px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              We're a diverse group of builders, dreamers, and problem-solvers united by one goal: 
              making work more human and productive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center border border-gray-200 rounded-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto border-2 border-gray-200"
                    />
                  </div>
                  <h3 className="text-lg font-light mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600 font-light mb-3">{member.role}</p>
                  <p className="text-xs text-gray-500 font-light">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-[100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Join us on our mission
            </h2>
            <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
              Whether you're looking for a career opportunity or want to be part of the Letwrk community, 
              we'd love to hear from you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-black hover:bg-gray-100 font-light px-8 py-3 text-lg border-0">
                  Join Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border border-gray-400 bg-transparent hover:bg-white/10 text-white font-light px-8 py-3 text-lg"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
};

export default AboutPage; 