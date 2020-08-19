import React from 'react';

export default function Trello(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trello" {...props}>
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M7 7h3v9H7zM14 7h3v5h-3z" />
    </svg>
  );
}
