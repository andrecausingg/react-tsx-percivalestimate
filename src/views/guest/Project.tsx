import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import ContactUs from "../../components/guest/contact-us/ContactUs";
import Footer from "../../components/guest/footer/Footer";
import HeroProject from "../../components/guest/hero/HeroProject";
import Projects from "../../components/guest/our-work/Projects";

const Project: React.FC = () => {
  useEffect(() => {
    document.title = "Project - percivalestimate";
    AOS.init({
      once: true, // Whether animations should only happen once
    });
  }, []);
  
  return (
    <>
      <HeroProject />
      <Projects />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Project;
