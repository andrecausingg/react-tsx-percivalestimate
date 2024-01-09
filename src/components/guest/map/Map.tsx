import { FaMobileButton, FaEnvelope } from "react-icons/fa6";

const Map: React.FC = () => {
  return (
    <>
      <div className="py-4 px-6 lg:p-0 mx-auto mt-24 font-gilroyLight">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.2909463189027!2d121.06045884232977!3d14.58974133499536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c94a8c8cc8f3%3A0x868ab2b01e0e8733!2sAIC%20Burgundy%20Empire%20Tower!5e0!3m2!1sen!2sin!4v1693229179159!5m2!1sen!2sin"
            height="450"
            loading="lazy"
            width="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>

        <div className="lg:flex justify-center lg:gap-4">
          <div
            className="flex flex-col items-start bg-white shadow-2xl border-t-8 border-t-[#001B1B] py-6 px-4 lg:w-[350px] lg:-mt-24"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h5>Company Address</h5>
            <h1 className=" text-2xl font-gilroyExtraBold">
              1611 AIC Burgundy Empire Tower ADB Avenue Ortigas Center, Pasig
              City
            </h1>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 items-end mt-10 gap-1"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="flex items-center"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <FaMobileButton className="w-10 h-10 bg-greenClient p-2 text-white" />
              <div className="text-xm ml-2">
                <span>Phone</span>
                <h5 className="font-gilroyExtraBold">+63 976 4274 653</h5>
              </div>
            </div>
            <div
              className="flex item-center"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <FaEnvelope className="w-10 h-10 bg-orangeClient p-2 text-white" />
              <div className="text-xm ml-2">
                <span>Email</span>
                <h5 className="font-gilroyExtraBold">
                  info@percivalestimate.com
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
