import React from "react";
import notificationsData from "./notificationsData";

const NotificationsMenu = ({ isNotificationOpen }) => {
  return (
    isNotificationOpen && (
      <div id='notification' className=" z-10 absolute left-0 sm:left-auto sm:right-2 w-full sm:w-96 max-h-64 overflow-y-auto bg-white shadow-lg rounded-lg p-4">
        {notificationsData.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-3 hover:bg-blue-100 rounded-lg transition"
          >
       
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
              {item.avatar}
            </div>

            <div className="flex-1">
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-xs text-gray-400 mt-1">
                {item.time} | {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default NotificationsMenu;
