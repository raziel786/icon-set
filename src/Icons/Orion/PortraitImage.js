import React from 'react';

export default function PortraitImage(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 5v54" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M30 11h32v48H30z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 13l-8-8-8 8" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={42} cy={23} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M30 51.6c0-1.9 4.4-10.7 8.9-10.7s4 4 5.8 4 3.1-12 8-12S62 50.1 62 51.6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
