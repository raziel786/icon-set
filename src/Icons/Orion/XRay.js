import React from 'react';

export default function XRay(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M6.231 61l12.236-12.235c1.883-1.883 5.514-1.263 7.322-1.263a6.136 6.136 0 002.9-11.58c-2.865-1.378-3.284-1.853-4.57-4.521A6.134 6.134 0 0012.5 34.212c0 3.36.65 5.408-1.263 7.322L2 50.769M62 15.82L48.512 19.5c-2.459.657-5.139-1.7-6.623-2.617a5.637 5.637 0 00-4.494-.695 6.11 6.11 0 00-4.21 7.41 6.213 6.213 0 00.7 1.707c1.683 2.623 1.8 3.24 1.557 6.167a6.31 6.31 0 00.168 1.952 5.771 5.771 0 0010.74 1.52c1.63-2.869 2.091-4.946 4.589-5.614L62 26.348" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M62 7v52a2.006 2.006 0 01-2 2H4a2.006 2.006 0 01-2-2V7m2-5h56a2 2 0 012 2v3H2V4a2 2 0 012-2zm52 47H39m11 6H39" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
