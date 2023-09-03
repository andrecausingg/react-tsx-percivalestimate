import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/images/logo/percivalestimate-logo.png";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BiCopyright } from "react-icons/bi";
import Contact from "../contact-us/Contact";

const Footer: React.FC = () => {
  const location = useLocation(); // Get current location
  const [isContactContainer, setContactContainer] = useState<boolean>(false);

  useEffect(() => {
    // Scroll to the top of the page when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  const socMedLinks = {
    facebook: "https://web.facebook.com/PercivalEstimate/",
    linkedin: "https://ph.linkedin.com/company/percival-estimate",
  };

  const handleContact = () => {
    if (!isContactContainer) {
      document.body.style.overflow = "hidden";
    }
    setContactContainer(true);
  };

  return (
    <>
      <div className="lg:border-t-[30px] border-t-[#001B1B]"></div>
      {/* Container */}
      <div className="mx-auto md:max-w-3xl xl:max-w-6xl py-4 px-6 lg:px-0 lg:py-8 text-greenClient font-gilroyLight">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Link to="#" className="flex">
            <img
              src={logo}
              alt="Percivalestimate Logo"
              className="text-center w-[20px] h-[22px]"
            />

            <div className="text-start lg:text-end ml-[2px]">
              <div className="flex flex-col item-center">
                <span className="text-l font-gilroyLight">
                  percival
                  <span className=" font-gilroyExtraBold font-black ">
                    estimate
                  </span>
                </span>
                <span className="text-[10px] -mt-2 text-orangeClient text-end">
                  Master of Measurement
                </span>
              </div>
            </div>
          </Link>

          {/* Social Media Mobile */}
          <div className="flex items-center lg:hidden">
            <Link target="_blank" to={socMedLinks.facebook}>
              <FaFacebookF className="w-4 h-4 text-[#001B1B] cursor-pointer hover:text-orangeClient ease-in duration-300" />{" "}
            </Link>
            <Link target="_blank" to={socMedLinks.linkedin}>
              <FaLinkedinIn className="w-5 h-5 text-[#001B1B] cursor-pointer hover:text-orangeClient ease-in duration-300" />{" "}
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col">
            <h1 className="text-orangeClient text-xl font-bold mb-4 font-gilroyExtraBold">
              Information
            </h1>

            <Link
              to="/"
              className={`text-l mb-3 ${
                location.pathname === "/" ? "text-orangeClient" : ""
              }`}
            >
              Home
            </Link>

            <Link
              to="/projects"
              className={`text-l hover:text-orangeClient ease-in duration-300 mb-3 ${
                location.pathname === "/projects" ? "text-orangeClient" : ""
              }`}
            >
              Project
            </Link>

            <Link
              to="/services"
              className={`text-l hover:text-orangeClient ease-in duration-300 mb-3 ${
                location.pathname === "/services" ? "text-orangeClient" : ""
              }`}
            >
              Services
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h1 className="text-orangeClient text-xl font-bold mb-4 font-gilroyExtraBold">
              Contact
            </h1>

            <div className="flex flex-col text-l lg:text-l mb-2">
              <span>
                Address: 1611 AIC Burgundy Empire Tower ADB Avenue Ortigas
                Center, Pasig City
              </span>
            </div>

            <div className="flex flex-col text-l lg:text-l mb-2">
              <span>Phone: +63 916 2047 165</span>
            </div>

            <div className="flex flex-col text-l lg:text-l mb-2">
              <span>Email: info@percivalestimate.com</span>
            </div>
          </div>

          {/* Whistleblower */}
          <div className="flex flex-col">
            <h1 className="text-orangeClient text-xl font-bold mb-4 font-gilroyExtraBold">
              Whistleblower
            </h1>

            <div className="flex flex-col text-l lg:text-l mb-2">
              <span>
                If our percivalestimator accepts bribe, you may contact us here.
              </span>
              <span
                onClick={handleContact}
                className="cursor-pointer font-gilroyExtraBold underline"
              >
                {" "}
                Let us know
              </span>
            </div>
          </div>

          {/* Social Media Mobile */}
          <div className="lg:flex flex-col hidden">
            <h1 className="text-orangeClient text-xl font-bold mb-4 font-gilroyExtraBold">
              Social Media
            </h1>
            <div className="flex items-center">
              <Link target="_blank" to={socMedLinks.facebook}>
                <FaFacebookF className="w-4 h-4 text-[#001B1B] cursor-pointer hover:text-orangeClient ease-in duration-300" />{" "}
              </Link>
              <Link target="_blank" to={socMedLinks.linkedin}>
                <FaLinkedinIn className="w-5 h-5 text-[#001B1B] cursor-pointer hover:text-orangeClient ease-in duration-300" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white font-gilroyLight bg-gray-500">
        <div className="flex item-center mx-auto md:max-w-3xl xl:max-w-6xl py-2 px-6 lg:px-0 ">
          <BiCopyright className="w-5 h-5 " />
          <span>
            2023 percivale<span className="font-gilroyExtraBold">estimate</span>
          </span>
        </div>
      </div>

      {isContactContainer && (
        <Contact
          onClose={() => {
            setContactContainer(false);
            document.body.style.overflow = "auto";
          }}
        />
      )}
    </>
  );
};

export default Footer;
