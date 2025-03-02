import React from 'react';
import resourcesData from './resourcesData';

const ResourcesMenu = ({ isResourcesOpen }) => {
  return (
    isResourcesOpen && (
      <div className="bg-white text-black p-6 md:p-10">
        <div className="absolute z-10 bg-white flex flex-wrap p-10 gap-6">
          {resourcesData.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-blue-600 mb-2">{section.category}</h3>
              <ul className="text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx} className="hover:text-blue-500 cursor-pointer mb-1 text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ResourcesMenu;
