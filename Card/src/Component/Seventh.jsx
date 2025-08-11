import React from 'react'
import images from '../assets/images.jpeg'
const Seventh = () => {
  return (
    <div class="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${images} )` }}>
      <h className="text-4xl text-white font-bold">Role During PE Process</h>
      <div className='flex flex-row gap-25'>
        <div className='ml-20 mt-10'>
          <h className="text-xl font-semibold text-yellow-300 ">MID YEAR FEEDBACK
          </h>
          <ul className='w-100 text-white text-left list-disc'>
            <li className='mt-5'>Provide mid-year feedback to employees on their performance trends and alignment with goals</li>

            <li className='mt-5'>Discuss areas of improvement and development needs to strengthen continuous learning culture</li>

            <li className='mt-5'>Use Workday to document feedback discussions and ensure clear, actionable insights for growth and development</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h className="text-xl font-semibold text-yellow-300 uppercase ">PERFORMANCE EVALUATION</h>
          <ul className='w-100  text-white text-left list-disc'>
            <li className='mt-5'>Review yearly goals and objectives of the employee</li>

            <li className='mt-5'>Complete the manager evaluation on Workday, providing ratings and comments for each goal and an overall rating</li>

            <li className='mt-5'>Focus on both the outcome (what) and the process (how) of achievements during the evaluation</li>

            <li className='mt-5'>Participate in team-level reviews to ensure rating distribution aligns with organizational guidelines (e.g., TII, SWC, gender, campus vs. lateral)</li>

            <li className='mt-5'>Communicate the final evaluation results, including annual feedback and development plans, to the employee</li>
            <li className='mt-5'>Ensure the final rating is updated on Workday by the specified deadline (January 31)</li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Seventh