import React from 'react';

export default function Conference(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={50} cy={9} r={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M44 41v13a3 3 0 003 3h6a3 3 0 003-3V41h3a3 3 0 003-3V24a3 3 0 00-3-3H41a3 3 0 00-3 3v1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={14} cy={9} r={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M26 24a3 3 0 00-3-3H5a3 3 0 00-3 3v14a3 3 0 003 3h3v13a3 3 0 003 3h6a3 3 0 003-3V41" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={13} r={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M41 25H23a3 3 0 00-3 3v14a3 3 0 003 3h3v13a3 3 0 003 3h6a3 3 0 003-3V45h3a3 3 0 003-3V28a3 3 0 00-3-3z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
