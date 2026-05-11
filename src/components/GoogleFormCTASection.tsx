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
    <div className="flex justify-center items-center p-8">
      {/* The "Deep" Container */}
      <div className="bg-slate-900 rounded-2xl p-10 max-w-2xl w-full text-center shadow-2xl border border-slate-800">
        
        {/* The p tag */}
        <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed">
          We’d love to hear from you! Click on the button below to fill out our 
          <span className="text-blue-400 font-medium"> Google Form</span> and share your thoughts.
        </p>

        {/* The Button */}
        <button
          onClick={handleButtonClick}
          className="bg-white hover:bg-white/80 cursor-pointer text-brand font-semibold py-2 px-10 rounded-lg 
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
