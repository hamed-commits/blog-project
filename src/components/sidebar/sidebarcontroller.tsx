"use client";
import React, { useState } from "react";
import { Sidebar } from "lucide-react";
import { AppSidebar } from "./appsidebar";

export default function SidebarController() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div onClick={toggleSidebar} className="cursor-pointer z-50">
        <Sidebar className="text-primary" />
      </div>
      <AppSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
