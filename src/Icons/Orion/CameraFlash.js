import React from 'react';

export default function CameraFlash(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M62 26.731c0 5.269.254 16.739-9.086 26.08-.018-.008-.033-.02-.049-.028A3.983 3.983 0 0150 54H14a3.991 3.991 0 01-2.844-1.189C1.816 43.471 2.07 32 2.07 26.731A3.936 3.936 0 012 26V6a4 4 0 014-4h52a4 4 0 014 4z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M10 10h44v22H10zm12 8h20m-20 6h20" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M26 46h12M18 32v14m28-14v14m-26 8v8h24v-8" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
