import React from 'react';

export default function Strawberry(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M14 4c4.6 1.3 12.1 5.8 18 12C37.8 9.9 43.2 5.7 50 4M32 2v14M20 26v4m4 6v4m16-4v4m-8-14v4m0 16v4m12-24v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M32 16c-7.4-3.3-24-5.5-24 12.8S26.5 62 31.9 62 56 46.5 56 28.2 38.7 13.3 32 16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
