import React from 'react'
import images from '../assets/images.jpeg'
const Sixth = () => {
  return (
    <div class="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${images} )` }}>
      <h className="text-4xl text-white font-bold">Role During PE Process</h>
      <div className='flex flex-row gap-25'>
        <div className='ml-20 mt-10'>
          <h className="text-xl font-semibold text-yellow-300 ">GOAL SETTING</h>
          <ul className='w-100 text-white text-left list-disc'>
            <li className='mt-5'>Align individual goals with organizational and team objectives</li>

            <li className='mt-5'>Differentiate goals based on the role of managers and individual contributors (i.e., 70% main tasks, 10% innovation/improvement tasks, 20% managing organization/developing people for managers; 80% main tasks, 10% innovation/improvement tasks, 10% cooperation/network for individual contributors)</li>

            <li className='mt-5'>Ensure goals are set as FAST goals (Frequent Discussions, Ambitious, Specific, Transparent) built on SMART framework</li>

            <li className='mt-5'>Use either a top-down or bottom-up approach to set objectives based on team culture and suitability</li>

            <li className='mt-5'>Ensure employees have visibility of team/group-part goals and objectives</li>

            <li className='mt-5'>Review and manage goals and progress status through “Anytime Goal Management” on Workday</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h className="text-xl font-semibold text-yellow-300 uppercase ">Continuous Feedback</h>
          <ul className='w-100  text-white text-left list-disc'>
            <li className='mt-5'>Provide frequent updates on individual performance and feedback on progress and achievements against set objectives</li>

            <li className='mt-5'>Capture achievements, coaching suggestions, and constructive feedback on MBOs and KPIs through Workday</li>

            <li className='mt-5'>Provide feedback on specific individual goals, including contribution, achievements, and setbacks</li>

            <li className='mt-5'>Offer general feedback related to overall performance, areas of improvement, and personal aspirations</li>

            <li className='mt-5'>Request feedback on direct reports from previous reporting managers, stakeholders, and/or key collaborators in cases of employee transfers</li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sixth