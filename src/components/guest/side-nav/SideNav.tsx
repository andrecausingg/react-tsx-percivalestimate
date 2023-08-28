import React, {  useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from "../../../assets/images/logo/percivalestimate-logo.png";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      className={`absolute left-0 top-0 bottom-0 h-screen w-4/5 flex-col bg-[#012C2D] delay-150 duration-500 ease-linear dark:bg-boxdark lg:static md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform`}
    >
      <div className="flex flex-col text-white px-7 py-3 text-4xl">
        <Link to="#" className="flex flex-">
          <img src={logo} alt="Percivalestimate Logo" style={{ width: "46px" }} />
        </Link>

        <Link
          to="/"
          onClick={handleLinkClick}
          className={`font-medium mb-4 mt-8 block`}
        >
          <span className={`font-medium ${location.pathname === '/' ? 'text-orangeClient' : ''}`}>Home</span>
        </Link>

        <Link
          to="/projects"
          onClick={handleLinkClick}
          className={`block  mb-4`}
        >
          <span className={`font-medium ease-in duration-300 ${location.pathname === '/projects' ? 'text-orangeClient' : ''}`}>Projects</span>
        </Link>

        <Link
          to="/services"
          onClick={handleLinkClick}
          className={`block mb-4`}
        >
          <span className={`font-medium  ease-in duration-300 ${location.pathname === '/services' ? 'text-orangeClient' : ''}`}>Services</span>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
