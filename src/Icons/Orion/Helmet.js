import React from 'react';

export default function Helmet(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M27.3 52H38c3.2 0 8-2.7 8-8V34m8 24l-10-8.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M32.1 6C16 6 2 18.3 2 33.6s10.8 24.3 17.1 24.3 8.9-4.7 8.9-10S32.7 34 44.7 34h11.6c2.7 0 7.1-2.4 5.2-8.1S52.5 6 32.1 6zM52 24h-6M18 44h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
