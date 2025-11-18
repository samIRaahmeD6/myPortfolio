import { MdOutlineMonitor } from 'react-icons/md'
import { FiServer } from 'react-icons/fi'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

const Expertise = () => {
  return (
    <motion.div
  className='flex flex-col justify-center mb-40 max-sm:mb-16'
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  variants={{
    visible: {
      transition: { 
        staggerChildren: 0.3 // stagger the cards
      }
    }
  }}
>
  <div className='flex flex-col justify-center text-center mb-20 max-sm:mb-10'>
    <h3 className='text-xl'>What I offer</h3>
    <h1 className='text-5xl max-sm:text-3xl'>Expertise</h1>
  </div>

  <div className='flex justify-center items-center space-x-36 max-md:flex-col max-md:space-x-0 max-md:space-y-6 max-lg:space-x-10'>

    {/* ---------- FRONTEND ---------- */}
    <motion.div
      className='flex justify-center items-center text-center'
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className='flex flex-col text-center items-center justify-center'>
        <div className='flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 w-60 shadow-lg'>
          <MdOutlineMonitor className='text-6xl mb-4 self-center' />
          <h3 className='text-2xl mb-4 font-mono'>FrontEnd</h3>
          <p className='text-center'>
            I specialize in building intuitive, responsive, and visually appealing user
            interfaces. Proficient in HTML, CSS, JavaScript, and frameworks like React.js
            and Angular.js. I focus on creating seamless user experiences with attention
            to detail and performance optimization.
          </p>
        </div>
      </div>
    </motion.div>

    {/* ---------- BACKEND ---------- */}
    <motion.div
      className='flex justify-center items-center text-center'
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.8, delay: 0.2 }}
      viewport={{ once: false }}
    >
      <div className='flex flex-col justify-center items-center text-center'>
        <div className='flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 w-60 shadow-lg'>
          <FiServer className='text-6xl mb-4 self-center' />
          <h3 className='text-2xl mb-4 '>BackEnd</h3>
          <p className='text-center'>
            I specialize in building scalable, secure, and performant server-side
            applications. Experienced in Node.js, Express.js, and MySql for building
            RESTful APIs and connecting to databases. I focus on implementing secure
            authentication and optimizing API performance for a seamless user experience.
          </p>
        </div>
      </div>
    </motion.div>

    {/* ---------- FULL STACK ---------- */}
    <motion.div
      className='flex justify-center items-center text-center'
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.8, delay: 0.4 }}
      viewport={{ once: false }}
    >
      <div className='flex flex-col justify-center items-center text-center'>
        <div className='flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 w-60 shadow-lg'>
          <IoExtensionPuzzleOutline className='text-6xl mb-4 self-center' />
          <h3 className='text-2xl mb-4 '>Full Stack</h3>
          <p className='text-center'>
            As a full stack developer, I have expertise in both front-end and back-end
            technologies. I create dynamic, responsive user interfaces using React.js and
            Tailwind CSS while building robust server-side applications with Node.js,
            Express.js, and databases like MySQL.
          </p>
        </div>
      </div>
    </motion.div>

  </div>
</motion.div>

  )
}
export default Expertise
