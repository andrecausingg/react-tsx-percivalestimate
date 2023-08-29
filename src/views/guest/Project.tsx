import ContactUs from "../../components/guest/contact-us/ContactUs"
import Footer from "../../components/guest/footer/Footer"
import HeroProject from "../../components/guest/hero/HeroProject"
import Projects from "../../components/guest/our-work/Projects"

const Project: React.FC = () => {
  return (
    <>
        <HeroProject />
        <Projects />
        <ContactUs />
        <Footer />
    </>
  )
}

export default Project