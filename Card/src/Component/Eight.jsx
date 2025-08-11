import React from 'react'
import images from '../assets/images.jpeg'

const Eight = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full bg-gray-800 text-white flex">

        <div class="relative w-160 h-180 bg-cover bg-center" style={{ backgroundImage: `url(${images} )` }}>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-4xl text-left font-bold text-white ">Building Psychological Safety</h2>
          <ul className="list-disc text-gray-200 mt-8 mb-12  text-left text-lg p-4">
            <li>Create a safe communication space</li>
            <li>Admit and accept mistakes</li>
            <li>Express needs openly</li>
            <li>Show vulnerability and care</li>
          </ul>

          <h2 className="text-4xl text-left font-bold">
            Supportive 1:1 <br /> Environments
          </h2>
          <ul className="list-disc text-gray-200 mt-8 text-lg p-4 text-left">
            <li>Identify spaces that invite calm</li>
            <li>Choose what will work together</li>
            <li>Should be comfortable for everyone</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Eight