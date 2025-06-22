import React, { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Users, Headphones } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - LetWrk | Get in Touch with Our Team",
  description: "Contact LetWrk for sales inquiries, support, or partnerships. Reach out via our contact form, email, or phone. We're here to help transform your workflow.",
  keywords: "contact letwrk, support, sales, partnerships, help, customer service, contact form",
  openGraph: {
    title: "Contact LetWrk - Get in Touch with Our Team",
    description: "Contact LetWrk for sales inquiries, support, or partnerships. We're here to help transform your workflow.",
    url: "https://letwrk.io/contact",
    siteName: "LetWrk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact LetWrk - Get in Touch",
    description: "Contact LetWrk for sales inquiries, support, or partnerships.",
  },
  alternates: {
    canonical: "https://letwrk.io/contact",
  },
};

"use client";

const ContactPage = () => {
  // JSON-LD structured data for contact information
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LetWrk",
    "url": "https://letwrk.io",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "hello@letwrk.io",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "sales@letwrk.io",
        "contactType": "sales"
      },
      {
        "@type": "ContactPoint",
        "email": "support@letwrk.io",
        "contactType": "technical support"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street, Suite 456",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "789 Business Ave, Floor 12",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    ]
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Sales",
      description: "Get in touch with our sales team",
      contact: "sales@letwrk.io",
      action: "Contact Sales"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Support",
      description: "Need help? Our support team is here",
      contact: "support@letwrk.io",
      action: "Get Support"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Partnerships",
      description: "Interested in partnering with us?",
      contact: "partners@letwrk.io",
      action: "Explore Partnerships"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 456",
      timezone: "PST",
      hours: "9 AM - 6 PM"
    },
    {
      city: "New York",
      address: "789 Business Ave, Floor 12",
      timezone: "EST",
      hours: "9 AM - 6 PM"
    },
    {
      city: "London",
      address: "456 Innovation Rd, Building 3",
      timezone: "GMT",
      hours: "9 AM - 6 PM"
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
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-6">
              Let's <span className="text-gray-900">talk</span>
            </h1>
            <p className="text-xl text-gray-600 font-light mb-8">
              Whether you have questions, need support, or want to explore partnerships, 
              we're here to help. Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-[100px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              How can we help?
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Choose the best way to get in touch with our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center border border-gray-200 rounded-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="text-gray-700 mb-4 flex justify-center">{method.icon}</div>
                  <h3 className="text-xl font-light mb-2 text-gray-900">{method.title}</h3>
                  <p className="text-gray-600 font-light mb-4">{method.description}</p>
                  <p className="text-sm text-gray-500 font-light mb-6">{method.contact}</p>
                  <Button 
                    variant="outline" 
                    className="w-full font-light border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {method.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light mb-6 text-gray-900">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800 font-light py-3 border-0"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light mb-6 text-gray-900">Get in touch directly</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <p className="font-light text-gray-900">Email</p>
                    <p className="text-gray-600 font-light">hello@letwrk.io</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <p className="font-light text-gray-900">Phone</p>
                    <p className="text-gray-600 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <p className="font-light text-gray-900">Support Hours</p>
                    <p className="text-gray-600 font-light">Monday - Friday, 9 AM - 6 PM PST</p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-light mb-4 text-gray-900">Our Offices</h4>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={office.city} className="border border-gray-200 rounded-sm p-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-gray-600 mt-1" />
                      <div>
                        <p className="font-light text-gray-900">{office.city}</p>
                        <p className="text-sm text-gray-600 font-light">{office.address}</p>
                        <p className="text-xs text-gray-500 font-light mt-1">
                          {office.hours} {office.timezone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-[100px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Quick Answers
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Find answers to common questions before reaching out
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent support issues, we typically respond within 2-4 hours."
              },
              {
                question: "Do you offer phone support?",
                answer: "Yes, phone support is available for Professional and Enterprise plan customers. Contact us to schedule a call with our support team."
              },
              {
                question: "Can I schedule a demo?",
                answer: "Absolutely! We'd love to show you how Letwrk can transform your workflow. Contact our sales team to schedule a personalized demo."
              },
              {
                question: "Do you have a knowledge base?",
                answer: "Yes, we have a comprehensive help center with guides, tutorials, and FAQs. You can access it from your dashboard or contact support for assistance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-sm border border-gray-200"
              >
                <h3 className="text-lg font-medium mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 font-light">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default ContactPage; 