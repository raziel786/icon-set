import React from 'react';

export default function Bicycle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 8v16m0 6v32m-6-16h-4v8h-2" />
      <path data-name="layer1" d="M20 54a2 2 0 01-1.9 2h-4.2a2 2 0 01-1.9-2v-2a2 2 0 011.9-2h4.2a2 2 0 011.9 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M38 46h6v-8h2" />
      <path data-name="layer1" d="M46 38a2 2 0 011.9-2h4.2a2 2 0 011.9 2v2a2 2 0 01-1.9 2h-4.2a2 2 0 01-1.9-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M32 16c-9.4 0-9.6-8-11-8H8m24 8c9.4 0 9.6-8 11-8h13M26 48V30a6 6 0 016-6 6 6 0 016 6v18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M39 3.6C39 5.2 33.7 8 32 8c-1.7 0-7-2.9-7-4.6C25 1.8 26.3 2 28 2h8c1.7 0 3-.1 3 1.6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
