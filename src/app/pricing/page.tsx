import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans - LetWrk | Simple, Transparent Pricing",
  description: "Choose the perfect LetWrk plan for your team. Start free, upgrade when you need more. Professional workflow management with transparent pricing.",
  keywords: "pricing, plans, workflow management, team collaboration, productivity tools, dashboard, integrations",
  openGraph: {
    title: "LetWrk Pricing - Simple, Transparent Plans",
    description: "Choose the perfect LetWrk plan for your team. Start free, upgrade when you need more.",
    url: "https://letwrk.io/pricing",
    siteName: "LetWrk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LetWrk Pricing - Simple, Transparent Plans",
    description: "Choose the perfect LetWrk plan for your team. Start free, upgrade when you need more.",
  },
  alternates: {
    canonical: "https://letwrk.io/pricing",
  },
};

"use client";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individual users getting started",
      features: [
        "Up to 3 integrated tools",
        "Basic dashboard customization",
        "5GB storage",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      ctaText: "Get Started Free"
    },
    {
      name: "Professional",
      price: "$12",
      description: "Ideal for small teams and growing businesses",
      features: [
        "Up to 15 integrated tools",
        "Advanced dashboard customization",
        "50GB storage",
        "Priority support",
        "Team collaboration features",
        "Custom workflows",
        "API access"
      ],
      popular: true,
      ctaText: "Start 14-day Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited integrated tools",
        "White-label solutions",
        "Unlimited storage",
        "24/7 dedicated support",
        "Advanced security features",
        "Custom integrations",
        "On-premise deployment",
        "Training & onboarding"
      ],
      popular: false,
      ctaText: "Contact Sales"
    }
  ];

  // JSON-LD structured data for pricing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "LetWrk Workspace Platform",
    "description": "Unified workspace platform that brings all your tools together",
    "brand": {
      "@type": "Brand",
      "name": "LetWrk"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "Perfect for individual users getting started"
      },
      {
        "@type": "Offer",
        "name": "Professional Plan",
        "price": "12",
        "priceCurrency": "USD",
        "billingIncrement": "Month",
        "availability": "https://schema.org/InStock",
        "description": "Ideal for small teams and growing businesses"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Plan",
        "description": "For large organizations with complex needs",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Contact for pricing"
        }
      }
    ]
  };

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
              Simple, <span className="text-gray-900">transparent pricing</span>
            </h1>
            <p className="text-xl text-gray-600 font-light mb-8">
              Choose the perfect plan for your team. Start free, upgrade when you need more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-light">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full p-8 rounded-sm border transition-all duration-300 hover:shadow-lg ${
                  plan.popular ? 'border-gray-900 shadow-md' : 'border-gray-200'
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-light mb-2 text-gray-900">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-light text-gray-900">
                        {plan.price}
                      </span>
                      {plan.price !== "Free" && plan.price !== "Custom" && (
                        <span className="text-gray-600 font-light">/month</span>
                      )}
                    </div>
                    <p className="text-gray-600 font-light">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto"
                  >
                    <Button
                      className={`w-full font-light py-3 border-0 ${
                        plan.popular
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I change plans at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly."
              },
              {
                question: "Is there a free trial?",
                answer: "We offer a 14-day free trial for our Professional plan, and our Starter plan is completely free forever with basic features."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your billing period."
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
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
              Join thousands of teams who have streamlined their productivity with Letwrk
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white text-black hover:bg-gray-100 font-light px-8 py-3 text-lg border-0">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
};

export default PricingPage; 