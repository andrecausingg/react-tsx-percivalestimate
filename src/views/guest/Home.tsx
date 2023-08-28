import AboutUs from "../../components/guest/about-us/AboutUs";
import Hero from "../../components/guest/hero/Hero";
import Map from "../../components/guest/map/Map";
import MissionVission from "../../components/guest/mission-vission/MissionVission";
import OurClient from "../../components/guest/our-client/OurClient";
import OurWork from "../../components/guest/our-work/OurWork";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <MissionVission />
      <OurWork />
      <Map />
      <OurClient />
    </>
  );
};

export default Home;
