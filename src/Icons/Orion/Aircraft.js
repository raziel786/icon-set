import React from 'react';

export default function Aircraft(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M26.3 57.4L42 37h15a5 5 0 100-10H42L26.3 6.6S25.2 5 24 5h-4.2a1.4 1.4 0 00-1.3.7c-.2.5.3 1.9.5 2.4L25.2 27H14l-5.5-7.3a1.6 1.6 0 00-1.4-.7H4c-.4 0-1.3.1-.8 1.4S8 32 8 32 3.7 42.2 3.2 43.6 3.6 45 4 45h3.1a1.6 1.6 0 001.4-.7L14 37h11.2L19 55.9c-.2.5-.7 1.9-.5 2.4a1.3 1.3 0 001.3.7H24c1.2 0 2.3-1.6 2.3-1.6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
