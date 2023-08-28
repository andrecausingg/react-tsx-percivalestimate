import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clientLogo1 from "../../../assets/images/client-logo/1.jpg";
import clientLogo2 from "../../../assets/images/client-logo/2.jpg";
import clientLogo3 from "../../../assets/images/client-logo/3.jpg";
import clientLogo4 from "../../../assets/images/client-logo/4.png";
import clientLogo5 from "../../../assets/images/client-logo/5.jpg";
import clientLogo6 from "../../../assets/images/client-logo/6.jpg";
import clientLogo7 from "../../../assets/images/client-logo/7.jpg";
import clientLogo8 from "../../../assets/images/client-logo/8.jpg";
import clientLogo9 from "../../../assets/images/client-logo/9.png";
import clientLogo10 from "../../../assets/images/client-logo/10.jpg";
import clientLogo11 from "../../../assets/images/client-logo/11.jpg";
import clientLogo12 from "../../../assets/images/client-logo/12.png";
import clientLogo13 from "../../../assets/images/client-logo/13.jpg";

const OurClient = () => {
  const images = [
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
    clientLogo8,
    clientLogo9,
    clientLogo10,
    clientLogo11,
    clientLogo12,
    clientLogo13,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mx-auto md:max-w-3xl xl:max-w-6xl items-center px-7 lg:px-0 font-gilroy-bold mt-24 bg-no-repeat bg-center">
        <div className="text-center mb-24">
          <h5 className="uppercase text-orangeClient">Clients</h5>
          <h1 className="text-greenClient font-gilroyExtraBold text-4xl">
            Our Clients
          </h1>
        </div>
        <div className="text-center">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="px-4 flex justify-center items-center"
                style={{ height: "calc(50vh - 100px)" }}
              >
                <img
                  src={image}
                  alt={`Client Logo ${index + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OurClient;
