import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineShoppingCart, MdNotificationsActive } from "react-icons/md";
import SearchFilter from "../searchFilter/SearchFilter";
import DropdownMenus from "../dropdownMenus/DropdownMenus";

const Navbar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isScreenerOpen, setIsScreenerOpen] = useState(false);
  const [isBacktestingOpen, setIsBacktestingOpen] = useState(false);
  const [isMenubarOpen, setIsMenubarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode,setDarkMode] = useState(false)

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
    setMobileMenuOpen(false);
  };
  

  return (
    <div className="bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
        
          <div className="flex items-center gap-4">
            <img
              src="/images/Logo.png"
              className="h-8 w-32 sm:h-10 sm:w-40"
              alt="Logo"
            />
            <div className="hidden md:block">
              <SearchFilter />
            </div>
          </div>

     
          <button
            className="p-2 text-gray-700 md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <IoMdMenu className="h-6 w-6" />
          </button>

         
          <div
            className={`absolute left-0 top-16 w-full bg-white md:static md:flex md:w-auto md:items-center ${
              isMobileMenuOpen ? "block z-50" : "hidden"
            } md:block`}
          >
            <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:gap-6 md:p-0">
            
              <span
                className="cursor-pointer text-sm md:text-base"
                onClick={() => {
                  setIsBacktestingOpen(!isBacktestingOpen);
                  toggleMenu("backtesting");
                }}
              >
                Backtesting
              </span>
              <span
                className="cursor-pointer text-sm md:text-base"
                onClick={() => {
                  setIsScreenerOpen(!isScreenerOpen);
                  toggleMenu("screener");
                }}
              >
                Screener
              </span>
              <span
                className="cursor-pointer text-sm md:text-base"
                onClick={() => {
                  setIsOptionsOpen(!isOptionsOpen);
                  toggleMenu("options");
                }}
              >
                Options
              </span>
              <span
                className="cursor-pointer text-sm md:text-base"
                onClick={() => {
                  setIsResourcesOpen(!isResourcesOpen);
                  toggleMenu("resources");
                }}
              >
                Resources
              </span>

             
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex items-center gap-2 text-sm text-yellow-500">
                  <img src="./images/Vector.png" className="h-4 w-4" alt="" />
                  <span className="text-blue-600 font-bold">Refer and Earn</span>
                </div>
                <IoMdMenu
                  onClick={() => {
                    setIsMenubarOpen(!isMenubarOpen);
                    toggleMenu("menubar");
                  }}
                  className="h-5 w-5 cursor-pointer text-gray-700"
                />
                <MdOutlineShoppingCart className="h-5 w-5 text-gray-700" />
                <MdNotificationsActive
                  onClick={() => {
                    setIsNotificationOpen(!isNotificationOpen);
                    toggleMenu("notifications");
                  }}
                  className="h-5 w-5 cursor-pointer text-gray-700"
                />
                <img
                  src="./images/user.png"
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                    toggleMenu("profile");
                  }}
                  alt="User"
                  className="h-6 w-6 cursor-pointer"
                />
               
                  <div onClick={() => setDarkMode(!darkMode)} className="h-5 w-10 rounded-full bg-gray-300 dark:bg-gray-700 p-0.5 flex items-center">
                    <div
                      className={`h-4 w-4 rounded-full transition-all duration-300 ${
                        darkMode ? "bg-blue-500 ml-5" : "bg-yellow-500"
                      }`}
                    ></div>
                  </div>
                  <span>{darkMode ? "Dark" : "Light"}</span>
             
              </div>
            </div>
          </div>
        </div>
      </header>


      <div className="relative z-40">
        <DropdownMenus
          isResourcesOpen={isResourcesOpen}
          isOptionsOpen={isOptionsOpen}
          openMenu={openMenu}
          isScreenerOpen={isScreenerOpen}
          isBacktestingOpen={isBacktestingOpen}
          isMenubarOpen={isMenubarOpen}
          isNotificationOpen={isNotificationOpen}
          isProfileOpen={isProfileOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;