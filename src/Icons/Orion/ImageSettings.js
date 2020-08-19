import React from 'react';

export default function ImageSettings(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 46h32.8M42 58H2V2h48v30" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx="46.9" cy={47} r={5} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M62 51l-3.4-2a11.7 11.7 0 000-4.3l3.1-1.7-4-6.9-3.1 1.8a12 12 0 00-3.7-2.1V32h-8v3.7a12 12 0 00-3.7 2.1L36 36l-4 7 3 1.7a11.6 11.6 0 000 4.4L31.7 51l4 6.9 3.3-1.8a12 12 0 003.8 2.2V62h8v-3.7a12 12 0 003.9-2.3l3.3 2z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
