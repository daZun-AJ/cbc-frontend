import React from 'react';

// Primary Button
export const PrimaryButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-[25px] py-[7px] bg-green-400 rounded-full flex flex-row gap-[10px] items-center hover:bg-green-500 duration-300 mt-[20px] cursor-pointer"
  >
    {children}
  </button>
);

// Secondary Button
export const SecondaryButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-[25px] py-[7px] w-fit border-[2px] border-green-400 rounded-full flex flex-row gap-[10px] items-center hover:bg-green-400/20 duration-300 mt-[20px] cursor-pointer"
  >
    {children}
  </button>
);