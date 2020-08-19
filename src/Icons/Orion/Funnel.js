import React from 'react';

export default function Funnel(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M2 8.8V18c0 1.2.9 2.5 2 3.5s18.9 17 20.2 18.4 1.8 2.3 1.8 3.7v15.7c0 1.8 1.1 3.5 4 2.2s8-5.4 8-7.8v-10c0-1.8.2-3.1.9-3.8L60 21a4.9 4.9 0 002-3.5V8.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <ellipse data-name="layer1" cx={32} cy={9} rx={30} ry={7} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
