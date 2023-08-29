import Servicesx from '../../components/guest/services/Services'
import ContactUs from "../../components/guest/contact-us/ContactUs"
import Footer from "../../components/guest/footer/Footer"
import HeroServices from "../../components/guest/hero/HeroServices"

const Services: React.FC = () => {
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