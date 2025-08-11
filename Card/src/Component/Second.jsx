import React from 'react'
import images from "../assets/images.jpeg"
const Second = () => {
  return (
    <div class="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${images} )` }}>

      <h className="text-4xl text-white bg-amber-200 p-4">Importance Of Language</h>

      <div class="absolute inset-0 bg-opacity-40 grid grid-cols-3 gap-4 mt-30 ">

        <div className=' ml-10 w-70'>
          <p class="w-12 h-10 ml-10 bg-amber-200 p-2">01</p>
          <h class="text-xl text-pink-200">Appreciate the person</h>
          <p className='text-justify text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magnam commodi veritatis officiis magni quam quaerat sint possimus minima ea! Ipsum quia necessitatibus a praesentium molestiae est dolores, quod libero?</p>
        </div>
        <div className='w-80'>
          <p class="w-12 h-10 ml-10 bg-amber-200 p-2">02</p>
          <h class="text-xl text-pink-200">Acknowledge the Circumstances</h>
          <p className='text-justify text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magnam commodi veritatis officiis magni quam quaerat sint possimus minima ea! Ipsum quia necessitatibus a praesentium molestiae est dolores, quod libero?</p>
        </div>
        <div className='w-80'>
          <p className="w-12 h-10 ml-10 bg-amber-200 p-2">03</p>
          <h className="text-xl text-pink-200 text-left">Recognise the effort and Progess</h>
          <p className='text-justify text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magnam commodi veritatis officiis magni quam quaerat sint possimus minima ea! Ipsum quia necessitatibus a praesentium molestiae est dolores, quod libero?</p>
        </div>
        <div className='ml-20 w-80'>
          <p className="w-12 h-10 ml-10 bg-amber-200 p-2">04</p>
          <h className="text-xl text-pink-200">Reward the result</h>
          <p className='text-justify text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magnam commodi veritatis officiis magni quam quaerat sint possimus minima ea! Ipsum quia necessitatibus a praesentium molestiae est dolores, quod libero?</p>
        </div>

        <div className=' ml-20 w-80'>
          <p class="w-12 h-10 ml-10 bg-amber-200 p-2">05</p>
          <h class="text-xl text-pink-200">Award Standout Results</h>
          <p className='text-justify text-white
          '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magnam commodi veritatis officiis magni quam quaerat sint possimus minima ea! Ipsum quia necessitatibus a praesentium molestiae est dolores, quod libero?</p>
        </div>
      </div>
    </div>

  )
}

export default Second