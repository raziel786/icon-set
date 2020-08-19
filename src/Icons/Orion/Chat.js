import React from 'react';

export default function Chat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42 8H22a20 20 0 000 40h2v10l12-10h6a20 20 0 000-40z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={20} cy={28} r={2} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={28} r={2} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={44} cy={28} r={2} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
