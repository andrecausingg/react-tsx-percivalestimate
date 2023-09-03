import image1 from "../../../assets/images/contact-us/contact-us-1.jpg";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="relative py-4 px-6 lg:p-0 mx-auto mt-24 font-gilroyLight text-white">
        <div
          className="bg-cover bg-no-repeat h-[300px]"
          style={{ backgroundImage: `url('${image1}')` }}
        >
          <div className="bg-greenClient absolute inset-0 opacity-[0.8] my-4 mx-6 lg:my-0 lg:mx-0 h-[300px]"></div>

          <div className=" z-10 relative py-6 px-4 font-gilroyLight flex flex-col justify-center h-[300px] lg:hidden">
            <h1 className="font-gilroyExtraBold">
              Free consultation with exceptional quality
            </h1>
            <span>Just one call away: +63 916 2047 165</span>
            <div className="mt-4">
              <button className="border-white border-2 py-2 px-4 hover:bg-greenClient hover:border-[#001B1B] ease-in duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative mx-auto md:max-w-3xl xl:max-w-6xl px-7 hidden lg:flex items-center justify-evenly h-[300px]">
            <h1 className="text-3xl font-gilroyExtraBold">
              We look forward in doing Construction Cost Saving <br /> with you!
            </h1>
            <div className="mt-4">
              <button className="border-white border-2 py-2 px-4 hover:bg-orangeClient hover:border-[#EC5900] ease-in duration-300">
                Get your Consulation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
