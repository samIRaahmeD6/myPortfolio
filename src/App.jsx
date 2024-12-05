import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/Homepage/HomePage'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contacts/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
