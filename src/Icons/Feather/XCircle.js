import React from 'react';

export default function XCircle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle" {...props}>
      <circle cx={12} cy={12} r={10} />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  );
}
