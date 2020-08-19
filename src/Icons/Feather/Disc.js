import React from 'react';

export default function Disc(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-disc" {...props}>
      <circle cx={12} cy={12} r={10} />
      <circle cx={12} cy={12} r={3} />
    </svg>
  );
}