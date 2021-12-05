import * as React from "react";

function SvgLists(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Lists_svg__clip0_78_201)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.986 50H16.014C9.553 50 4.297 44.744 4.297 38.283V11.717C4.297 5.256 9.553 0 16.014 0h17.972c6.461 0 11.717 5.256 11.717 11.717v26.566c0 6.46-5.256 11.717-11.717 11.717zM16.014 3.906c-4.307 0-7.81 3.504-7.81 7.81v26.567c0 4.307 3.503 7.81 7.81 7.81h17.972c4.307 0 7.81-3.503 7.81-7.81V11.717c0-4.307-3.503-7.81-7.81-7.81H16.014zm2.248 19.043a2.441 2.441 0 100-4.882 2.441 2.441 0 000 4.882zm14.258-3.027h3.32a1.953 1.953 0 100-3.906h-3.32a2.933 2.933 0 01-2.93-2.93v-3.32a1.953 1.953 0 10-3.906 0v3.32a6.844 6.844 0 006.835 6.836zm-1.563 18.652H17.48a1.953 1.953 0 110-3.906h13.477a1.953 1.953 0 110 3.906zm-13.477-7.52h13.477a1.953 1.953 0 100-3.906H17.48a1.953 1.953 0 000 3.907z"
          fill="url(#Lists_svg__paint0_linear_78_201)"
        />
      </g>
      <defs>
        <linearGradient
          id="Lists_svg__paint0_linear_78_201"
          x1={4.297}
          y1={21.333}
          x2={54.411}
          y2={32.161}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12C2E9" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#F64F59" />
        </linearGradient>
        <clipPath id="Lists_svg__clip0_78_201">
          <path fill="#fff" d="M0 0h50v50H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgLists;
