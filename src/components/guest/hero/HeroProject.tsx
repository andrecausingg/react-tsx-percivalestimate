import heroImg from "../../../assets/images/hero/skyscrapers.jpg";

const HeroProject: React.FC = () => {
  return (
    <>
      <div
        className="h-[500px] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${heroImg}')` }}
      >
        <div className="grid lg:grid-cols-2 pt-48 text-white md:max-w-3xl xl:max-w-6xl py-4 px-6 mx-auto">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-gilroyExtraBold mb-4">
              Projects
            </h1>
            <span className="opacity-[0.5]">
              Your reliable partner in Construction Cost Planning, Construction
              Take-Off, Value Engineering, and Post-Contract Quantity Surveying
            </span>
          </div>
        </div>
      </div>

      <div className="-mt-24 md:flex flex-row-reverse md:max-w-3xl xl:max-w-6xl justify-center py-4 px-6 mx-auto font-gilroyLight text-greenClient">
        <div className="flex flex-col items-start bg-white shadow-2xl border-t-8 border-t-[#001B1B] py-6 px-6 lg:px-24 md:w-1/2">
          <span className="uppercase">Call Us Today</span>
          <h1 className="text-orangeClient text-4xl font-gilroyExtraBold">
            +63 9123 456 789
          </h1>
        </div>

        <div className="md:w-1/2">

        </div>
      </div>
    </>
  );
};

export default HeroProject;
