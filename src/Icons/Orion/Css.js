import React from 'react';

export default function Css(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 2h52l-4 54-22 6-22-6L6 2z" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19.7 38.2l.6 5.8L32 48l12-4 .9-14H19l27-14H18" />
    </svg>
  );
}
