import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineShoppingCart, MdNotificationsActive } from "react-icons/md";
import SearchFilter from "../searchFilter/SearchFilter";
import DropdownMenus from "../dropdownMenus/DropdownMenus";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <img
              src="public/images/logo.png"
              className="h-8 w-32 sm:h-10 sm:w-40"
              alt="Logo"
            />
            <div className="hidden md:block">
              <SearchFilter />
            </div>
          </div>

          <button
            className="p-2 text-gray-700 dark:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <IoMdMenu className="h-6 w-6" />
          </button>

          <div
            className={`absolute left-0 top-16 w-full bg-white dark:bg-gray-900 md:static md:flex md:w-auto md:items-center ${
              isMobileMenuOpen ? "block z-50" : "hidden"
            } md:block`}
          >
            <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:gap-6 md:p-0">
              <span className="cursor-pointer text-sm md:text-base">
                Backtesting
              </span>
              <span className="cursor-pointer text-sm md:text-base">
                Screener
              </span>
              <span className="cursor-pointer text-sm md:text-base">
                Options
              </span>
              <span className="cursor-pointer text-sm md:text-base">
                Resources
              </span>

              <div className="flex items-center gap-3 md:gap-4">
                <MdOutlineShoppingCart className="h-5 w-5" />
                <MdNotificationsActive className="h-5 w-5" />
                <img
                  src="./images/user.png"
                  alt="User"
                  className="h-6 w-6 cursor-pointer"
                />

                <div
                  className="flex items-center gap-1 text-sm cursor-pointer"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <div className="h-5 w-10 rounded-full bg-gray-300 dark:bg-gray-700 p-0.5 flex items-center">
                    <div
                      className={`h-4 w-4 rounded-full transition-all duration-300 ${
                        darkMode ? "bg-blue-500 ml-5" : "bg-gray-500"
                      }`}
                    ></div>
                  </div>
                  <span>{darkMode ? "Dark" : "Light"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <DropdownMenus />
    </div>
  );
};

export default Navbar;
