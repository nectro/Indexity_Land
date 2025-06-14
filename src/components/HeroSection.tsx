"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Slack,
  Calendar,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [animationStep, setAnimationStep] = useState(0);

  // Simple animation cycle for dashboard widgets
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-background via-background/95 to-background/80 pt-24 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your entire workflow
              <br />
              <span className="text-gray-900">in one place</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-[600px] font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Letwrk brings all your tools together in a customizable dashboard.
              No more tab switching, just seamless productivity.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="font-light text-sm bg-black text-white hover:bg-gray-800 border-0 px-6 py-3"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="font-light text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-6 py-3"
                >
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-background bg-primary/20 overflow-hidden"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                      alt="User avatar"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-gray-600 font-light">
                <span className="font-normal text-gray-900">1,000+</span> teams already using
                Letwrk
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Dashboard visualization */}
          <motion.div
            className="relative bg-white/90 backdrop-blur-md rounded-sm border border-gray-200 p-4 lg:p-6"
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-3 w-3 rounded-full bg-red-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="h-3 w-3 rounded-full bg-yellow-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                ></motion.div>
                <motion.div
                  className="h-3 w-3 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                ></motion.div>
              </div>
              <div className="text-sm font-light text-gray-900">Letwrk Dashboard</div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Slack Widget */}
              <DashboardWidget
                title="Slack"
                icon={<Slack className="h-5 w-5" />}
                isActive={animationStep === 0}
                color="bg-[#4A154B]"
                delay={0.1}
              >
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 overflow-hidden">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
                        alt="User"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="bg-muted p-2 rounded-md text-xs flex-1">
                      <p>Hey team, just pushed the new update!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 overflow-hidden">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=jamie"
                        alt="User"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="bg-muted p-2 rounded-md text-xs flex-1">
                      <p>Great work! Let's review it tomorrow.</p>
                    </div>
                  </div>
                </div>
              </DashboardWidget>

              {/* Calendar Widget */}
              <DashboardWidget
                title="Calendar"
                icon={<Calendar className="h-5 w-5" />}
                isActive={animationStep === 1}
                color="bg-[#4285F4]"
                delay={0.2}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">Today</span>
                    <span className="text-muted-foreground">April 15</span>
                  </div>
                  <div className="bg-muted p-2 rounded-md text-xs">
                    <div className="font-medium">10:00 AM</div>
                    <div>Weekly Team Standup</div>
                  </div>
                  <div className="bg-muted p-2 rounded-md text-xs">
                    <div className="font-medium">2:00 PM</div>
                    <div>Product Review</div>
                  </div>
                </div>
              </DashboardWidget>

              {/* Analytics Widget */}
              <DashboardWidget
                title="Analytics"
                icon={<BarChart3 className="h-5 w-5" />}
                isActive={animationStep === 2}
                color="bg-[#EA4335]"
                delay={0.3}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">Conversion Rate</span>
                    <span className="text-green-500">+12%</span>
                  </div>
                  <div className="h-16 flex items-end gap-1">
                    {[40, 65, 35, 85, 55, 70, 60].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-primary/60 rounded-t-sm"
                        style={{ height: `${height}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </DashboardWidget>

              {/* Jira Widget */}
              <DashboardWidget
                title="Jira"
                icon={<MessageSquare className="h-5 w-5" />}
                isActive={animationStep === 3}
                color="bg-[#0052CC]"
                delay={0.4}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">Sprint Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <div>Tasks: 12/16</div>
                    <div>Due: 2 days</div>
                  </div>
                </div>
              </DashboardWidget>

              {/* HubSpot Widget */}
              <DashboardWidget
                title="HubSpot"
                icon={<BarChart3 className="h-5 w-5" />}
                isActive={false}
                color="bg-[#FF7A59]"
                delay={0.5}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">Deals Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="text-xs">Won: $125,000</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="text-xs">Pending: $250,000</div>
                  </div>
                </div>
              </DashboardWidget>

              {/* Email Widget */}
              <DashboardWidget
                title="Email"
                icon={<MessageSquare className="h-5 w-5" />}
                isActive={false}
                color="bg-[#34A853]"
                delay={0.6}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">Inbox</span>
                    <span>3 new</span>
                  </div>
                  <div className="bg-muted p-2 rounded-md text-xs">
                    <div className="font-medium">Client Proposal</div>
                    <div className="text-muted-foreground truncate">
                      Let's discuss the new project...
                    </div>
                  </div>
                </div>
              </DashboardWidget>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      ></motion.div>
    </section>
  );
};

interface DashboardWidgetProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  color: string;
  children: React.ReactNode;
  delay?: number;
}

const DashboardWidget = ({
  title,
  icon,
  isActive,
  color,
  children,
  delay = 0,
}: DashboardWidgetProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Card
        className={`overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 rounded-sm ${
          isActive
            ? "ring-1 ring-gray-400 scale-105 z-10"
            : "opacity-90 hover:opacity-100"
        }`}
      >
        <motion.div
          className="flex items-center justify-between p-2 bg-white border-b border-gray-100"
          animate={isActive ? { scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="text-gray-700"
            >
              {icon}
            </motion.div>
            <span className="text-xs font-medium text-gray-900">{title}</span>
          </div>
          <div className="flex gap-1">
            <motion.div
              className="h-1 w-1 rounded-full bg-gray-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="h-1 w-1 rounded-full bg-gray-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            ></motion.div>
            <motion.div
              className="h-1 w-1 rounded-full bg-gray-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            ></motion.div>
          </div>
        </motion.div>
        <div className="p-3 bg-white">{children}</div>
      </Card>
    </motion.div>
  );
};

export default HeroSection;
