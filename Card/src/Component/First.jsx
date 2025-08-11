import React from 'react'
import images from "../assets/images.jpeg"
const First = () => {
  return (
    <div class="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${images})`}}>

      <div class="absolute inset-0 bg-opacity-40"></div>


      <div class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">

        <h1 class="text-4xl  font-bold mb-8 uppercase">
          IS RECOGNITION IMPORTANT?
        </h1>


        <div class="bg-yellow-300 text-black p-4 rounded  mb-4 mt-20">
          <p class="text-lg md:text-xl">
            Deloitte surveyed 16,000 employees around the world about what they wanted for their day-to-day work.
            <span class="font-bold">85% just wanted a written or verbal thank you.</span>
          </p>
        </div>


        <div class="bg-yellow-200 text-black p-4 rounded w-240 mt-40">
          <p class="text-lg md:text-xl">
            What people often need and value most is simply to be treated as a human being and shown that their presence matters.
            Recognition doesn't always have to come from a formal program.
          </p>
        </div>
      </div>
    </div>

  )
}

export default First