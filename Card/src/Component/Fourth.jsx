import React from 'react'

const Fourth = () => {
  return (
    <div class="relative w-full h-screen ">
      <div className='flex flex-row '>
        <div className='bg-orange-300 h-screen w-200'>
          <h className="text-5xl mt-10 font-bold">Tools And Platforms</h>
          <ul className='mt-60 text-2xl ml-50 text-left font-semibold list-disc'>
            <li>Huddle</li>
            <li>Elevate</li>
            <li>Amber</li>
            <li>Workday</li>
          </ul>

        </div>
        <div className='bg-gray-50 h-screen w-80'>
          <p className='w-8 h-8 rounded '>icon</p>
        </div>
      </div>
    </div>
  )
}

export default Fourth