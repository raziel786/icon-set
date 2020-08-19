import React from 'react';

export default function MapPlace(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M34 46h18l8 16H4l8-16h18" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M50 20a18 18 0 10-22.9 17.3L32 52l4.9-14.7A18 18 0 0050 20z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={8} cy={20} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
