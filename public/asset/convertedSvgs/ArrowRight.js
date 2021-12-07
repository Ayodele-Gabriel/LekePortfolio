import * as React from "react";

function SvgArrowRight(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 3.5a.5.5 0 000 1v-1zm19.854.854a.5.5 0 000-.708L17.672.464a.5.5 0 10-.707.708L19.793 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM1 4.5h19.5v-1H1v1z"
        fill="url(#arrowRight_svg__paint0_linear_79_352)"
      />
      <defs>
        <linearGradient
          id="arrowRight_svg__paint0_linear_79_352"
          x1={1}
          y1={1}
          x2={0.43}
          y2={5.548}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F64F59" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#12C2E9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgArrowRight;
