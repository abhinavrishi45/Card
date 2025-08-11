import React from 'react'

const Fourteen = () => {
  return (
    <div className='flex gap-10'>
      <div className='w-150 p-5 border border-gray-200 rounded '>
        <h className ="text-2xl font-bold bg-amber-300 ">What is emotional intelligence?</h>
        <p className='mt-5'>Emotional intelligence is the ability to understand, manage and navigate our relationships- with ourselves and with people. Becoming selfaware of what we are feeling in multiple situations is a starting point for us to manage, express and act upon our emotions.</p>
      </div>
      <div className='p-7 border border-gray-200 rounded '>
        <h className="text-3xl font-bold"> 7 Traits of a leader with EQ</h>
        <ul className='list-disc text-left mt-5'>
          <li>Spends time reflecting on how they are feelig</li>
          <li>Becomes aware of the emotions they are experiencing</li>
          <li>Takes responsibilty for their thoughts and actions</li>
          <li>Setting boundaries where applicable</li>
          <li>Focusing on self care</li>
          <li>Transforming emotions from a fixed space to an enabling growth phase</li>
          <li>Operating as an observer of emotions without any judgements</li>
        </ul>
      </div>
    </div>
  )
}

export default Fourteen