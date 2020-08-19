import React from 'react';

export default function New(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 6h60v12H2zm0 12v40h60V18" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 28v20m10-10H22" />
      <circle data-name="layer1" cx={8} cy={12} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={15} cy={12} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={22} cy={12} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
