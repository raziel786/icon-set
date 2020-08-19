import React from 'react';

export default function Highway(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M54.6 24a15.3 15.3 0 01-.6-4 20.7 20.7 0 012-8l-6-8C39.2 7.5 32 3 32 3s-7.2 4.5-18 1l-6 8a20.7 20.7 0 012 8 15.3 15.3 0 01-.6 4" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M9.4 24C8.3 28.1 6 31.8 6 38c0 16.3 22 18.9 26 23 4-4.1 26-6.7 26-23 0-6.2-2.3-9.9-3.4-14z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
