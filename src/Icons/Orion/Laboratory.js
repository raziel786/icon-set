import React from 'react';

export default function Laboratory(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M20 9v32a4.012 4.012 0 01-4 4 4.012 4.012 0 01-4-4V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <rect data-name="layer2" x={2} y={51} width={60} height={7} rx={1} ry={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M6 21v30m52-30v30m-6-30h10m-26 0h8m-24 0h8M2 21h10" strokeLinejoin="round" />
      <path data-name="layer1" d="M36 9v32a4.012 4.012 0 01-4 4 4.012 4.012 0 01-4-4V9m-2 0h12M10 9h12m30 0v32a4.012 4.012 0 01-4 4 4.012 4.012 0 01-4-4V9m-2 0h12M28 30.083h8M44 25h8m-40-7h8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
