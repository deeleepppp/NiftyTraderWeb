import React from "react";
import ResourcesMenu from "../resourcesMenu/ResourcesMenu";
import BacktestingMenu from "../backtestingMenu/BacktestingMenu";
import ScreenerMenu from "../screenerMenu/ScreenerMenu";
import OptionsMenu from "../optionsMenu/OptionsMenu";
import MenuBar from "../menuBar/MenuBar";
import NotificationsMenu from "../notificationsMenu/NotificationsMenu";
import ProfileMenu from "../profileMenu/ProfileMenu";

const DropdownMenus = ({
  isResourcesOpen,
  isOptionsOpen,
  openMenu,
  isScreenerOpen,
  isBacktestingOpen,
  isMenubarOpen,
  isNotificationOpen,
  isProfileOpen
}) => {
  return (
   <div className="m-2 sm:mt-4">
      {openMenu === "resources" && <ResourcesMenu isResourcesOpen={isResourcesOpen} />}
      {openMenu === "backtesting" && <BacktestingMenu isBacktestingOpen={isBacktestingOpen} />}
      {openMenu === "screener" && <ScreenerMenu isScreenerOpen={isScreenerOpen} />}
      {openMenu === "options" && <OptionsMenu isOptionsOpen={isOptionsOpen} />}
      {openMenu === "menubar" && <MenuBar isMenubarOpen={isMenubarOpen} />}
      {openMenu === "notifications" && <NotificationsMenu isNotificationOpen={isNotificationOpen} />}
      {openMenu === "profile" && <ProfileMenu isProfileOpen={isProfileOpen} />}
    </div>
  );
};

export default DropdownMenus;
