import React from 'react';

export default function PizzaSlice(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={4} cy="23.999" cx="28.999" data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={2} cy="33.999" cx="34.999" data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r="2.5" cy="37.499" cx="20.999" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M49.979 35.087L57 32C51.011 18.087 39.13 7.567 25 2l-2.527 7.3" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M22.473 9.3L7 54l42.978-18.91C44.833 23.128 34.618 14.087 22.473 9.3zm-5.474 40.299v8.4m8-11.92v15.92m16-22.907v12.907" data-name="layer1" />
    </svg>
  );
}
