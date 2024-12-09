import { Skills as skillData } from '../../assets/data/data.js'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.div
      className='flex flex-col items-center mb-60 max-sm:mb-10 max-md:mb-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='text-5xl mt-16 mb-10 max-sm:mt-0'>
        <h1 className='max-sm:text-4xl'>Skills</h1>
      </div>
      <motion.div
        className='grid grid-cols-5 gap-10 justify-items-center max-sm:grid-cols-3 max-sm:gap-5 max-md:grid-cols-4'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {skillData.map((skill, index) => (
          <motion.div
            key={index}
            className='bg-zinc h-36 w-40 rounded-md flex flex-col justify-center items-center text-center max-sm:h-16 max-sm:w-20 max-md:w-28 max-md:h-20 text-2xl max-sm:text-lg'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <skill.logo className='text-4xl max-sm:text-sm mb-2' />
            <h1 className='max-sm:text-sm'>{skill.title}</h1>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills
