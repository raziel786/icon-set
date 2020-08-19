import React from 'react';

export default function ForwardArrow(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M42.014 38.001l8-8.001-8-8.011" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M50 30H16v12h6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
