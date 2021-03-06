import React from 'react';

export default function Question(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M22 21.41c0-3.6 2.758-9.41 10.587-9.41C40.417 12 42 19.035 42 21.41s-.738 5.116-5.07 9.448C32.595 35.19 32 37.44 32 39.5V42" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={49} r={3} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
