import React from 'react';

export default function Glasses(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M4.4 33.4L4 34S2.6 52 16 52s12-16 12-16m31.7-2.6l.4.6s1.4 18-12 18-12-16-12-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M26.1 18c0-4.7-3.1-7.6-6.6-5s-13 17.2-15 20.4M38.1 18c0-4.7 3.1-7.6 6.6-5s13 17.3 15 20.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M62 34.5S48 26 36 36h-8C16.1 26 2.1 34.5 2.1 34.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
