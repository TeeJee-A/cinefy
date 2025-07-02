import * as React from 'react';
import { SVGProps } from 'react';
const DevicesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 63 63"
    width={60}
    height={50}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF3C2F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M49.793 27.035a2.275 2.275 0 0 1 2.276-2.276h13.655A2.276 2.276 0 0 1 68 27.035v22.758a2.276 2.276 0 0 1-2.276 2.276H52.069a2.276 2.276 0 0 1-2.276-2.276V27.035Z"
    />
    <path
      stroke="#FF3C2F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M61.173 24.759V17.93a2.276 2.276 0 0 0-2.276-2.276H29.31a2.276 2.276 0 0 0-2.276 2.276v27.31a2.275 2.275 0 0 0 2.276 2.276h20.482M56.62 27.034h4.552"
    />
    <path
      stroke="#FF3C2F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M2 4.276A2.276 2.276 0 0 1 4.276 2H40.69a2.276 2.276 0 0 1 2.276 2.276v11.38H30.035c-1.657 0-3 1.339-3 2.995v15.211H4.274A2.276 2.276 0 0 1 2 31.586V4.276ZM2 24.759h25.035M13.38 42.966h13.655M17.93 33.862l-1.137 9.103"
    />
  </svg>
);
export default DevicesIcon;
