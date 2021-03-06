import React from 'react';

export default function TextChecked(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 8h60M2 24h60M2 40h24M2 56h24" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M35 45l8 9 16-16" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
