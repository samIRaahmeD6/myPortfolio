import { motion } from 'framer-motion'
import { aboutMe } from '../../assets/data/data'

const Details = () => {
  return (
    <>
      <motion.div
        className='flex flex-col justify-center items-center max-xl:justify-center max-xl:items-center max-xl:mb-2 max-sm:ml-0 max-sm:mr-0'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {aboutMe.map((aboutme, index) => (
          <motion.div
            className='flex mb-40 mt-60 space-x-56 max-xl:space-x-30 max-sm:mt-20 max-sm:justify-center max-xl:mt-20 max-md:mb-20 max-md:flex-col max-md:justify-center max-md:items-center max-md:space-x-0 max-lg:space-x-24'
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className='flex flex-col max-xl:justify-center'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 60 }}
            >
              <h3 className='text-2xl max-sm:text-xl'>
                Hello, I am Samira Ahmed
              </h3>
              <h1 className='text-5xl my-4 max-sm:text-2xl flex max-sm:justify-center max-md:justify-center font-poppins'>
                ABOUT ME
              </h1>
              <p className='w-96 text-sm max-sm:w-64 max-xl:w-72 font-sans flex text-justify'>
                {aboutme.description2}
              </p>
              <motion.div
                className='flex space-x-4 my-6 max-sm:justify-center'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
              <a href="/myPortfolio/Samira_Ahmed.pdf" download>
                <button className='bg-zinc text-slate-200 h-12 w-72 rounded-md border-2 hover:bg-transparent hover:border-2 font-sans text-xl max-sm:w-64'>
                  Download CV
                </button>
              </a>
            </motion.div>
            </motion.div>

            <motion.div
              className='flex max-xl:justify-center'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 60 }}
            >
              <img
                className='h-96 w-96 text-center border-2 object-cover max-sm:h-64 max-sm:w-64'
                src={aboutme.profilepic2}
                alt=''
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default Details
