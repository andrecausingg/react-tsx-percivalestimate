import { useEffect } from "react";

import AboutUs from "../../components/guest/about-us/AboutUs";
import ContactUs from "../../components/guest/contact-us/ContactUs";
import Footer from "../../components/guest/footer/Footer";
import Hero from "../../components/guest/hero/Hero";
import Map from "../../components/guest/map/Map";
import MissionVission from "../../components/guest/mission-vission/MissionVission";
import OurClient from "../../components/guest/our-client/OurClient";
import OurWork from "../../components/guest/our-work/OurWork";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home - percivalestimate";
  }, []);

  return (
    <>
      <Hero />
      <AboutUs />
      <MissionVission />
      <OurWork />
      <Map />
      <OurClient />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
