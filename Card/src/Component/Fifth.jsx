import React from 'react'
import images from '../assets/images.jpeg'
const Fifth = () => {
  return (
    <div class="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${images} )` }}>

        <p className='px-20 w-180  text-white text-justify text-lg'>Amber is an AI-powered employee listening platform that captures feedback at key milestones—starting from onboarding through major tenure stages—to assess satisfaction across areas like manager support, task engagement, and culture. It flags potential attrition risks, enables targeted pulse surveys, and offers actionable insights for HR and business leaders to address employee concerns proactively.</p>
        <p className=' text-white mt-2 px-20  w-180 text-justify text-lg'>Features like "Action Perception" follow up on past negative responses to ensure timely interventions. The platform also generates intuitive reports and dashboards that help track trends, measure sentiment, and drive informed decision-making to improve employee experience and retention.</p>
    </div>
  )
}

export default Fifth