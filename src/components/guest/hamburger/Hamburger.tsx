import React, { useEffect, useState } from "react";
import SideNav from "../side-nav/SideNav";

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center cursor-pointer md:hidden ${
          isOpen ? "open" : ""
        }`}
        onClick={toggleHamburger}
      >
        <span
          className={`w-7 h-1 bg-orangeClient ${
            isOpen ? "mb-[0.1rem]" : "mb-1"
          } rounded-full transition-transform ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`w-7 h-1 bg-orangeClient ${
            isOpen ? "mb-[0.1rem]" : "mb-1"
          } rounded-full transition-opacity ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-7 h-1 bg-orangeClient rounded-full transition-transform ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </div>
      <SideNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Hamburger;
