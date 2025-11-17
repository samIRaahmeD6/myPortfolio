import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Projects as projectsData } from '../../assets/data/data.js'

const Project_container = () => {
  const [searchTerm, setSearchTerm] = useState('') // State to track search input
  const [expandedProject, setExpandedProject] = useState(null) // Track which project is expanded

  // Filter projects based on the search term
  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleReadMore = (index) => {
    setExpandedProject((prev) => (prev === index ? null : index))
  }

  return (
    <div className='flex flex-col m-40 max-lg:ml-4 max-lg:mr-4 max-sm:ml-0 max-sm:mr-0 max-sm:mb-10 max-sm:mt-20 max-xl:m-10'>
      <motion.div
        className='flex flex-col justify-center text-center mb-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h3 className='text-2xl font-poppins'>Some of my works</h3>
        <h1 className='text-5xl max-sm:text-4xl'>Projects</h1>
      </motion.div>

      <motion.div
        className='flex max-sm:justify-center max-md:ml-10 max-sm:ml-0'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="relative mb-10 max-sm:w-64 rounded-2xl flex max-md:justify-center max-sm:justify-center max-lg:justify-center bg-white/10 backdrop-blur-sm border border-white/20">
  <input
    type="text"
    placeholder="Search for a project..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-96 h-10 m-3 p-2 rounded-lg max-sm:w-64 text-zinc max-sm:h-8 
               placeholder:text-zinc focus:outline-none"
  />
  <div className="flex">
    <button
      className="absolute text-zinc top-4 right-4 p-2 max-sm:top-4"
      onClick={() => console.log('Search term:', searchTerm)}
    >
      <FaSearch />
    </button>
  </div>
</div>

      </motion.div>
      <motion.div
  className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-lg:grid-cols-2 max-md:justify-items-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: false }}
>
  {filteredProjects.length > 0 ? (
    filteredProjects.map((project, index) => (
      <motion.div
        key={project.id || index}
        className="flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 0.6,
        }}
        viewport={{ once: false }}
      >
        {/* ---------- GLASSMORPHISM CARD ---------- */}
        <div
          className="bg-white/10 backdrop-blur-md border border-white/20 
                     shadow-lg p-4 rounded-2xl w-80 max-sm:w-64 flex flex-col items-center"
        >
          {/* IMAGE */}
          <motion.div
            className="mb-4 w-full"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 0.6,
            }}
            viewport={{ once: false }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-60 w-full object-cover rounded-lg"
            />
          </motion.div>

          {/* DETAILS */}
          <motion.div
            className="w-full bg-zinc rounded-lg p-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 0.6,
            }}
            viewport={{ once: false }}
          >
            <h3 className="mb-2 text-2xl text-white">
              {project.title}
            </h3>

            <p className="mb-2 text-justify text-gray-200">
              {expandedProject === index
                ? project.description2 || "No detailed description available."
                : `${(
                    project.description2 ||
                    "No detailed description available."
                  ).substring(0, 100)}...`}
            </p>
            <div className='flex justify-between'>
            {project.description2 && project.description2.length > 100 && (
              <button
                className="text-blue-300 hover:underline"
                onClick={() => toggleReadMore(index)}
              >
                {expandedProject === index ? "Read Less" : "Read More"}
              </button>
              
            )}
            <a
              className="text-blue-300 hover:underline"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
            {project.link.includes("github.com") ? "GitHub" : "Live Demo"}
            </a>
            </div>
          </motion.div>
           
        </div>
        {/* ---------- END GLASS CARD ---------- */}
      </motion.div>
    ))
  ) : (
    <div className="text-center col-span-3 text-xl text-gray-500">
      No projects found.
    </div>
  )}
</motion.div>

    </div>
  )
}

export default Project_container
