import React from 'react';

export default function ProfilePicture(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M6 2h52v60H6zm0 48h52" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M50.7 50a9.3 9.3 0 00-7.4-7c-6.3-1.2-5.4-3.2-5.4-4.4v-.7c1.5-1.4 1.7-3.3 2.4-5.6 1.9 0 2.4-4 2.4-4.6s.1-3-1.9-3c4.2-11.4-6.9-16-15.3-10.1-3.4 0-3.7 5.1-2.5 10.1-2 0-1.9 2.4-1.9 3s.4 4.6 2.4 4.6c.6 2.3.8 4.2 2.3 5.6v.8c0 1.3.9 3.3-5.4 4.4a9.2 9.2 0 00-7.4 7" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
