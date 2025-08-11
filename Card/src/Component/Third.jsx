import React from 'react'
import images from "../assets/images.jpeg"
const Third = () => {
  return (
    <div className="text-white relative overflow-hidden">
      <div class="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${images} )` }}>

        <h1 className="text-4xl font-bold mb-8 z-10 relative">
          RECOGNITION RITUALS
        </h1>


        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className=''>
          <div className="p-6">
            <h2 className="text-xl font-bold bg-green-300 text-left w-55 px-1 mb-4">
              Small Victory Practise
            </h2>
            <p className="text-left">
              Every <span className="font-semibold">Thursday around noon</span>,
              right when people were getting stressed near the end of the week,
              pose the question to your team
              <span >
                “What were your small victories this week?”
              </span>
              Help get the conversation going by sharing your own examples: “I
              finished a report I’ve been working on.”
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              When you post this question every week, you support your team
              members to pause, reflect on their progress, and celebrate proud
              moments together.
            </p>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold bg-green-300 text-left w-55 px-1 mt-10">
              Team Shout Out
            </h2>
            <p className="text-left">
              Have a regular monthly meeting with your team, carve out five
              minutes in the beginning for shoutouts. Once everyone’s together,
              ask the question
              <span>
                Who wants to give a shout out to somebody else on our team or
                another team who helped you out recently?" You can also mix up the questions each time:
              </span>
            </p>
            <ul className='text-left'>
              <li>Who really helped you?</li>
              <li>Who have you learned something from?</li>
              <li>Who made you smile recently?</li>
            </ul>
            <p className="mt-4 text-left">
              This simple ritual will help your team feel more valued at work and
              more connected to one another.
            </p>
          </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold bg-green-300 text-left w-120 px-1 mb-4 mt-100">
              Share Post-Project Debriefs and reflections
            </h2>
            <p className="text-left">
              The next time you finish a project or hit a major milestone, set
              aside 30 minutes to an hour and give your people time to reflect and
              celebrate as a team. Some questions to ask:
            </p>
            <ul className="text-left">
              <li>What did it take to make this project happen?</li>
              <li>What challenges did the team overcome?</li>
              <li>What are you most proud of that you’re working on?</li>
              <li>What are you most proud of your team for?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third