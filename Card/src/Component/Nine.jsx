import React from 'react';

const Nine = () => {
  return (
    <div className="flex font-sans">
      <div className="bg-yellow-300 w-30 ">
        <p className='rotate-270 w-48 mt-40 text-2xl '>Reflection Actions</p>
      </div>

      <div className="flex-1 ml-5 p-5 border-gray-400 flex flex-col justify-start text-gray-800 ">
        <div className="font-semibold mb-4">
          <p className='text-justify'>
            What is your approach to have career conversation with your team members? Mention key challenges ?</p>
         
        </div>
         <input
            className=' border-2 border-dotted w-190 h-25 mt-5 rounded-2xl'>
          </input>

        <p className="mb-5 text-justify w-190 mt-10">
          Aryan, a high-performing Gen Z employee who rose quickly in just two years, has recently shown signs of disengagement despite strong past reviews. During a check-in, he confides in his manager that he’s losing passion and questioning the meaning of his current role. Recognizing the need beyond performance metrics, you as the manager of Aryan has to initiate a career coaching conversation to explore Aryan’s evolving aspirations and align them with future opportunities.
        </p>

        <div className="font-semibold">
          Create a career coaching flow and action plan?
        </div>
        <input
            className=' border-2 border-dotted w-190 h-30 mt-5 rounded-2xl'>
          </input>
      </div>
      <div className="bg-yellow-300 w-30 ">
        
      </div>
    </div>
  );
};

export default Nine;
