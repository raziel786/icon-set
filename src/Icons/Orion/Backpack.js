import React from 'react';

export default function Backpack(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M56 26v32a4 4 0 01-4 4H12a4 4 0 01-4-4V26" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M12 62H6a4 4 0 01-4-4V42a4 4 0 014-4h2m44 24h6a4 4 0 004-4V42a4 4 0 00-4-4h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <rect data-name="layer1" x={8} y={10} width={48} height="19.98" rx={4} ry={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M24 10a8 8 0 1116 0M24.1 46h-8v-8h8v8zM48 46h-8v-8h8v8zm-27.9-8V10.2m0 35.8v4M44 38V10.2M44 46v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
