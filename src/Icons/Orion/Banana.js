import React from 'react';

export default function Banana(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M15.9 4s2.1 10.4 2.5 12.2 2.3 2.2 3.4 3c3.1 2.3 6.5 7.1 8.7 9s6.8 6.9 13.4 7.8 10.7.8 14 0a3.1 3.1 0 014 4c-.6 1.6-4.7 5.3-8.6 6.6s-14.7 2.6-19.8.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M1.9 4h16.6M5.9 4v10c0 .9-2.2 5.7-3.4 11.7S3.9 42 11.9 50s18.5 10 23.4 10c8.2 0 9.4-4 8.8-5.9s-2.7-2.9-7.9-5.3S21.5 39.5 19 31.2 13.6 17.5 11.9 16s-.5-1.1 0-2 2-10 2-10" />
    </svg>
  );
}
