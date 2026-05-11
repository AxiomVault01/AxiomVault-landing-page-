import React from 'react';

const GoogleFormCTASection: React.FC = () => {
  //  Google Form URL
  const googleFormUrl = "https://forms.gle/sC5m4DZWHrbGwVPR9";
  // const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfdcDL0kSZRbbAXen5-TkIYV3vy0nZOD3iMpOwMrtHEvL5Reg/viewform?usp=publish-editor";

  const handleButtonClick = (): void => {
    // Open in a new tab with security features
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex justify-center items-center p-3 w-full ">
      {/* The "Deep" Container */}
      <div className="bg-white rounded-2xl p-10  w-full text-center border border-brand/10 shadow-lg">
        
        {/* The p tag */}
        <p className="text-brand text-lg md:text-xl mb-8 leading-relaxed">
          At <span className="text-brand font-bold">AxiomVault,</span> we strive for excellence. your feedback directly shapes our roadmap and help us improve our services. Could you spare a moment to fill out our 
          <span className="text-blue-400 font-medium"> Google Form</span> and share your thoughts.
        </p>

        {/* The Button */}
        <button
          onClick={handleButtonClick}
          className="bg-brand hover:bg-brand/80 cursor-pointer text-white font-semibold py-2 px-10 rounded-lg 
                     transition-all duration-200 transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 
                     focus:ring-offset-slate-900 shadow-lg"
        >
          Open Form
        </button>
      </div>
    </div>
  );
};

export default GoogleFormCTASection;
