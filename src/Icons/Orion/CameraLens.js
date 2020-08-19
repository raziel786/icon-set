import React from 'react';

export default function CameraLens(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 40v14h48V40M16 54v8h32v-8m-30-6v6m16-8h12" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M4 10h56v30H4zm4 0V2h48v8M4 25h56m-48 0v15m10-15v15m10-15v15m10-15v15m10-15v15" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
