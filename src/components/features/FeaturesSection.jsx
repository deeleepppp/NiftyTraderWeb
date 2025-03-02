import React from "react";
import featuresData from "./featuresData";

const FeaturesSection = () => {
  return (
    <div className="p-6 md:p-20">
      <div className="cursor-pointer flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
        {featuresData.map((feature, index) => (
          <div key={index} id="scrollFeatures" className="min-w-[250px] md:w-auto flex flex-col items-center text-center lg:p-6 rounded-lg p-4 hover:text-blue-500 transition-colors duration-300">
            <div className="bg-blue-50 grayscale p-3 rounded-full mb-4 hover:grayscale-0 ">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-500">{feature.title}</h3>
            <p className="text-gray-600 hover:text-blue-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
