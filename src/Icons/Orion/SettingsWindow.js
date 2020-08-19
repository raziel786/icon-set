import React from 'react';

export default function SettingsWindow(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={8} cy={12} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={15} cy={12} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={22} cy={12} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 6h52v12H2zm52 27V18M2 18v32h31" />
      <circle data-name="layer1" cx={47} cy={43} r={5} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M62 47l-3.4-2a11.8 11.8 0 00.2-2.1 11.9 11.9 0 00-.2-2.3l3.1-1.6-4-6.9-3.1 1.8C53.4 32.9 52 32 51 32v-4h-8v4a7.9 7.9 0 00-3.9 1.8L36 32l-4 7 3 1.7a11.7 11.7 0 00-.2 2.3 11.9 11.9 0 00.2 2.1L31.7 47l4 6.9 3.3-1.8a8.2 8.2 0 004 1.9v4h8v-4c1 0 2.5-1 3.7-2l3.3 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
