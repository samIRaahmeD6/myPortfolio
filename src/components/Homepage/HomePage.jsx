import About from './About'
import Contact from './Contact'
import Expertise from './Expertise'
import Navbar from './Navbar'
import Projects from './Projects'
import Footer from './Footer'
import Floating_NavBar from '../About/Floating_NavBar'

const HomePage = () => {
  return (
    <div>
      <Floating_NavBar />
      <Navbar />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
