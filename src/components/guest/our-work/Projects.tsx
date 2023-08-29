import { useState } from "react";

import image1 from "../../../assets/images/our-works/our-works-1.jpg";
import imageCenter from "../../../assets/images/our-works/our-works-center.jpg";

const Projects: React.FC = () => {
  const divData = [
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "Pre-Contract Quantity Surveying",
      subTitle: "HKT Warehouse",
    },
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "Full Pre-Contract Quantity Surveying",
      subTitle: "Mandaluyong Arena",
    },
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "Pre-Contract Quantity Surveying",
      subTitle: "Military Facility",
    },
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "Full Pre-Contract Quantity Surveying",
      subTitle: "Batangas Event Center",
    },
    {
      image: imageCenter,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "projects",
      subTitle: "percival",
      subTitle1: "estimate",
    },
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "Pre-Contract Quantity Surveying",
      subTitle: "Anyana Church",
    },
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "Pre-Contract Quantity Surveying",
      subTitle: "Military Facility",
    },
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "Full Pre-Contract Quantity Surveying",
      subTitle: "Batangas Event Center",
    },
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "Full Pre-Contract Quantity Surveying",
      subTitle: "Batangas Event Center",
    },
    // Add more div data objects here
  ];

  const initialHoverStates = divData.map(() => false);
  const [hoverStates, setHoverStates] = useState<boolean[]>(initialHoverStates);

  const handleHover = (index: number) => {
    const newHoverStates = initialHoverStates.map((_, i) => i === index);
    setHoverStates(newHoverStates);
  };

  return (
    <>
      <div className="md:max-w-3xl xl:max-w-6xl py-4 px-6 lg:p-0 mx-auto mt-24 font-gilroyLight text-white">
        {/* Desktop */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {divData.map((data, index) => (
              <div
                key={index}
                className={`bg-cover bg-no-repeat relative w-full ease-in duration-300 flex justify-center items-center h-[320px] overflow-hidden`}
                style={{ backgroundImage: `url('${data.image}')` }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(-1)} // Reset hover state on mouse leave
              >
                <div
                  className={`${
                    data.bgColorClass
                  } absolute inset-0 opacity-80 transition-transform transform duration-300 ease-linear ${
                    hoverStates[index]
                      ? "translate-y-0"
                      : index === 4
                      ? "translate-y-0"
                      : "translate-y-full"
                  }`}
                ></div>

                <div
                  className={`z-10 mb-[200px] pt-4 px-4 font-gilroyLight transition-transform transform duration-300 ease-linear w-full h-full relative ${
                    hoverStates[index]
                      ? "translate-y-0 mb-0"
                      : index === 4
                      ? "translate-y-0"
                      : "translate-y-full bg-greenClient opacity-80"
                  }
                  ${
                    index === 4
                      ? "flex flex-col justify-center text-center mb-0"
                      : ""
                  }`}
                >
                  <h1 className="uppercase">
                    {data.title} <br />
                    {index !== 4 ? (
                      <span className="normal-case font-gilroyExtraBold">
                        {data.subTitle}
                      </span>
                    ) : (
                      ""
                    )}
                    {index === 4 ? (
                      <div className="flex flex-col text-3xl">
                        <span className="normal-case font-gilroyLight">
                          {data.subTitle}
                          <span className="font-gilroyExtraBold">
                            {data.subTitle1}
                          </span>
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
