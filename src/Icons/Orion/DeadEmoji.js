import React from 'react';

export default function DeadEmoji(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <ellipse data-name="layer1" cx={32} cy={46} rx={5} ry={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 22l8 8m-8 0l8-8m12 0l8 8m-8 0l8-8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
