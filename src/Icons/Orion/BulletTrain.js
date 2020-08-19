import React from 'react';

export default function BulletTrain(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 53L6 62m42-9l10 9" />
      <path data-name="layer1" d="M54 32c-1-2.9-8-26-8-26s-.6-4-6-4H24c-5.4 0-6 4-6 4s-7 23.1-8 26a33.4 33.4 0 00-2 10c0 3.7 1.5 6.8 6.8 10.2S26.4 56 32 56s12-.5 17.2-3.8S56 45.7 56 42a33.3 33.3 0 00-2-10z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M42.8 21.6c-.8-3.2-2.6-9.6-2.6-9.6s-.6-2-2.2-2H26c-1.5 0-2.2 2-2.2 2l-2.7 9.6c-.9 3.2-.9 5 .8 6.4s5.9 4 10 4 8.3-2.6 10-4 1.7-3.6.9-6.4zM16 42l8 4m24-4l-8 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
