import { FaHome } from 'react-icons/fa'
import { FaAddressCard } from 'react-icons/fa'
import { SiFiles } from 'react-icons/si'
import { RiContactsBook3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Floating_NavBar = () => {
  return (
    <div className='flex justify-center lg:hidden xl:hidden md:hidden'>
      <div className='bg-zinc fixed top-4 z-50 shadow-lg flex space-x-8 rounded-xl w-64 h-10 items-center justify-center bg-white/0 backdrop-blur-2xl'>
        <div>
          <Link to='/'>
            <FaHome className='text-2xl' />
          </Link>
        </div>
        <div>
          <Link to='/about'>
            <FaAddressCard className='text-2xl ' />
          </Link>
        </div>
        <div>
          <Link to='/projects'>
            <SiFiles className='text-2xl' />
          </Link>
        </div>
        <div>
          <Link to='/contact'>
            <RiContactsBook3Fill className='text-2xl' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Floating_NavBar
