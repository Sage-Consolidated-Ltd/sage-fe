// layouts/DashboardLayout.tsx
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../shared/Topbar";
import { useSidebarStore } from "../store/sidebarStore";
import Sidebar from "../shared/Sidebar";
import { getImageSrc } from "../utils/imageUtils";

const DashboardLayout = () => {
  const { isSidebarOpen, setIsMobile, toggleSidebar } = useSidebarStore();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [setIsMobile]);

  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      <Sidebar />
      <main className="flex-1 overflow-auto custom-scrollbar">
        <div className="flex flex-col">
          <div className="sticky top-0 z-80">
            <Topbar toggleSidebar={toggleSidebar} />
          </div>
          <div className="py-6 px-4 relative">
            {/* Gaussian Blur Blob */}
            <div
              className="absolute -top-[25px] -left-[82px] w-[1063px] h-[498px] bg-[#e0c8e8]/60 rounded-full blur-[300px] pointer-events-none rotate-[8.45]"
              aria-hidden="true"
            />

            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-[1063px] h-[428px] bg-[#f6f7fc] rounded-full blur-[300px] pointer-events-none rotate-[8.45]"
              aria-hidden="true"
            />

            <div
              className="absolute -top-[102px] right-0 w-[895px] h-[498px] bg-[#FDE1B9]/60 rounded-full blur-[300px] pointer-events-none rotate-[8.45]"
              aria-hidden="true"
            />

            <div className="relative">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
