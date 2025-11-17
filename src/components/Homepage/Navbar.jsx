import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='mb-8 max-sm:hidden'>
      <ul className='flex justify-center space-x-10 mt-8 max-sm:space-x-4 max-lg:space-x-6 max-md:text-sm max-md:space-x-6'>
        <li>
          <Link to='/' className='text-2xl font-poppins hover:text-mutedGray'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='text-2xl font-poppins hover:text-mutedGray'>
            About
          </Link>
        </li>

        <li>
          <Link
            to='/projects'
            className='text-2xl font-poppins hover:text-mutedGray'
          >
            Projects
          </Link>
        </li>
        <Link to='/contact' className='text-2xl font-poppins hover:text-mutedGray'>
          Contact
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
