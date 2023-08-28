import { useState, useEffect, useRef } from "react";

import heroImg from "../../../assets/images/hero/skyscrapers.jpg";

import { PiChartLineDown } from "react-icons/pi";
import { TbMoneybag, TbCrane } from "react-icons/tb";
import { FaPencilRuler } from "react-icons/fa";

const Hero: React.FC = () => {
  const [isProjectHeroHover, setProjectHeroHover] = useState<boolean>(false);
  const [isCostHeroHover, setCostHeroHover] = useState<boolean>(false);

  const [countProjects, setCountProjects] = useState<number>(0);
  const [countCost] = useState<number>(0);
  const countProjectsRef = useRef(null);
  const countCostRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const interval = setInterval(() => {
          setCountProjects((prevCount) => {
            if (prevCount < 120) {
              return prevCount + 1;
            } else {
              clearInterval(interval);
              return prevCount; // Return prevCount unchanged when it's already 120
            }
          });
        }, 9000);

        return () => {
          clearInterval(interval);
        };
      }
    }, options);

    if (countProjectsRef.current) {
      observer.observe(countProjectsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [countProjects]);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5, // The element is considered visible when 50% or more of it is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const interval = setInterval(() => {
          setCountProjects((prevCount) => {
            if (prevCount < 120) {
              return prevCount + 1;
            } else {
              clearInterval(interval);
              return prevCount; // Return prevCount unchanged when it's already 120
            }
          });
        }, 1);

        return () => {
          clearInterval(interval);
        };
      }
    }, options);

    if (countCostRef.current) {
      observer.observe(countCostRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [countCost]);

  const handleProjectHover = () => {
    setProjectHeroHover(!isProjectHeroHover);
    setCostHeroHover(false);
  };

  const handleCostHover = () => {
    setProjectHeroHover(false);
    setCostHeroHover(!isCostHeroHover);
  };

  return (
    <>
      <div
        className="h-[600px] lg:h-[800px] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${heroImg}')` }}
      >
        <div className="grid lg:grid-cols-2 pt-48 text-white md:max-w-3xl xl:max-w-6xl py-4 px-6 mx-auto">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-gilroyExtraBold mb-4">
              QUANTITY SURVEYOR
            </h1>
            <span className="opacity-[0.5]">
              Your reliable partner in Construction Cost Planning, Construction
              Take-Off, Value Engineering, and Post-Contract Quantity Surveying
            </span>
            <div className="mt-4">
              <button className="border-white border-2 py-2 px-4 hover:bg-greenClient hover:border-[#001B1B] ease-in duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-24 lg:-mt-[320px] lg:flex flex-row-reverse md:max-w-3xl xl:max-w-6xl justify-center py-4 px-6 mx-auto font-gilroyLight">
        <div className="flex flex-col items-start bg-white shadow-2xl border-t-8 border-t-[#001B1B] py-10 px-4 lg:w-[450px]">
          <h1 className="text-orangeClient text-2xl font-gilroyExtraBold mb-6">
            Cost-Saving Service
          </h1>

          <div className="flex items-center">
            <PiChartLineDown className="w-24 md:w-16 lg:w-20 h-24" />
            <div className="mb-4 ml-4">
              <h3 className="font-gilroyExtraBold">
                pre-contract quantity surveying
              </h3>
              <p>
                Provides Cost Planning in a progressive stage within your given
                timeframe.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <TbMoneybag className="w-24 md:w-16 lg:w-20 h-24" />
            <div className="mb-4 ml-4">
              <h3 className="font-gilroyExtraBold">
                Value Engineering
              </h3>
              <p>
                Helps reduce cost without sacrificing Quality with over 150
                Contacts of different Suppliers and Subcontracts.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <TbCrane className="w-24 md:w-16 lg:w-20 h-24" />
            <div className="mb-4 ml-4">
              <h3 className="font-gilroyExtraBold">
                Value Engineering
              </h3>
              <p>
                Helps reduce cost without sacrificing Quality with over 150
                Contacts of different Suppliers and Subcontracts.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <FaPencilRuler className="w-12 h-12 md:w-8" />{" "}
            <div className="mb-4 ml-4">
              <h3 className="font-gilroyExtraBold">
                Post-Contract Quantity Surveying
              </h3>
              <p>
                Contract Administration and Evaluation of Billings and
                Variation.
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:items-center text-white lg:mt-64">
          <div
            onMouseEnter={() => handleProjectHover()}
            onMouseLeave={() => handleProjectHover()}
            className={`bg-greenClient w-full p-4 lg:px-12 lg:h-[200px] flex flex-col justify-center items-start ease-in duration-300 ${
              isProjectHeroHover
                ? "opacity-1"
                : isCostHeroHover
                ? "opacity-[0.5]"
                : ""
            }`}
            ref={countProjectsRef} // Add this ref to make it observable
          >
            <h1 className="text-4xl lg:text-7xl font-gilroyExtraBold ease-in duration-300">
              {countProjects}
            </h1>
            <p className="text-l">Completed Projects</p>
          </div>
          <div
            onMouseEnter={() => handleCostHover()}
            onMouseLeave={() => handleCostHover()}
            className={`bg-orangeClient w-full p-4 lg:px-12 flex flex-col justify-center lg:h-[200px] ease-in duration-300 ${
              isProjectHeroHover
                ? "opacity-[0.5]"
                : isCostHeroHover
                ? "opacity-1"
                : ""
            }`}
            ref={countCostRef} // Add this ref to make it observable
          >
            <h1 className="text-4xl lg:text-6xl font-gilroyExtraBold">
              ₱{countProjects === 120 ? "2" : countProjects}B
            </h1>
            <p className="text-xl">Construction cost</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
