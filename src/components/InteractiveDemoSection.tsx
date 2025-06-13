"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Info,
  X,
  RefreshCw,
  ExternalLink,
  MessageSquare,
  CheckSquare,
  BarChart3,
  Calendar,
  Zap,
  Play,
  Pause,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface WidgetData {
  i: string;
  type: "slack" | "jira" | "hubspot" | "calendar";
  title: string;
  content: React.ReactNode;
}

const InteractiveDemoSection = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [showChaosDemo, setShowChaosDemo] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [chaosStep, setChaosStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Default layouts for different breakpoints
  const defaultLayouts = {
    lg: [
      { i: "slack-1", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2 },
      { i: "jira-1", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2 },
      { i: "hubspot-1", x: 6, y: 0, w: 3, h: 3, minW: 2, minH: 2 },
      { i: "calendar-1", x: 9, y: 0, w: 3, h: 3, minW: 2, minH: 2 },
    ],
    md: [
      { i: "slack-1", x: 0, y: 0, w: 4, h: 3, minW: 2, minH: 2 },
      { i: "jira-1", x: 4, y: 0, w: 4, h: 3, minW: 2, minH: 2 },
      { i: "hubspot-1", x: 0, y: 3, w: 4, h: 3, minW: 2, minH: 2 },
      { i: "calendar-1", x: 4, y: 3, w: 4, h: 3, minW: 2, minH: 2 },
    ],
    sm: [
      { i: "slack-1", x: 0, y: 0, w: 6, h: 3, minW: 2, minH: 2 },
      { i: "jira-1", x: 0, y: 3, w: 6, h: 3, minW: 2, minH: 2 },
      { i: "hubspot-1", x: 0, y: 6, w: 6, h: 3, minW: 2, minH: 2 },
      { i: "calendar-1", x: 0, y: 9, w: 6, h: 3, minW: 2, minH: 2 },
    ],
    xs: [
      { i: "slack-1", x: 0, y: 0, w: 4, h: 3, minW: 2, minH: 2 },
      { i: "jira-1", x: 0, y: 3, w: 4, h: 3, minW: 2, minH: 2 },
      { i: "hubspot-1", x: 0, y: 6, w: 4, h: 3, minW: 2, minH: 2 },
      { i: "calendar-1", x: 0, y: 9, w: 4, h: 3, minW: 2, minH: 2 },
    ],
    xxs: [
      { i: "slack-1", x: 0, y: 0, w: 2, h: 3, minW: 2, minH: 2 },
      { i: "jira-1", x: 0, y: 3, w: 2, h: 3, minW: 2, minH: 2 },
      { i: "hubspot-1", x: 0, y: 6, w: 2, h: 3, minW: 2, minH: 2 },
      { i: "calendar-1", x: 0, y: 9, w: 2, h: 3, minW: 2, minH: 2 },
    ],
  };

  const [layouts, setLayouts] = useState(defaultLayouts);

  // Auto-start demo when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAutoPlaying && !isPaused) {
            setIsAutoPlaying(true);
            startChaosDemo();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAutoPlaying, isPaused]);

  // Chaos demo animation sequence with looping
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      let chaosInterval: NodeJS.Timeout;
      let cycleTimeout: NodeJS.Timeout;

      const startCycle = () => {
        // Start with chaos demo
        setShowChaosDemo(true);
        setShowSolution(false);
        setChaosStep(0);

        // Animate through chaos steps
        chaosInterval = setInterval(() => {
          setChaosStep((prev) => {
            if (prev >= 4) {
              return 0;
            }
            return prev + 1;
          });
        }, 1500);
      };

      startCycle();

      return () => {
        clearInterval(chaosInterval);
      };
    }
  }, [isAutoPlaying, isPaused]);

  const widgets: WidgetData[] = [
    {
      i: "slack-1",
      type: "slack",
      title: "Slack Messages",
      content: (
        <div className="space-y-3 h-full">
          <div className="flex items-start gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium text-xs">
              JD
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm text-gray-900">John Doe</p>
              <p className="text-xs text-gray-600">
                Hey team, just pushed the latest update to staging!
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium text-xs">
              AS
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm text-gray-900">Anna Smith</p>
              <p className="text-xs text-gray-600">
                Great! I'll review it this afternoon.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      i: "jira-1",
      type: "jira",
      title: "Jira Tickets",
      content: (
        <div className="space-y-2 h-full">
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-sm border border-gray-100">
            <div className="h-6 w-6 rounded-sm bg-gray-800 flex items-center justify-center text-white text-xs font-bold">
              LW
            </div>
            <div className="flex-1">
              <p className="font-medium text-xs text-gray-900">
                LW-234: Fix dashboard layout
              </p>
              <div className="flex items-center gap-1">
                <span className="px-1.5 py-0.5 bg-gray-200 text-gray-700 rounded-sm text-xs border border-gray-300">
                  In Progress
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-sm border border-gray-100">
            <div className="h-6 w-6 rounded-sm bg-gray-800 flex items-center justify-center text-white text-xs font-bold">
              LW
            </div>
            <div className="flex-1">
              <p className="font-medium text-xs text-gray-900">LW-235: Drag and drop</p>
              <div className="flex items-center gap-1">
                <span className="px-1.5 py-0.5 bg-gray-800 text-white rounded-sm text-xs">
                  Done
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      i: "hubspot-1",
      type: "hubspot",
      title: "HubSpot Deals",
      content: (
        <div className="space-y-3 h-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm text-gray-900">Acme Corp</p>
              <p className="text-xs text-gray-600">$24,000 - Proposal</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center border border-gray-200">
              <span className="text-xs font-medium">75%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm text-gray-900">Globex Inc</p>
              <p className="text-xs text-gray-600">$36,500 - Contract</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
              <span className="text-xs font-medium">90%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      i: "calendar-1",
      type: "calendar",
      title: "Google Calendar",
      content: (
        <div className="space-y-2 h-full">
          <div className="p-2 border-l-2 border-gray-800 bg-gray-50 rounded-r-sm">
            <p className="font-medium text-xs text-gray-900">Team Standup</p>
            <p className="text-xs text-gray-600">10:00 - 10:30 AM</p>
          </div>
          <div className="p-2 border-l-2 border-gray-600 bg-gray-50 rounded-r-sm">
            <p className="font-medium text-xs text-gray-900">Client Meeting</p>
            <p className="text-xs text-gray-600">1:00 - 2:00 PM</p>
          </div>
          <div className="p-2 border-l-2 border-gray-400 bg-gray-50 rounded-r-sm">
            <p className="font-medium text-xs text-gray-900">Product Review</p>
            <p className="text-xs text-gray-600">2:00 - 3:30 PM</p>
          </div>
        </div>
      ),
    },
  ];

  const onLayoutChange = useCallback((layout: any, layouts: any) => {
    setLayouts(layouts);
  }, []);

  const resetLayout = () => {
    setLayouts(defaultLayouts);
  };

  const startChaosDemo = () => {
    setShowChaosDemo(true);
    setShowSolution(false);
    setChaosStep(0);
  };

  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      setIsPaused(!isPaused);
    } else {
      setIsAutoPlaying(true);
      setIsPaused(false);
      // Don't call startChaosDemo here as the useEffect will handle the cycle
    }
  };

  const resetDemo = () => {
    setShowChaosDemo(false);
    setShowSolution(false);
    setChaosStep(0);
    setIsAutoPlaying(false);
    setIsPaused(false);
  };

  const filteredWidgets =
    activeTab === "all"
      ? widgets
      : widgets.filter((widget) => widget.type === activeTab);

  const filteredLayouts = {
    lg: layouts.lg.filter((item) =>
      filteredWidgets.some((widget) => widget.i === item.i),
    ),
    md: layouts.md.filter((item) =>
      filteredWidgets.some((widget) => widget.i === item.i),
    ),
    sm: layouts.sm.filter((item) =>
      filteredWidgets.some((widget) => widget.i === item.i),
    ),
    xs: layouts.xs.filter((item) =>
      filteredWidgets.some((widget) => widget.i === item.i),
    ),
    xxs: layouts.xxs.filter((item) =>
      filteredWidgets.some((widget) => widget.i === item.i),
    ),
  };

  const getWidgetColor = (type: string) => {
    const colors = {
      slack: "from-purple-500 to-purple-600",
      jira: "from-blue-500 to-blue-600",
      hubspot: "from-orange-500 to-orange-600",
      calendar: "from-green-500 to-green-600",
    };
    return colors[type as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <section
      id="demo"
      className=" py-20 px-4 bg-gradient-to-b from-white to-gray-50"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
            Experience the Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-light">
            See how Letwrk solves the chaos of managing multiple tools and
            transforms your workflow into a unified, customizable dashboard.
          </p>

          {/* Demo Control Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={toggleAutoPlay}
                className="bg-black text-white hover:bg-gray-800 px-6 py-3 font-light border-0"
              >
                {isAutoPlaying && !isPaused ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" />
                    Pause Demo
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    {isAutoPlaying ? "Resume Demo" : "Start Auto Demo"}
                  </>
                )}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={resetDemo}
                variant="outline"
                className="px-6 py-3 font-light border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Full-Screen Demo Sections */}
        <div className="mb-12 relative">
          {/* Chaos Demo Section - Screen-like */}
          <AnimatePresence mode="wait">
            {showChaosDemo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="border-gray-300 bg-gray-50 p-6 min-h-[50vh]">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                      The Problem: Tab Chaos & Context Switching
                    </h3>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                      Watch how overwhelming it gets when managing multiple tools...
                    </p>
                  </div>

                  {/* Simulated Browser Window - More Screen-like */}
                  <div className="bg-white rounded-sm border border-gray-300 max-w-4xl mx-auto overflow-hidden">
                    {/* Browser Header */}
                    <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-sm px-3 py-1 mx-4 text-xs text-gray-500 font-light">
                        https://workspace-chaos.com
                      </div>
                    </div>

                    {/* Browser Tabs */}
                    <div className="bg-gray-100 px-2 py-1 border-b border-gray-200">
                      <div className="flex gap-1 overflow-hidden">
                        {[
                          {
                            name: "Slack",
                            icon: MessageSquare,
                            active: chaosStep === 0,
                          },
                          {
                            name: "Jira",
                            icon: CheckSquare,
                            active: chaosStep === 1,
                          },
                          {
                            name: "HubSpot",
                            icon: BarChart3,
                            active: chaosStep === 2,
                          },
                          {
                            name: "Calendar",
                            icon: Calendar,
                            active: chaosStep === 3,
                          },
                          {
                            name: "Email",
                            icon: MessageSquare,
                            active: chaosStep === 4,
                          },
                          { name: "Analytics", icon: BarChart3, active: false },
                          { name: "GitHub", icon: CheckSquare, active: false },
                          { name: "Notion", icon: MessageSquare, active: false },
                        ].map((tab, index) => {
                          const Icon = tab.icon;
                          return (
                            <motion.div
                              key={tab.name}
                              className={`flex items-center gap-1 px-3 py-1 rounded-t-sm text-xs font-light transition-all ${
                                tab.active
                                  ? "bg-white text-gray-900 border-t border-l border-r border-gray-200 z-10"
                                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                              } ${chaosStep > 0 && !tab.active ? "tab-chaos" : ""}`}
                              animate={tab.active ? { scale: [1, 1.05, 1] } : {}}
                              transition={{ duration: 0.3 }}
                            >
                              <Icon className="h-3 w-3" />
                              <span className="hidden sm:inline">{tab.name}</span>
                              {index > 4 && (
                                <X className="h-2 w-2 ml-1 opacity-50" />
                              )}
                            </motion.div>
                          );
                        })}
                        <div className="text-xs text-gray-500 px-2 py-1 chaos-shake font-light">
                          +15 more tabs...
                        </div>
                      </div>
                    </div>

                    {/* Browser Content - Screen-like */}
                    <div className="bg-white p-6 h-[300px] relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            className="text-6xl mb-4"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          >
                            😵‍💫
                          </motion.div>
                          <p className="text-xl font-light text-gray-900 mb-2">
                            Switching between {chaosStep + 1} different tools...
                          </p>
                          <p className="text-sm text-gray-500 font-light">
                            Lost context • Missed notifications • Decreased productivity
                          </p>
                        </div>
                      </div>

                      {/* Floating chaos elements */}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-6 h-6 bg-gray-300 rounded-full opacity-30"
                          style={{
                            left: `${Math.random() * 80 + 10}%`,
                            top: `${Math.random() * 80 + 10}%`,
                          }}
                          animate={{
                            x: [0, Math.random() * 30 - 15],
                            y: [0, Math.random() * 30 - 15],
                            scale: [1, 1.2, 0.8, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Solution Demo - Screen-like */}
          <AnimatePresence mode="wait">
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-6xl mb-4"
              >
                ✨
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                The Solution: One Unified Dashboard
              </h3>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                All your tools in one place, customizable to your workflow!
              </p>
            </div>
          </AnimatePresence>

          {/* Floating Down Arrow Button */}
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              onClick={() => {
                const demoSection = document.querySelector('.interactive-demo-grid');
                demoSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors border-0 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-6 w-6 group-hover:animate-bounce" />
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {showInstructions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-6 border-gray-200 bg-gray-50">
                <CardContent className="p-4 flex items-start justify-between">
                  <div className="flex gap-3">
                    <Info className="h-5 w-5 text-gray-700 mt-0.5" />
                    <div>
                      <p className="font-light text-gray-900">
                        Try it yourself!
                      </p>
                      <p className="text-sm text-gray-600 font-light">
                        Drag widgets to rearrange them, resize by dragging
                        corners, and use tabs to filter by integration type.
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowInstructions(false)}
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="bg-white rounded-sm border border-gray-200 overflow-hidden interactive-demo-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="p-6 border-b bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Tabs
                defaultValue="all"
                value={activeTab}
                onValueChange={setActiveTab}
              >
                <TabsList className="grid grid-cols-5 w-full max-w-md bg-white shadow-sm">
                  <TabsTrigger value="all" className="text-xs">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="slack" className="text-xs">
                    Slack
                  </TabsTrigger>
                  <TabsTrigger value="jira" className="text-xs">
                    Jira
                  </TabsTrigger>
                  <TabsTrigger value="hubspot" className="text-xs">
                    HubSpot
                  </TabsTrigger>
                  <TabsTrigger value="calendar" className="text-xs">
                    Calendar
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <motion.button
                onClick={resetLayout}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-sm transition-colors font-light"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className="h-4 w-4" />
                Reset Layout
              </motion.button>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[600px]">
            <ResponsiveGridLayout
              className="layout"
              layouts={filteredLayouts}
              onLayoutChange={onLayoutChange}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
              cols={{ lg: 12, md: 8, sm: 6, xs: 4, xxs: 2 }}
              rowHeight={60}
              isDraggable={true}
              isResizable={true}
              margin={[16, 16]}
              containerPadding={[0, 0]}
              useCSSTransforms={true}
              compactType="vertical"
              preventCollision={false}
              draggableHandle=".drag-handle"
              resizeHandles={['se']}
              autoSize={true}
            >
              {filteredWidgets.map((widget) => (
                <div
                  key={widget.i}
                  className="bg-white rounded-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
                  style={{ height: '100%' }}
                >
                  <div
                    className="drag-handle h-8 bg-white border-b border-gray-100 flex items-center justify-between px-3 cursor-move select-none"
                  >
                    <span className="text-gray-900 font-medium text-xs pointer-events-none">
                      {widget.title}
                    </span>
                    <div className="flex gap-1 pointer-events-none">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                  <div className="p-3 overflow-hidden bg-white" style={{ height: 'calc(100% - 32px)' }}>
                    {widget.content}
                  </div>
                </div>
              ))}
            </ResponsiveGridLayout>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg font-light border-0 transition-all duration-300"
            >
              Try Letwrk For Free
            </Button>
          </motion.div>
          <p className="text-sm text-gray-500 mt-3 font-light">
            No credit card required • Setup in 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
