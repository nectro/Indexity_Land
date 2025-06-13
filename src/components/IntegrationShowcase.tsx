"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IntegrationProps {
  name: string;
  logo: string;
  description: string;
  color: string;
}

const IntegrationCard = ({
  integration = {
    name: "Integration",
    logo: "/placeholder.svg",
    description: "Connect and integrate with your favorite tools",
    color: "#4f46e5",
  },
}: {
  integration: IntegrationProps;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer"
          >
            <Card className="bg-white border border-gray-200 hover:border-gray-300 overflow-hidden h-40 w-full transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-sm bg-gray-100">
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg font-light text-center text-gray-900">
                  {integration.name}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="p-4 max-w-xs bg-white border border-gray-200 text-gray-900">
          <p className="font-light">{integration.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const IntegrationShowcase = () => {
  const integrations: IntegrationProps[] = [
    {
      name: "Slack",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
      description:
        "Chat with your team, receive notifications, and respond to messages without leaving your dashboard.",
      color: "#4A154B",
    },
    {
      name: "Jira",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      description:
        "Track issues, manage projects, and follow sprint progress with real-time Jira updates.",
      color: "#0052CC",
    },
    {
      name: "HubSpot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hubspot/hubspot-original.svg",
      description:
        "Monitor your sales pipeline, track leads, and manage customer relationships all in one place.",
      color: "#FF7A59",
    },
    {
      name: "Google Calendar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
      description:
        "View upcoming meetings, schedule events, and manage your time efficiently with calendar integration.",
      color: "#4285F4",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      description:
        "Stay on top of pull requests, issues, and code reviews with GitHub integration.",
      color: "#24292E",
    },
    {
      name: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      description:
        "Access your notes, documents, and knowledge base directly from your dashboard.",
      color: "#000000",
    },
    {
      name: "Trello",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
      description:
        "Visualize your tasks and projects with Trello boards integrated into your workspace.",
      color: "#0079BF",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      description:
        "Access design files and collaborate with designers without switching contexts.",
      color: "#F24E1E",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <IntegrationCard integration={integration} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 font-light">
            And many more integrations available to customize your workspace
          </p>
          <motion.button
            className="bg-black text-white px-8 py-3 rounded-sm font-light hover:bg-gray-800 transition-all duration-300 border-0"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Integrations
          </motion.button>
        </motion.div>
    </div>
  );
};

export default IntegrationShowcase;
