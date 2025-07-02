import * as React from 'react';
import { SVGProps } from 'react';
const HdIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 63 63"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <g
      stroke="#FF3C2F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      clipPath="url(#a)"
    >
      <path d="M7.875 18.375a5.25 5.25 0 0 1 5.25-5.25h36.75a5.25 5.25 0 0 1 5.25 5.25v26.25a5.25 5.25 0 0 1-5.25 5.25h-36.75a5.25 5.25 0 0 1-5.25-5.25v-26.25Z" />
      <path d="M36.75 23.625v15.75h2.625a5.25 5.25 0 0 0 5.25-5.25v-5.25a5.25 5.25 0 0 0-5.25-5.25H36.75ZM18.375 39.375v-15.75M26.25 39.375v-15.75M18.375 31.5h7.875" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h63v63H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default HdIcon;
