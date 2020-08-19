import React from 'react';

export default function Recording(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42 32a10 10 0 01-10 10 10 10 0 01-10-10V12A10 10 0 0132 2a10 10 0 0110 10z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M50 22v10a18 18 0 01-18 18 18 18 0 01-18-18V22m18 28v12m-10 0h20M14 26h36" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
