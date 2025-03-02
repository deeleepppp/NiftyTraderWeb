import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/scroll1.png",
  "/images/scroll2.png",
  "/images/scroll3.png"
];

const AutoScrollGallery = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  return (
    <div
      className="relative bg-gray-100 w-full overflow-hidden"
      onMouseEnter={() => setIsScrolling(true)}
      onMouseLeave={() => setIsScrolling(false)}
    >
      <div className="flex justify-center">
        <motion.div
          className="flex space-x-5"
          animate={isScrolling ? { x: ["0%", "-100%"] } : {}}
          transition={{
            repeat: isScrolling ? Infinity : 0,
            duration: 10,
            ease: "linear"
          }}
        >
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Stock Screener"
              className="w-200 h-80 object-cover rounded-lg"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AutoScrollGallery;
