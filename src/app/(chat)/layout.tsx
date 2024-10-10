"use client";

import { ReactNode, useState } from "react";
import Header from "../components/header";
import SideBar from "../components/sideBar";

export default function ChatLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[auto,1fr,auto] gap-2 py-4 px-8">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex w-full">
        {isSidebarOpen && <SideBar/>}
        
        <div className="flex flex-grow h-full justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
