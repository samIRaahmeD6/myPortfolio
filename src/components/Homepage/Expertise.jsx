import { MdOutlineMonitor } from 'react-icons/md'
import { FiServer } from 'react-icons/fi'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

const Expertise = () => {
  return (
    <motion.div
      className='flex flex-col justify-center mb-40 max-sm:mb-16'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className='flex flex-col justify-center text-center mb-20 max-sm:mb-10'>
        <h3 className='text-xl'>What I offer</h3>
        <h1 className='text-5xl max-sm:text-3xl'>Expertise</h1>
      </div>
      <div className='flex justify-center items-center space-x-36 max-md:flex-col max-md:space-x-0 max-md:space-y-6 max-lg:space-x-10'>
        <motion.div
          className='flex justify-center items-center text-center'
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className='flex flex-col text-center items-center justify-center'>
            <MdOutlineMonitor className='text-6xl mb-4' />
            <h3 className='text-2xl mb-4 font-mono'>FrontEnd</h3>
            <p className='w-60'>
              I specialize in building intuitive, responsive, and visually
              appealing user interfaces. Proficient in HTML, CSS, JavaScript,
              and frameworks like React.js and Angular.js. I focus on creating
              seamless user experiences with attention to detail and performance
              optimization.
            </p>
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center items-center text-center'
          initial={{ opacity: 0, rotate: -90 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 60, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className='flex flex-col justify-center items-center text-center'>
            <FiServer className='text-6xl mb-4' />
            <h3 className='text-2xl mb-4 font-mono'>BackEnd</h3>
            <p className='w-60'>
              I specialize in building scalable, secure, and performant
              server-side applications. Experienced in Node.js, Express.js, and
              MongoDB for building RESTful APIs and connecting to databases. I
              focus on implementing secure authentication and optimizing API
              performance for a seamless user experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          className='flex justify-center items-center text-center'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className='flex flex-col justify-center items-center text-center'>
            <IoExtensionPuzzleOutline className='text-6xl mb-4' />
            <h3 className='text-2xl mb-4 font-mono'>Full Stack</h3>
            <p className='w-60'>
              As a full stack developer, I have expertise in both front-end and
              back-end technologies. I create dynamic, responsive user
              interfaces using React.js and Tailwind CSS while building robust
              server-side applications with Node.js, Express.js, and databases
              like MongoDB or MySQL.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
export default Expertise
