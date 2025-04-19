import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const SidebarLayout = ({ SidebarComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="container min-h-[70vh] relative">
      <div className="md:hidden pt-2 flex justify-end">
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            aria-label="Open Sidebar"
            className="focus:outline-none "
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl text-dark-text" />
          </button>
        )}
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
      <div className="grid grid-cols-12 h-full">
        <aside
          className={`
            fixed md:relative z-50 top-0 left-0 h-full bg-bg-color
            w-3/4  md:w-full
            border-r border-border-color
            p-4 md:pt-14 md:p-0
            transition-transform duration-300 ease-in-out
            ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0
            md:col-span-3
          `}
        >
          <div className="md:hidden flex justify-end mb-4">
            <button
              onClick={closeSidebar}
              aria-label="Close Sidebar"
              className="focus:outline-none"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-2xl text-dark-text"
              />
            </button>
          </div>
          <SidebarComponent onItemClick={closeSidebar}/>
        </aside>
        <main className="col-span-12 md:col-span-9 pt-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
