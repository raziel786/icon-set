import React from 'react';

export default function Letter(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 2h60v60H2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 14h32M12 26h40m-40 8h40m-40 8h40m-40 8h18" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
