import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Hamburger from "../hamburger/Hamburger.tsx";
import logo from "../../../assets/images/logo/percivalestimate-logo.png";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Header: React.FC = () => {
  const location = useLocation(); // Get current location

  useEffect(() => {
    // Scroll to the top of the page when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  const socMedLinks = {
    facebook: "https://www.facebook.com/andrecausinggg",
    linkedin: "https://twitter.com/yourusername",
  };

  return (
    <>
      <header className="bg-white fixed top-0 w-full drop-shadow-xl z-[9999999]">
        <nav className="md:max-w-3xl xl:max-w-6xl py-4 px-6 mx-auto">
          <div className="flex items-center justify-end border-gray pb-2 border-b-2">
            <Link target="_blank" to={socMedLinks.facebook}>
              <FaFacebookF className="w-4 h-4 text-[#001B1B] cursor-pointer hover:text-orangeClient ease-in duration-300" />{" "}
            </Link>
            <Link target="_blank" to={socMedLinks.linkedin}>
              <FaLinkedinIn className="w-5 h-5 text-[#001B1B] cursor-pointer hover:text-orangeClient ease-in duration-300" />{" "}
            </Link>
          </div>

          <div className="flex items-center justify-between font-gilroy-regular">
            <Link to="#" className="flex items-center">
              <img
                src={logo}
                alt="Percivalestimate Logo"
                className="text-center w-[20px] h-[22px]"
              />

              <div className="text-start lg:text-end ml-[2px]">
                <div className="flex flex-col item-center">
                  <span className="text-xl font-gilroyLight">
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

            <div className="hidden md:flex items-center">
              <Link
                to="/"
                className={`text-xl border-transparent hover:text-orangeClient ease-in duration-300 ${
                  location.pathname === "/"
                    ? "text-orangeClient"
                    : ""
                }`}
              >
                Home
              </Link>

              <Link
                to="/projects"
                className={`text-xl border-transparent hover:text-orangeClient mx-3 ease-in duration-300 ${
                  location.pathname === "/projects"
                    ? "text-orangeClient"
                    : ""
                }`}
              >
                Projects
              </Link>

              <Link
                to="/services"
                className={`text-xl border-transparent hover:text-orangeClient ease-in duration-300 ${
                  location.pathname === "/services"
                    ? "text-orangeClient"
                    : ""
                }`}
              >
                Services
              </Link>
            </div>

            <Hamburger />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
