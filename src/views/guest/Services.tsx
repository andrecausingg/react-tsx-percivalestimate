import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Servicesx from '../../components/guest/services/Services'
import ContactUs from "../../components/guest/contact-us/ContactUs"
import Footer from "../../components/guest/footer/Footer"
import HeroServices from "../../components/guest/hero/HeroServices"

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Services - percivalestimate";
    AOS.init({
      once: true, // Whether animations should only happen once
    });
  }, []);
  
  return (
    <>
        <HeroServices />
        <Servicesx />
        <ContactUs />
        <Footer />
    </>
  )
}

export default Services