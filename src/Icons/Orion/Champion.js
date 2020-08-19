import React from 'react';

export default function Champion(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer2" x={14} y={46} width={36} height={16} rx={2} ry={2} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24 54h16m-8-8V34" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M16 6C11.7 2.3 2 3.4 2 12s6 16 18.8 17.6M48 6c4.3-3.7 14-2.6 14 6s-6 16-18.8 17.6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M32 34c12 0 16-10 16-17.8V2H16v14c0 8 4 18 16 18z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
