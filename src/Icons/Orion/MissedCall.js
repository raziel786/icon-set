import React from 'react';

export default function MissedCall(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M49.6 49.7c1.1 1 2.9 2.4 2.1 4.9s-5.5 8.5-13.7 7.2-17.3-9.3-24.8-19.5S.9 21.1 2.1 12.9 11.2 2 13.2 2s3.4 2.1 4.1 3.5L22 15.9a4.5 4.5 0 01-2.1 5.8c-3 1.7-7.8 3.7.7 15.3s11.8 7.5 14.4 5.2a4.5 4.5 0 016.1-.2z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M55 5a2.7 2.7 0 00-3-3 2.8 2.8 0 00-3 3l1 21a2.2 2.2 0 002 2 2.1 2.1 0 002-2z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={52} cy={35} r={2} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
