import { useState } from "react";

import image1 from "../../../assets/images/projects/project-1.jpg";
import image2 from "../../../assets/images/projects/project-2.png";
import image3 from "../../../assets/images/projects/project-3.png";
import image4 from "../../../assets/images/projects/project-4.png";
import image6 from "../../../assets/images/projects/project-6.png";
import image7 from "../../../assets/images/projects/project-7.png";
import image8 from "../../../assets/images/projects/project-8.png";
import image9 from "../../../assets/images/projects/project-9.png";

import imageCenter from "../../../assets/images/projects/center.jpg";

const Projects: React.FC = () => {
  const divData = [
    {
      image: image1,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "civic",
      place: "Mandaluyong Arena",
      description: "Scope of Works: Full Pre-Contract Quantity Surveying",
      area: "Area: 8,000 sq.m.",
      designer: "",
    },
    {
      image: image2,
      bgColorClass: "bg-orangeClient",
      hoverColorClass: "bg-orangeClient",
      title: "leisure",
      place: "Batangas Event Center",
      description: "Scope of Works: Full Pre-Contract Quantity Surveying",
      area: "Area: 7,000 sq.m.",
      designer: "Designed By: OneArc",
    },
    {
      image: image3,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "government",
      place: "Texas Building 6",
      description: "Scope of Works: Pre-Contract Quantity Surveying",
      area: "Area: 1,700 sq.m.",
      designer: "Designed By: Levy Dykema Architects",
    },
    {
      image: image4,
      bgColorClass: "bg-orangeClient",
      hoverColorClass: "bg-orangeClient",
      title: "military",
      place: "Military Facility",
      description: "Scope of Works: Pre-Contract Quantity Surveying",
      area: "Confidential",
      designer: "Designed By: An International Engineering Firm",
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
      image: image6,
      bgColorClass: "bg-orangeClient",
      hoverColorClass: "bg-orangeClient",
      title: "hotel",
      place: "Mindanao Hotel and Convention Center",
      description: "Scope of Works: Pre-Contract Quantity Surveying",
      area: "Area: 4,000 sq.m.",
      designer: "Designed By: OneArc",
    },
    {
      image: image7,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "retail",
      place: "HKT Philippines Warehouse",
      description: "Scope of Works: Pre-Contract Quantity Surveying",
      area: "Area: 3,000 sq.m.",
      designer: "Designed By: Global Design Inc.",
    },
    {
      image: image8,
      bgColorClass: "bg-orangeClient",
      hoverColorClass: "bg-orangeClient",
      title: "retail",
      place: "",
      description: "Scope of Works: Pre-Contract Quantity Surveying",
      area: "Area: 200 sq.m.",
      designer: "Designed By: Grace Capati Architecture and Design",
    },
    {
      image: image9,
      bgColorClass: "bg-greenClient",
      hoverColorClass: "bg-greenClient",
      title: "retail",
      place: "Lucena Commercial Building",
      description: "Scope of Works: Pre-Contract Quantity Surveying",
      area: "Area: 1,000 sq.m.",
      designer: "Designed By: Amber Builders",
    },
    // Add more div data objects here
  ];

  const initialHoverStates = divData.map(() => false);
  const [hoverStates, setHoverStates] = useState<boolean[]>(initialHoverStates);

  const handleHover = (index: number) => {
    const newHoverStates = initialHoverStates.map((_, i) => i === index);
    setHoverStates(newHoverStates);
  };

  const handleClick = (index: number) => {
    const newHoverStates = initialHoverStates.map((_, i) => i === index);
    setHoverStates(newHoverStates);
  };

  return (
    <>
      <div className="md:max-w-3xl xl:max-w-6xl py-4 px-6 lg:p-0 mx-auto mt-24 font-gilroyLight text-white overflow-hidden">
        {/* Desktop */}
        <div className="">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {divData.map((data, index) => (
              <div
                key={index}
                className={`bg-cover bg-no-repeat relative w-full ease-in duration-500 flex justify-center items-cennter h-[320px] overflow-hidden`}
                style={{ backgroundImage: `url('${data.image}')` }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(-1)} // Reset hover state on mouse leave
                onClick={() => handleClick(index)}
                data-aos="zoom-out-down"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                {/* Bg Center */}
                {/* <div
                  className={`${
                    data.bgColorClass
                  } absolute inset-0 opacity-80 transition-transform transform duration-500 ease-linear ${
                    index === 4 ? "" : "hidden"
                  }`}
                ></div> */}

                <div
                  className={`z-10 py-4 px-4 font-gilroyLight transition-transform transform duration-500 ease-linear w-full ${
                    hoverStates[index]
                      ? "translate-y-0 h-full"
                      : index === 4
                      ? "translate-y-0"
                      : "translate-y-full bg-greenClient h-[100px] absolute bottom-[80px]"
                  }
                  ${
                    index === 4
                      ? "flex flex-col justify-center text-center"
                      : ""
                  }`}
                >
                  {hoverStates[index] ? (
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-greenClient" : "bg-orangeClient"
                      } opacity-80 w-full inset-0 absolute flex flex-col justify-center p-4 font-gilroyLight`}
                    >
                      {" "}
                      <div>
                        <h1 className="font-gilroyExtraBold text-xl">
                          {data.place}
                        </h1>{" "}
                        <br />
                        <span>{data.description}</span> <br /> <br />
                        <span> {data.area}</span> <br /> <br />
                        <span>{data.designer}</span> <br />
                      </div>
                    </div>
                  ) : (
                    <h1 className="uppercase font-gilroyExtraBold">
                      {data.title}
                      {index !== 4 ? (
                        <span className="normal-case font-gilroyExtraBold">
                          {data.subTitle}
                        </span>
                      ) : (
                        ""
                      )}
                    </h1>
                  )}

                  {index === 4 ? (
                    <div className="bg-greenClient opacity-80 w-full inset-0 absolute flex flex-col justify-center p-4 font-gilroyLight">
                      <div className="flex flex-col text-3xl">
                        <span className="normal-case font-gilroyLight">
                          {data.subTitle}
                          <span className="font-gilroyExtraBold">
                            {data.subTitle1}
                          </span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
