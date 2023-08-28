import { Link } from "react-router-dom";
import { useState } from "react";

import image1 from "../../../assets/images/our-works/our-works-1.jpg";
import imageCenter from "../../../assets/images/our-works/our-works-center.jpg";

const OurWork: React.FC = () => {
  const divData = [
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-orangeClient",
      title: "Pre-Contract Quantity Surveying",
      subTitle: "HKT Warehouse",
    },
    {
      image: image1,
      bgColorClass: "bg-orangeClient",
      hoverColorClass: "bg-orangeClient",
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
      bgColorClass: "bg-orangeClient",
      hoverColorClass: "bg-greenClient",
      title: "Full Pre-Contract Quantity Surveying",
      subTitle: "Batangas Event Center",
    },
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "projects",
      subTitle: "percival",
      subTitle1: "estimate",
    },
    {
      image: image1,
      bgColorClass: "bg-orangeClient",
      hoverColorClass: "bg-greenClient",
      title: "Pre-Contract Quantity Surveying",
      subTitle: "Anyana Church",
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
        <div className="lg:text-center mb-16">
          <h6 className="text-orangeClient">OUR WORKS</h6>
          <h1 className="text-greenClient font-gilroyExtraBold text-2xl lg:hidden">
            Our Projects
          </h1>
          <h1 className="text-greenClient font-gilroyExtraBold text-4xl hidden lg:block">
            Notable Projects
          </h1>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="flex items-center">
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image1} alt="" />
            </div>
          </div>

          <div
            className={`bg-cover bg-no-repeat relative w-full ease-in duration-300 h-[300px]`}
            style={{ backgroundImage: `url('${imageCenter}')` }}
          >
            <div className="bg-greenClient absolute inset-0 opacity-[0.8]"></div>
            <div className="z-10 relative py-6 px-4 font-gilroyLight flex flex-col justify-center items-center h-[300px] text-center">
              <h1 className="py-6">
                PROJECTS <br />{" "}
                <span>
                  percival
                  <span className=" font-gilroyExtraBold">estimate</span>
                </span>{" "}
              </h1>
              <Link to="#" className="py-2 px-4 bg-white text-black">
                +
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image1} alt="" />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-4">
            {divData.map((data, index) => (
              <div
                key={index}
                className={`bg-cover bg-no-repeat relative w-full ease-in duration-300 flex justify-center items-center overflow-hidden h-[300px]`}
                style={{ backgroundImage: `url('${data.image}')` }}
                onMouseEnter={() => handleHover(index)}
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
                  className={`z-10 absolute py-6 px-4 font-gilroyLight text-center inset-0 transition-transform transform duration-300 ease-linear flex flex-col justify-center ${
                    hoverStates[index]
                      ? "translate-y-0"
                      : index === 4
                      ? "translate-y-0"
                      : "translate-y-full"
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
                      <div className="flex flex-col">
                        <span className="normal-case font-gilroyLight">
                          {data.subTitle}
                          <span className="font-gilroyExtraBold">
                            {data.subTitle1}
                          </span>
                        </span>
                        <div className="mt-4">
                          <Link
                            to="#"
                            className=" py-2 px-4 bg-white text-black"
                          >
                            +
                          </Link>
                        </div>
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

export default OurWork;
