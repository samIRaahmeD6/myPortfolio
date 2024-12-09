import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { aboutMe } from '../../assets/data/data.js'
const About = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-24 ml-16 mr-16 mb-20 max-xl:justify-center max-xl:items-center max-xl:mb-2 max-sm:ml-0 max-sm:mr-0'>
        <motion.h1
          className='text-center text-2xl my-4 font-mono'
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, duration: 1 }}
          viewport={{ once: false }}
        >
          Hello, I am Samira Ahmed
        </motion.h1>

        <motion.h3
          className='text-center text-xl my-2 font-mono'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            duration: 1,
            delay: 0.3,
          }}
          viewport={{ once: false }}
        >
          Full Stack Developer
        </motion.h3>

        <motion.div
          className='flex max-xl:justify-center items-center'
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            duration: 1,
            delay: 0.6,
          }}
          viewport={{ once: false }}
        >
          {aboutMe.map((aboutme, index) => (
            <img
              className='h-96 w-96 text-center border-2 object-cover max-sm:h-64 max-sm:w-64'
              key={index}
              src={aboutme.profilepic1}
              alt='Samira Ahmed'
            />
          ))}
        </motion.div>
      </div>

      {aboutMe.map((aboutme, index) => (
        <motion.div
          className='flex justify-center ml-10 mr-20 mb-60 mt-60 space-x-52 max-xl:space-x-30 max-sm:mt-10 max-sm:justify-center max-xl:mt-20 max-md:mb-20 max-md:flex-col max-md:justify-center max-md:items-center max-md:space-x-0 max-lg:space-x-0 max-sm:ml-0 max-sm:mr-0 '
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className='flex flex-col max-xl:justify-center'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h3 className='text-2xl max-sm:text-xl font-mono'>
              Let Me Introduce Myself
            </h3>
            <h1 className='text-5xl my-4 max-sm:text-2xl font-mono'>
              ABOUT ME
            </h1>
            <p className='w-96 text-sm max-sm:w-64 max-xl:w-72 font-sans'>
              {aboutme.description1}
            </p>
            <div className='flex space-x-4 my-6'>
              <motion.button
                className='bg-slate-200 text-zinc h-12 w-28 rounded-md hover:bg-zinc hover:text-slate-200 hover:border-2 font-sans font-semibold'
                whileHover={{ scale: 1.1 }}
              >
                <Link to='/projects'>Projects</Link>
              </motion.button>
              <motion.button
                className='bg-zinc h-12 w-28 rounded-md border-2 hover:bg-transparent font-sans font-semibold'
                whileHover={{ scale: 1.1 }}
              >
                <Link to='/about'>Read More</Link>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className='flex max-xl:justify-center'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'tween',
              stiffness: 100,
              damping: 15,
              delay: 0.5,
            }}
            viewport={{ once: false }}
          >
            <img
              className='h-96 w-96 text-center border-2 object-cover max-sm:h-64 max-sm:w-64 max-sm:space-x-0 max-sm:hidden max-md:hidden'
              src={aboutme.profilepic1}
              alt='Samira Ahmed'
            />
          </motion.div>
        </motion.div>
      ))}
    </>
  )
}

export default About
