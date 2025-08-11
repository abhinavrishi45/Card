import React from 'react';

const Tenth = () => {
  return (
    <div className="flex font-sans">
      <div className="bg-yellow-300 w-30 ">
        <p className='rotate-270 w-48 mt-40 text-2xl '>Reflection Actions</p>
      </div>

      <div className="flex-1 ml-5 p-5 border-gray-400 flex flex-col justify-start text-gray-800 ">
        <div className="font-semibold mb-4">
          <p className='text-justify text-2xl'>Which Recoginiton practices do i need to adopt ? </p>
          <p className='text-justify create-xl mt-5'>Create a plan for that</p>
        </div>
        <input
          className=' border-2 border-dotted w-190 h-80 mt-5 rounded-2xl'>
        </input>

      </div>
      <div className="bg-yellow-300 w-30 ">

      </div>
    </div>
  );
};

export default Tenth;
