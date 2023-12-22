import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import AboutUs from "../../components/guest/about-us/AboutUs";
import ContactUs from "../../components/guest/contact-us/ContactUs";
import Footer from "../../components/guest/footer/Footer";
import Hero from "../../components/guest/hero/Hero";
import Map from "../../components/guest/map/Map";
import MissionVission from "../../components/guest/mission-vission/MissionVission";
// import OurClient from "../../components/guest/our-client/OurClient";
import OurWork from "../../components/guest/our-work/OurWork";
// import StockExchange from "../../components/guest/stock-exchange/StockExchange";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home - percivalestimate";
    AOS.init({
      once: true, // Whether animations should only happen once
    });
  }, []);

  return (
    <>
      <Hero />
      {/* <StockExchange /> */}
      <AboutUs />
      <MissionVission />
      <OurWork />
      <Map />
      {/* <OurClient /> */}
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
