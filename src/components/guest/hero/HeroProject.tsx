import heroImg from "../../../assets/images/hero/hero-2.jpg";

const HeroProject: React.FC = () => {
  return (
    <>
      <div
        className="relative h-[500px] bg-cover bg-no-repeat bg-blend-darken bg-center"
        style={{ backgroundImage: `url('${heroImg}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="grid lg:grid-cols-2 pt-48 text-white md:max-w-3xl xl:max-w-6xl py-4 px-6 mx-auto">
          <div
            data-aos="slide-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-gilroyExtraBold mb-4">
              Projects
            </h1>
            <div
              data-aos="slide-right"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            ></div>
          </div>
        </div>
      </div>

      <div
        className="-mt-24 md:flex flex-row-reverse md:max-w-3xl xl:max-w-6xl justify-center py-4 px-6 mx-auto font-gilroyLight text-greenClient"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="flex flex-col items-start bg-white shadow-2xl border-t-8 border-t-[#001B1B] py-6 px-6 lg:px-24 md:w-1/2">
          <span className="uppercase">Call Us Today</span>
          <h1 className="text-orangeClient text-4xl font-gilroyExtraBold">
            +63 976 4274 653
          </h1>
        </div>

        <div className="md:w-1/2"></div>
      </div>
    </>
  );
};

export default HeroProject;
