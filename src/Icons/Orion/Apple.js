import React from 'react';

export default function Apple(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M23 6c5.2 0 10 3.8 10 12v2m4-6c0-6 2-12 12-12 0 6-2 12-12 12z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M33 20c-3.4 0-4.9-2-12-2S7 24.8 7 36s8.2 26 16.9 26c5.3 0 5.7-4 8.6-4s5.2 4 8.7 4S57 52.5 57 36 46.6 18 43 18s-6.1 2-10 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
