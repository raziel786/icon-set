import React from 'react';

export default function GpsArrow(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M28.8 35.2L30 52l16-34-34 16 16.8 1.2z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={30} cy={32} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
