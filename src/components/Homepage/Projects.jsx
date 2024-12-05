import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import { Projects as projectsData } from '../../assets/data/data.js'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center text-center mt-60 mb-60 max-md:mt-10 max-sm:mb-10 relative'>
      <div className='flex flex-col mb-16 max-sm:mb-10'>
        <h3 className='text-xl mb-2'>Some of my recent works</h3>
        <h1 className='text-5xl font-mono max-sm:text-3xl'>PROJECTS</h1>
      </div>
      <div className='flex flex-col justify-center ml-48 mr-48 max-sm:ml-0 max-sm:mr-0 max-lg:ml-10 max-lg:mr-10 max-xl:mr-10 max-xl:ml-10'>
        <div className='relative'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              nextEl: '.swiper-btn-next',
              prevEl: '.swiper-btn-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'fraction',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Navigation]}
            className='z-10'
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index} className='flex justify-center'>
                <div className='flex flex-col space-x-0 max-sm:flex-col max-sm:justify-center max-sm:items-center'>
                  <Link to='/projects'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='h-80 w-72 bg-cover rounded-md object-cover border-2 max-sm:w-64'
                    />
                  </Link>
                  <div className='bg-zinc rounded-md mt-2 flex flex-col p-2 w-72 max-sm:w-64'>
                    <h3 className='flex justify-start text-xl font-mono'>
                      {project.title}
                    </h3>
                    <p className='flex text-left'>{project.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className='swiper-btn-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-zinc text-white p-3 rounded-full hover:bg-bodyColor z-50 lg:left-5'
            aria-label='Previous'
          >
            <IoIosArrowBack />
          </button>
          <button
            className='swiper-btn-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-zinc text-white p-3 rounded-full hover:bg-bodyColor z-50 lg:right-5'
            aria-label='Next'
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
