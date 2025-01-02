import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // Import useLocation
import TopNavBar from "../components/TopNavbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

const Layout = () => {
  const location = useLocation(); // Get the current route location

  // Determine the background color based on the current route
  const dynamicBgColor = location.pathname === "/" ? "#191919" : "#2B2B2B";

  return (
    <div className="flex flex-col min-h-screen">
      {/* TopNavBar with dynamic background color */}
        <TopNavBar />

      {/* Main Content Area */}
      <div className="flex-1">
        <Outlet /> {/* This is where your page content will render */}
      </div>

      {/* Footer - Always at the bottom */}
      <Footer />

      {/* BottomNav - Show only on screens smaller than 1024px and fixed at the bottom */}
      <div className="lg:hidden fixed bottom-0 w-full z-50">
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
