import React from 'react';

export default function AngleBrackets(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24.2 10L3 32l21.2 22" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M40.2 10l21.1 22-21.1 22" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
