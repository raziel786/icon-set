import React from 'react';

export default function ColorPalette(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={46} cy={20} r={4} transform="rotate(-45 46.003 20.045)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={32} cy={14} r={4} transform="rotate(-45 31.98 13.954)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={19} cy={19} r={3} transform="rotate(-45 18.985 19.036)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={15} cy={33} r={5} transform="rotate(-45 15.004 33.085)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M18.9 46C29 46 36 42.1 35 49.4c-.6 4.3-9 .4-9 7.5 0 3.3 3 4.9 7.1 5.1a29.8 29.8 0 0014.2-4.2l.7-.5 1.3-.8a30 30 0 10-47-20.4C3.5 42.3 8.9 46 18.9 46z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
