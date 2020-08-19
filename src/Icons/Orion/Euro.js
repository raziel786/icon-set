import React from 'react';

export default function Euro(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M53 2h-4a30 30 0 000 60h4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M11 28h36M13 38h30" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
