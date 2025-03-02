import React from "react";
import profileData from "./profileData";

const ProfileMenu = ({ isProfileOpen }) => {
  return (
    isProfileOpen && (
      <div className="absolute z-10 left-0 sm:left-auto sm:right-4 w-full sm:w-60 bg-white shadow-lg rounded-lg p-4">
        {profileData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-sky-200 active:bg-sky-300 rounded-lg cursor-pointer transition"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    )
  );
};

export default ProfileMenu;
