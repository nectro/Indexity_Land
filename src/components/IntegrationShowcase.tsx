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
                    className="w-10 h-10 object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-base font-light text-center text-gray-900">
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
      logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/168_Hubspot_logo_logos-512.png",
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
      name: "ClickUp",
      logo: "https://e7.pngegg.com/pngimages/221/620/png-clipart-clickup-logo-thumbnail-tech-companies-thumbnail.png",
      description:
        "Manage tasks, projects, and team collaboration with ClickUp's all-in-one workspace.",
      color: "#7B68EE",
    },
    {
      name: "Canny",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaX9vrG6AArX1vJJJ3jIBzVxsh-gBCoKoaA0DrHjyYQKQqq6D-HIcSfMFZK560HevR1Vs&usqp=CAU",
      description:
        "Collect and prioritize user feedback to build better products with Canny integration.",
      color: "#5A67D8",
    },
    {
      name: "Zendesk",
      logo: "https://w7.pngwing.com/pngs/687/230/png-transparent-zendesk-logos-brands-icon-thumbnail.png",
      description:
        "Manage customer support tickets and provide excellent customer service seamlessly.",
      color: "#03363D",
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
            We're not stopping here — loads of cool integrations and handcrafted in-house tools are on the way!
          </p>
          {/* <motion.button
            className="bg-black text-white px-6 py-2 rounded-sm text-sm font-light hover:bg-gray-800 transition-all duration-300 border-0"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Integrations
          </motion.button> */}
        </motion.div>
    </div>
  );
};

export default IntegrationShowcase;
