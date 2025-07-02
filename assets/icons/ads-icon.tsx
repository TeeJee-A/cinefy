import * as React from "react"
import { SVGProps } from "react"
const AdsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M24 13.333h26.667A5.333 5.333 0 0 1 56 18.667v26.666m-5.333 5.334H13.333A5.333 5.333 0 0 1 8 45.333V18.667a5.333 5.333 0 0 1 5.333-5.334" />
      <path d="M37.334 37.333V40H40m5.334-5.333v-5.334A5.333 5.333 0 0 0 40 24h-2.666v2.667M18.666 40V28a4 4 0 0 1 5.54-3.693m2.1 2.032a3.97 3.97 0 0 1 .36 1.661v12M18.666 34.667h8M8 8l48 48" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h64v64H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default AdsIcon
