"use client";

import React, { useState, useCallback, useEffect } from "react";
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

  // Chaos demo animation sequence
  useEffect(() => {
    if (showChaosDemo && !showSolution) {
      const interval = setInterval(() => {
        setChaosStep((prev) => {
          if (prev >= 4) {
            setShowSolution(true);
            return 0;
          }
          return prev + 1;
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [showChaosDemo, showSolution]);

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

  const resetDemo = () => {
    setShowChaosDemo(false);
    setShowSolution(false);
    setChaosStep(0);
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
      className="py-20 px-4 bg-gradient-to-b from-white to-gray-50"
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
                onClick={startChaosDemo}
                className="bg-black text-white hover:bg-gray-800 px-6 py-3 font-light border-0"
                disabled={showChaosDemo}
              >
                <Zap className="mr-2 h-4 w-4" />
                Show the Problem
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

        {/* Chaos Demo Section */}
        <AnimatePresence>
          {showChaosDemo && !showSolution && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="mb-12"
            >
              <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-2">
                    The Problem: Tab Chaos & Context Switching
                  </h3>
                  <p className="text-red-700">
                    Watch how overwhelming it gets when you need to manage
                    multiple tools...
                  </p>
                </div>

                {/* Simulated Browser Tabs */}
                <div className="bg-gray-100 rounded-t-lg p-2 mb-4">
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
                      { name: "Zoom", icon: MessageSquare, active: false },
                    ].map((tab, index) => {
                      const Icon = tab.icon;
                      return (
                        <motion.div
                          key={tab.name}
                          className={`flex items-center gap-1 px-3 py-2 rounded-t-md text-xs font-medium transition-all ${
                            tab.active
                              ? "bg-white text-blue-600 shadow-md z-10"
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
                    <div className="text-xs text-gray-500 px-2 py-2 chaos-shake">
                      +12 more tabs...
                    </div>
                  </div>
                </div>

                {/* Chaotic Content */}
                <div className="bg-white rounded-b-lg p-4 min-h-[300px] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="text-6xl mb-4"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        😵‍💫
                      </motion.div>
                      <p className="text-lg font-medium text-gray-700 mb-2">
                        Constantly switching between {chaosStep + 1} different
                        tools...
                      </p>
                      <p className="text-sm text-gray-500">
                        Lost context • Missed notifications • Decreased
                        productivity
                      </p>
                    </div>
                  </div>

                  {/* Floating chaos elements */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-red-200 rounded-full opacity-30"
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                      }}
                      animate={{
                        x: [0, Math.random() * 40 - 20],
                        y: [0, Math.random() * 40 - 20],
                        scale: [1, 1.2, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Solution Demo */}
        <AnimatePresence>
          {showSolution && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <Card className="border-green-200 bg-gradient-to-r from-green-50 to-blue-50 p-6">
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl mb-4"
                  >
                    ✨
                  </motion.div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    The Solution: One Unified Dashboard
                  </h3>
                  <p className="text-green-700">
                    All your tools in one place, customizable to your workflow!
                  </p>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showInstructions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-6 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-4 flex items-start justify-between">
                  <div className="flex gap-3">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">
                        Try it yourself!
                      </p>
                      <p className="text-sm text-blue-700">
                        Drag widgets to rearrange them, resize by dragging
                        corners, and use tabs to filter by integration type.
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowInstructions(false)}
                    className="text-blue-700 hover:text-blue-900 hover:bg-blue-100"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="bg-white rounded-sm border border-gray-200 overflow-hidden"
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
