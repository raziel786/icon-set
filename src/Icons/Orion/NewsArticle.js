import React from 'react';

export default function NewsArticle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 2h60v60H2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M42 20h8m-8 8h12m-12 8h12m-44 8h44m-44 8h38M10 12h24v24H10z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
