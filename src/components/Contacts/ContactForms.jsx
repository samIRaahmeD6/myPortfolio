import { motion } from 'framer-motion'

const ContactForms = () => {
  return (
    <div>
      <motion.div
        className='flex flex-col text-center space-y-4 mt-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h3 className='text-2xl'>Want to contact?</h3>
        <h1 className='text-5xl'>Contact</h1>
      </motion.div>

      <motion.form
        action='https://formspree.io/f/xnnqlzgq'
        method='POST'
        className='flex flex-col space-y-2 justify-center items-center mb-60 mt-10 max-sm:mb-10'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 25,
          duration: 0.8,
        }}
        viewport={{ once: false }}
      >
        <motion.input
          type='text'
          placeholder='Name'
          name='name'
          className='bg-zinc w-96 h-10 rounded-lg p-4 max-sm:w-64 text-slate-200'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        />
        <motion.input
          type='email'
          placeholder='Email'
          name='email'
          className='bg-zinc w-96 h-10 rounded-lg p-4 max-sm:w-64 text-slate-200'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        />
        <motion.textarea
          name='message'
          placeholder='Message'
          className='bg-zinc w-96 h-64 rounded-lg p-4 resize-none max-sm:w-64 text-slate-200'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        ></motion.textarea>
        <motion.button
          type='submit'
          className='bg-zinc w-96 rounded-lg h-10 max-sm:w-64'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 0.8,
          }}
          viewport={{ once: false }}
        >
          Send
        </motion.button>
      </motion.form>
    </div>
  )
}

export default ContactForms
