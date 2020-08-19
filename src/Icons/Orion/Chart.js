import React from 'react';

export default function Chart(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M32 47C15.432 47 2 38.047 2 27v10c0 11.046 13.432 20 30 20a40.987 40.987 0 0017-3.523v-10A41 41 0 0132 47z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M62 27C62 15.955 48.568 7 32 7S2 15.955 2 27s13.432 20 30 20a41 41 0 0017-3.523V43M32 27V7.008 27" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M49 43.477v10C56.851 49.87 62 43.837 62 37V27c0 6.838-5.149 12.87-13 16.477z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeLinejoin="round" stroke="currentColor" fill="none" d="M49 43v.477C56.851 39.87 62 33.838 62 27H32l8 7.529z" data-name="layer1" strokeLinecap="round" />
    </svg>
  );
}
