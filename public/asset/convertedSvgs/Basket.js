import * as React from "react";

function SvgBasket(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.193 26.931l-2.05-9.919.043-.02a3.186 3.186 0 010-6.372h6.372V6.372a6.372 6.372 0 1112.743 0v4.248h6.138a3.19 3.19 0 01.297 6.371l-2.039 9.94a3.844 3.844 0 01-3.759 3.07h-1.242a1.062 1.062 0 110-2.125h1.242a1.731 1.731 0 001.689-1.37l1.922-9.483H5.309l1.933 9.483a1.72 1.72 0 001.678 1.37h3.494a1.062 1.062 0 010 2.124H8.952a3.844 3.844 0 01-3.76-3.069zm7.69-23.542a4.248 4.248 0 00-1.244 3.004v4.248h8.495V6.393a4.248 4.248 0 00-7.25-3.004zm15.556 9.376H3.186a1.062 1.062 0 000 2.124h25.253a1.062 1.062 0 100-2.124zm-6.51 6.732a1.06 1.06 0 10-2.039-.584l-1.699 5.958a1.061 1.061 0 102.04.584l1.698-5.957zm-11.511-1.295a1.062 1.062 0 00-.722 1.317l1.699 5.957a1.063 1.063 0 102.039-.584l-1.7-5.957a1.062 1.062 0 00-1.316-.733z"
        fill="url(#Basket_svg__paint0_linear_78_68)"
      />
      <defs>
        <linearGradient
          id="Basket_svg__paint0_linear_78_68"
          x1={0}
          y1={12.8}
          x2={37.399}
          y2={23.136}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12C2E9" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#F64F59" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgBasket;
