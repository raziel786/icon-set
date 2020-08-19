import React from 'react';

export default function Meat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M40 6c-9.6 0-16.2 2-22 10S2 24.9 2 38s13.2 20 26 20 34-5.5 34-26S48.2 6 40 6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M40 14c-8.6 0-13.5 2.3-16 6s-7.9 8-10.5 10.5A10.1 10.1 0 0010 38c0 7.5 6.9 12 18 12s26-3.9 26-18c0-11-5.5-18-14-18z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={40} cy={30} r={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
