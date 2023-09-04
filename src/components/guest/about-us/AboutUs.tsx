import { Link } from "react-router-dom";

import image1 from "../../../assets/images/about-us/about-us-1.jpg";
import image2 from "../../../assets/images/about-us/about-us-2.jpg";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center font-gilroyLight md:max-w-3xl xl:max-w-6xl py-4 px-6 mx-auto mt-24 gap-4 text-greenClient overflow-hidden">
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h6 className="text-orangeClient">About Us</h6>
          <h1 className="my-4 text-2xl lg:text-4xl font-gilroyExtraBold text-greenClient">
            With our techniques, we guarantee cost savings <br />
            <span className="text-sm">Identify. Replace. Qualify</span>
          </h1>
          <p>
            <span className="text-orangeClient">percivalestimate</span> has
            estimated over
            <span className="font-gilroyExtraBold"> 120 projects</span> since
            establishment and
            <span className="text-orangeClient font-gilroyExtraBold">
              {" "}
              Php 2 Billion
            </span>{" "}
            Total Accumulated Project Cost.
            <br /> <br />
            Started as a one-man team estimating residential building, now{" "}
            <span className="text-orangeClient">
              {" "}
              percival<span className="font-gilroyExtraBold">estimate </span>
            </span>
            is a 15-man team of Senior and Junior CSA and MEPFS Quantity
            Surveyors capable of estimating all trades of construction and
            provide all quantity surveying services.
            <br /> <br />
            From Residential and Commercial Establishment up to Institutional
            Building such as
            <span className="text-orangeClient font-gilroyExtraBold">
              {" "}
              City Arena
            </span>
            ,
            <span className="text-greenClient font-gilroyExtraBold">
              {" "}
              Church
            </span>{" "}
            and
            <span className="text-greenClient font-gilroyExtraBold">
              {" "}
              Military Facility{" "}
            </span>
            ,
            <span className="text-orangeClient">
              {" "}
              percival<span className="font-gilroyExtraBold">estimate </span>
            </span>
            did it and will do it to be your newest partner in doing realistic
            construction cost planning and saving.
            <br /> <br />
            <span className="text-orangeClient">
              percival<span className="font-gilroyExtraBold">estimate</span>
            </span>{" "}
            has also reached{" "}
            <span className="text-greenClient font-gilroyExtraBold">
              overseas
            </span>{" "}
            and estimated commercial and government building in the
            <span className="text-orangeClient font-gilroyExtraBold">
              {" "}
              United States.
            </span>
            <br /> <br />
            We did it because we care. We do it because we love it.
          </p>
          <div className="mt-4">
            <Link to="/projects" className="py-2 px-4 bg-[#0f2c2c] hover:bg-greenClient ease-in duration-300 text-white font-gilroyExtraBold">
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative h-[400px] lg:[800px]">
          <div
            className="shadow-2xl bg-white p-4 w-[200px] xl:w-[300px] absolute right-0 top-0 xl:-top-[150px] "
            data-aos="fade-up-left"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img src={image1} alt="" />
          </div>

          <div
            className="shadow-2xl bg-white p-4 w-[200px] xl:w-[300px] absolute bottom-0 lg:-bottom-[150px] left-0 xl:left-[150px]"
            data-aos="fade-up-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
