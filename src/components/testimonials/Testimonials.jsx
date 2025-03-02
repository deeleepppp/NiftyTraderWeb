import React, { useRef, useEffect } from "react";
import testimonials from "./testimonialsData";


const Testimonials = () => {


  return (
    <section id="AutoScroll" className="py-12 bg-white">
      <h2 className="text-2xl font-bold font-['Poppins'] text-gray-800 text-center mb-8">
        Client Testimonials
      </h2>

     
      <div className="overflow-hidden whitespace-nowrap mb-8 " >
        <div className="inline-flex gap-8 pb-2">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="inline-block w-150 bg-gray-100 rounded-xl p-4  shadow-md shadow-gray-400"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm break-words overflow-hidden text-ellipsis whitespace-normal">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-8 pb-2">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="inline-block w-150 bg-gray-100 rounded-xl p-4  shadow-md shadow-gray-400"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm break-words overflow-hidden text-ellipsis whitespace-normal">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;