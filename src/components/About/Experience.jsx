import { motion } from 'framer-motion'
import { Experiences as ExperienceData } from '../../assets/data/data'

const Experience = () => {
  return (
    <div className='flex flex-col justify-center ml-36 mr-36 max-sm:ml-0 max-sm:mr-0 text-center mb-40 max-sm:mb-10 '>
      <motion.h1
        className='text-5xl mb-10 max-sm:text-4xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}

      >
        Experience
      </motion.h1>

      <div className='grid grid-cols-3 gap-4 justify-items-center place-items-center place-content-center max-lg:grid-cols-2 max-lg:gap-2 max-lg:justify-items-center max-sm:grid-cols-1 max-sm:justify-items-center  max-sm:place-items-center max-sm:space-y-4 max-sm:gap-0 max-sm:space-x-0'>
        {ExperienceData.map((experience, index) => (
          <motion.div
            key={index}
            className='bg-zinc w-72 h-96 rounded-md max-sm:w-72 max-sm:ml-0 max-sm:mr-0 border border-white/20 backdrop-blur-sm shadow-sm'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className='text-xl mt-4'>{experience.jobTitle}</h2>
            <small>{experience.institute}</small> <br />
            <small>{experience.date}</small>
            <div className='flex justify-center'>
              <hr className='w-60' />
            </div>
            <p className='p-6 font-serif max-sm:text-sm'>
              {experience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
