import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className='flex justify-center mb-60 max-sm:p-6 max-sm:mb-10'>
      <motion.div
        className='flex flex-col h-60 w-1/2 bg-zinc justify-center items-center rounded-md max-sm:w-72'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 25,
          duration: 0.8,
        }}
      >
        <h3 className='text-xl font-mono max-sm:text-sm'>Want to contact?</h3>
        <h1 className='text-5xl font-mono max-sm:text-xl'>Contact</h1>
        <motion.button
          className='bg-slate-200 text-zinc h-10 w-40 rounded-md mt-4 max-sm:w-36 hover:bg-bodyColor hover:text-mutedGray'
          whileHover={{ scale: 1.1 }}
        >
          <Link to='/contact'>Contact Now</Link>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Contact
