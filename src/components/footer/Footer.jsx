import React from "react";
import footerData from "./footerData";


const Footer = () => {
  return (
    <footer
      className="relative text-white py-10 px-5 mt-4"
      style={{
        backgroundImage: `url(${footerData.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {footerData.sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, idx) => (
                <li className="hover:text-blue-500 cursor-pointer" key={idx}>
                  &gt; {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-semibold text-lg mb-3">{footerData.newsletter.title}</h3>
          <p className="text-sm mb-3">{footerData.newsletter.description}</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white px-4 py-2 text-gray-600 rounded-l-md outline-none"
            />
            <button className="cursor-pointer bg-blue-500 px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3 mt-4">
            <img src={footerData.appLinks.googlePlay} alt="Google Play" className="cursor-pointer w-28" />
            <img src={footerData.appLinks.appStore} alt="App Store" className="cursor-pointer w-28" />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-5 flex flex-col items-center">
        <div className="flex gap-4">
          {footerData.socialMedia.map((social, index) => (
            <span key={index} className="w-8 h-8 flex items-center justify-center">
              <img src={social.icon} alt={social.platform} className="w-6 cursor-pointer" />
            </span>
          ))}
        </div>
        <p className="text-sm mt-3">
          {footerData.copyright.text} {footerData.copyright.version}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
