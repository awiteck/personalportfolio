import React from 'react';

const BioSummary = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between w-full text-gray-600 text-lg font-semibold">
      <span>AI Engineer @ ZettaBlock</span>
      <div className="hidden md:block h-4 w-px bg-gray-300"></div>
      <span>Princeton <span className="text-[#FF6000]">'24</span></span>
      <div className="hidden md:block h-4 w-px bg-gray-300"></div>
      <span>San Francisco, CA</span>
    </div>
  );
};

export default BioSummary;