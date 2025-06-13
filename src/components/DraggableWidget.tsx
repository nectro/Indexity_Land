"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Calendar, BarChart3, CheckSquare } from "lucide-react";

type WidgetType = "slack" | "jira" | "hubspot" | "calendar";

interface DraggableWidgetProps {
  type?: WidgetType;
  title?: string;
  isDragging?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
}

const DraggableWidget = ({
  type = "slack",
  title = "Widget",
  isDragging = false,
  onDragStart,
  onDragEnd,
}: DraggableWidgetProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Widget configuration based on type
  const widgetConfig = {
    slack: {
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
      color: "bg-blue-50 border-blue-200",
      badge: "Slack",
      badgeColor: "bg-blue-100 text-blue-800",
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium">
              JD
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">
                Hey, did you see the latest design updates?
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium">
              AS
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Alice Smith</p>
              <p className="text-xs text-gray-500">
                I've updated the project timeline in Jira
              </p>
            </div>
          </div>
        </div>
      ),
    },
    jira: {
      icon: <CheckSquare className="h-5 w-5 text-indigo-500" />,
      color: "bg-indigo-50 border-indigo-200",
      badge: "Jira",
      badgeColor: "bg-indigo-100 text-indigo-800",
      content: (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
              <p className="text-sm">LW-234: Update dashboard UI</p>
            </div>
            <Badge variant="outline" className="text-xs">
              In Progress
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <p className="text-sm">LW-235: Fix drag functionality</p>
            </div>
            <Badge variant="outline" className="text-xs">
              Done
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-400"></div>
              <p className="text-sm">LW-236: Add new integrations</p>
            </div>
            <Badge variant="outline" className="text-xs">
              Blocked
            </Badge>
          </div>
        </div>
      ),
    },
    hubspot: {
      icon: <BarChart3 className="h-5 w-5 text-orange-500" />,
      color: "bg-orange-50 border-orange-200",
      badge: "HubSpot",
      badgeColor: "bg-orange-100 text-orange-800",
      content: (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">Acme Corp</p>
            <p className="text-sm font-bold text-green-600">$24,000</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <p>Deal stage: Proposal</p>
            <p>75%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">TechStart Inc</p>
            <p className="text-sm font-bold text-green-600">$18,500</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <p>Deal stage: Negotiation</p>
            <p>40%</p>
          </div>
        </div>
      ),
    },
    calendar: {
      icon: <Calendar className="h-5 w-5 text-green-500" />,
      color: "bg-green-50 border-green-200",
      badge: "Calendar",
      badgeColor: "bg-green-100 text-green-800",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 rounded-md bg-blue-50">
            <div className="h-10 w-2 bg-blue-500 rounded"></div>
            <div>
              <p className="text-sm font-medium">Team Standup</p>
              <p className="text-xs text-gray-500">9:30 - 10:00 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md bg-purple-50">
            <div className="h-10 w-2 bg-purple-500 rounded"></div>
            <div>
              <p className="text-sm font-medium">Client Meeting</p>
              <p className="text-xs text-gray-500">11:00 - 12:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md bg-orange-50">
            <div className="h-10 w-2 bg-orange-500 rounded"></div>
            <div>
              <p className="text-sm font-medium">Product Review</p>
              <p className="text-xs text-gray-500">2:00 - 3:30 PM</p>
            </div>
          </div>
        </div>
      ),
    },
  };

  const config = widgetConfig[type];

  const handleDragStart = (e: React.DragEvent) => {
    // Store the widget type in the drag event
    e.dataTransfer.setData("widgetType", type);
    // Set a custom drag image if needed
    // e.dataTransfer.setDragImage(image, xOffset, yOffset);
    if (onDragStart) onDragStart(e);
  };

  return (
    <Card
      className={`w-full max-w-[300px] cursor-grab ${config.color} ${isDragging ? "opacity-50 shadow-lg" : "opacity-100"} transition-all duration-200`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
    >
      <CardHeader className="p-3 pb-0 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          {config.icon}
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </div>
        <Badge className={`${config.badgeColor} text-xs`}>{config.badge}</Badge>
      </CardHeader>
      <CardContent className="p-3">{config.content}</CardContent>
    </Card>
  );
};

export default DraggableWidget;
