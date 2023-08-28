import { useState } from "react";

import image1 from "../../../assets/images/mission-vission/mv-1.jpg";
import image2 from "../../../assets/images/mission-vission/mv-2.jpg";

const MissionVission: React.FC = () => {
  const [isVisionHover, setVisionHover] = useState<boolean>(false);
  const [isMisionHover, setMisionHover] = useState<boolean>(false);
  const [isCoreValuesHover, setCoreValuesHover] = useState<boolean>(false);

  const handleVisionHover = () => {
    setVisionHover(!isVisionHover);
    setMisionHover(false);
    setCoreValuesHover(false);
  };

  const handleMissionHover = () => {
    setVisionHover(false);
    setMisionHover(!isMisionHover);
    setCoreValuesHover(false);
  };

  const handleCoreValuesHover = () => {
    setVisionHover(false);
    setMisionHover(false);
    setCoreValuesHover(!isCoreValuesHover);
  };

  return (
    <>
      <div className="lg:grid lg:grid-cols-2 font-gilroyLight mt-24">
        <div
          className="hidden lg:block bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${image2}')` }}
        ></div>

        <div className="lg:grid grid-cols-3 py-4 px-6 lg:p-0">
          {/* Vision */}
          <div
            className={`bg-cover bg-no-repeat relative w-full ease-in duration-300
            ${
                isVisionHover ? "opacity-1" : isMisionHover ? "opacity-[0.5]" : isCoreValuesHover ? "opacity-[0.5]" : ""
            }`}
            style={{ backgroundImage: `url('${image1}')` }}
            onMouseEnter={() => handleVisionHover()}
            onMouseLeave={() => handleVisionHover()}
          >
            <div className="bg-greenClient absolute inset-0 opacity-[0.8]"></div>

            <div className=" z-10 relative py-6 px-4 text-white font-gilroyLight">
              <h1 className="text-3xl py-6 font-gilroyExtraBold">Vision</h1>
              <p>
                <span className="text-orangeClient">#wepushourlimit</span> To
                become your reliable partner in helping you craft and achieve
                your construction dream and vision through our realistic cost
                planning and our{" "}
                <span className="italic font-gilroyExtraBold">
                  {" "}
                  <span>Identify</span>.
                  <span className="text-orangeClient">Replace</span>.Qualify
                </span>{" "}
                Technique and become the{" "}
                <span className="italic font-gilroyExtraBold">
                  {" "}
                  <span className="text-orangeClient">Napoleon</span> Bonaparte
                </span>{" "}
                of the Construction Cost Estimating Industry.
              </p>
            </div>
          </div>

          {/* Mision */}
          <div
            className={`bg-cover bg-no-repeat relative w-full ease-in duration-300
            ${
                isMisionHover ? "opacity-1" : isVisionHover ? "opacity-[0.5]" : isCoreValuesHover ? "opacity-[0.5]" : ""
            }`}
            style={{ backgroundImage: `url('${image1}')` }}
            onMouseEnter={() => handleMissionHover()}
            onMouseLeave={() => handleMissionHover()}
          >
            <div className="bg-orangeClient absolute inset-0 opacity-[0.8]"></div>

            <div className="z-50 relative py-6 px-4 text-white font-gilroyLight">
              <h1 className="text-3xl py-6 font-gilroyExtraBold">Mision</h1>
              <p className="text-greenClient">
                <span>
                  <span className="text-white">#Family</span>first
                </span>{" "}
                <br />
                <span className="text-white font-gilroyExtraBold">
                  Employee:
                </span>{" "}
                To give our employee a work-life balance and an output-based
                setup under a Filipino brand so they can spend more time with
                their family. <br /> <br />
                <span className="text-greenClient">
                  <span>#focus</span>
                  <span className="text-white">sa</span>goal
                </span>{" "}
                <br />
                <span className="font-gilroyExtraBold">Client:</span> To
                maximize the client's goal and profit through continuous search
                of innovating construction estimation and techniques.{" "}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div
            className={`bg-cover bg-no-repeat relative w-full ease-in duration-300
            ${
                isCoreValuesHover ? "opacity-1" : isVisionHover ? "opacity-[0.5]" : isMisionHover ? "opacity-[0.5]" : ""
            }`}
            style={{ backgroundImage: `url('${image1}')` }}
            onMouseEnter={() => handleCoreValuesHover()}
            onMouseLeave={() => handleCoreValuesHover()}
          >
            <div className="bg-greenClient absolute inset-0 opacity-[0.8]"></div>

            <div className="z-50 relative py-6 px-4 text-white font-gilroyLight">
              <h1 className="text-3xl py-6 font-gilroyExtraBold">
                Core Values
              </h1>
              <p>Strong Moral Principle Adherence Value Efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionVission;
