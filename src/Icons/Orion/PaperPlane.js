import React from 'react';

export default function PaperPlane(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M26 38v21l10.3-14.6" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M3 29L59 5l-9 48-24-15-23-9zM59 5L26 38" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
