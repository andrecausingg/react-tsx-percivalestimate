import AboutUs from "../../components/guest/about-us/AboutUs";
import Hero from "../../components/guest/hero/Hero";
import MissionVission from "../../components/guest/mission-vission/MissionVission";
import OurWork from "../../components/guest/our-work/OurWork";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <MissionVission />
      <OurWork />
    </>
  );
};

export default Home;
