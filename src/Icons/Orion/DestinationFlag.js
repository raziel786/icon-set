import React from 'react';

export default function DestinationFlag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M39 50.2c11 .7 19 3 19 5.8s-11.6 6-26 6-26-2.7-26-6 11.6-6 26-6" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M32 54V2c8.2.1 15.4 11.9 26 12a34.5 34.5 0 01-26 11.8" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
