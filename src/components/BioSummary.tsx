import React from 'react';

const BioSummary = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between w-full text-gray-600 dark:text-gray-300 text-lg font-semibold">
      <span>Founding Software Engineer @ Aeolus Labs</span>
      <div className="hidden md:block h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
      <span>Princeton <span className="text-[#FF6000]">'24</span></span>
      <div className="hidden md:block h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
      <span>San Francisco, CA</span>
    </div>
  );
};

export default BioSummary;