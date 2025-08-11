import React from 'react'

const Fifteen = () => {
  return (
    <div className='flex gap-10'>
      <div className='w-160 border border-gray-200 p-8'>
        <h className=" text-2xl font-bold text-orange-400">Let's befriend our EQ, shall we?</h>
        <p className='mt-5 text-justify'>It is natural for each of us to experience a range of emotions depending on the situation we are confronted with,. Mostly, in our need to cope with Uncomfortable emotions quickly, we end up labeling our emotions ata very broad label and don't delve deeper into our motional landscape . It is important for us to distance ourselves from the event and become merely observers, which may help us identify feelings that we experience because of unment needs . so let's discover our emotions at a deeper level through the cicle of emotions</p>
      </div>
      <div className='w-150 border border-gray-200 p-8 text-yellow-100 bg-black/80'>
      <p className='text-left'>Start by identifying an uncomfortable emotions that you have experienced recently when you had a difficult conversation</p>
      <p>(professional or personal)</p>

      <p className='mt-5'>What makes your uncomfortable about the conversation?</p>
      <input
      type='text'
      className='border-t-0 border-b w-80 mb-5'></input>

      <p>is the expectaion of the person valid or not ?</p>
      <input
      type='text'
      className='border-t-0 border-b w-70 '></input>

      {/* IMAGE */}
      <div className='bg-white border h-20 rounded mt-5 border-gray-200 mb-5'>
        ada
      </div>

      <p className='text-justify'>How can you move to the growth side of the emotions wheel (through the same color , from anger to peace) </p>
      <p className='text-justify mt-3'>Now ask yourself how can you take responsibilty for this problem , if the control is with you or not with you?</p>
      </div>
    </div>
  )
}

export default Fifteen