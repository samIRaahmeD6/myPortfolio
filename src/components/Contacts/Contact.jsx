import ContactsForm from './ContactForms'
import NavBar from '../Homepage/Navbar'
import Footer from '../Homepage/Footer'
import Floating_NavBar from '../About/Floating_NavBar'

const Contact = () => {
  return (
    <div>
      <Floating_NavBar />
      <NavBar />
      <ContactsForm />
      <Footer />
    </div>
  )
}
export default Contact
