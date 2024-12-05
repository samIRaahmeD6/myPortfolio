const Education = () => {
  return (
    <div className='flex flex-col ml-52 space-y-6 max-xl:ml-2 max-lg:ml-12 max-md:justify-center max-md:items-center max-sm:flex-col max-sm:ml-0'>
      <div className='flex justify-center max-sm:flex-col'>
        <h1 className='text-5xl'>Education</h1>
      </div>

      <div className='grid grid-cols-2 gap-x-4 gap-y-2 max-sm:grid-cols-1 max-sm:gap-4'>
        <div className='flex items-center'>
          <h3 className='text-2xl leading-none'>University</h3>
        </div>
        <div className='flex items-center'>
          <p className='p-2 rounded-md bg-zinc flex items-center'>
            United International University
          </p>
        </div>
        <div className='flex items-center'>
          <h3 className='text-2xl leading-none'>College</h3>
        </div>
        <div className='flex items-center'>
          <p className='p-2 rounded-md bg-zinc flex items-center'>
            BCIC College
          </p>
        </div>
        <div className='flex items-center'>
          <h3 className='text-2xl leading-none'>School</h3>
        </div>
        <div className='flex items-center'>
          <p className='p-2 rounded-md bg-zinc flex items-center'>
            Monipur High School
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education
