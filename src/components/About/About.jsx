import Details from './Details'
import Education from './Education'
import NavBar from '../../components/Homepage/Navbar'
import Skills from './Skills'
import Footer from '../Homepage/Footer'
import Floating_NavBar from './Floating_NavBar'
import Experience from './Experience'

const About = () => {
  return (
    <div>
      <Floating_NavBar />
      <NavBar />
      <Details />
      <Skills />
      {/* <Education /> */}
      <Experience />
      <Footer />
    </div>
  )
}

export default About
