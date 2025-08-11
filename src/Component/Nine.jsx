import React from 'react';

const Nine = () => {
  return (
    <div className="flex h-[400px] m-5 font-sans">
      {/* Vertical label on the left */}
      <div className="writing-vertical-rl text-lg font-bold text-gray-800 pr-2 border-r-2 border-gray-300 select-none">
        Reflection &amp; Actions
      </div>

      {/* Main content box */}
      <div className="flex-1 ml-5 p-5 border-2 border-dotted border-gray-400 flex flex-col justify-start text-gray-800 text-base leading-relaxed bg-white">
        <div className="font-semibold mb-4">
          What is your approach to have career conversation with your team members? Mention key challenges ?
        </div>

        <div className="mb-5 whitespace-pre-line">
          Aryan, a high-performing Gen Z employee who rose quickly in just two years, has recently shown signs of disengagement despite strong past reviews. During a check-in, he confides in his manager that he’s losing passion and questioning the meaning of his current role. Recognizing the need beyond performance metrics, you as the manager of Aryan has to initiate a career coaching conversation to explore Aryan’s evolving aspirations and align them with future opportunities.
        </div>

        <div className="font-semibold">
          Create a career coaching flow and action plan?
        </div>
      </div>
    </div>
  );
};

export default Nine;
