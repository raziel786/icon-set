import React from 'react';

export default function LessIndent(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 4h48m-36 8h36M26 52h36m-48 8h48M26 20h36m-36 8h36m-36 8h36m-36 8h36" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M16 18L2 32l14 14" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
