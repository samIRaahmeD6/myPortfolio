import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className='bg-zinc flex space-x-48 h-52 justify-center p-10 max-sm:flex-col max-sm:items-center max-sm:space-x-0 max-sm:h-80 max-sm:justify-center max-md:space-x-10 max-sm:space-y-6'>
        <div className=''>
          <h1 className='text-xl '>Important Links</h1>
          <ul className='text-sm max-sm:flex max-sm:flex-col max-sm:items-center'>
            <li>
              <Link to='/' className='hover:text-mutedGray'>
                {' '}
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='hover:text-mutedGray'>
                About
              </Link>
            </li>
            <li>
              <Link to='/projects' className='hover:text-mutedGray'>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-mutedGray'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <h1 className='text-xl max-sm:flex max-sm:justify-center'>
            Contact Info
          </h1>
          <ul className='text-sm max-sm:flex max-sm:flex-col max-sm:items-center'>
            <li>samiraahmed9913@gmail.com</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl'>Social Links</h1>
          <ul className='text-sm max-sm:flex max-sm:flex-col max-sm:items-center'>
            <li>
              <a
                href='www.linkedin.com/in/samiraahmed1'
                className='hover:text-mutedGray'
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href='https://github.com/samIRaahmeD6'
                className='hover:text-mutedGray'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-zinc flex justify-center w-full p-4 max-sm:flex-col max-sm:space-x-0 max-sm:justify-center max-sm:items-center max-sm:pl-9 max-lg:ml-0 '>
        <p>&copy; 2024 Samira Ahmed. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
