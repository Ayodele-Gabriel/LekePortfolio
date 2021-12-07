import * as React from "react";

function SvgCupPin(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 115 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect opacity={0.2} width={115} height={109} rx={10} fill="#070D10" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.347 77.386l-3.773-18.26.078-.039a5.865 5.865 0 010-11.73h11.73v-7.82a11.73 11.73 0 1123.461 0v7.82h11.3a5.872 5.872 0 11.548 11.73l-3.754 18.3a7.077 7.077 0 01-6.92 5.65h-2.288a1.955 1.955 0 110-3.91h2.287a3.186 3.186 0 003.109-2.522l3.539-17.46H38.562l3.559 17.46a3.167 3.167 0 003.089 2.521h6.432a1.955 1.955 0 110 3.91h-6.374a7.077 7.077 0 01-6.92-5.65zm14.158-43.34a7.82 7.82 0 00-2.29 5.53v7.82h15.64v-7.82a7.82 7.82 0 00-13.35-5.53zm28.639 17.26H34.652a1.955 1.955 0 000 3.91h46.492a1.955 1.955 0 000-3.91zM69.159 63.702a1.957 1.957 0 00-2.096-2.576 1.955 1.955 0 00-1.658 1.5l-3.128 10.968a1.954 1.954 0 002.842 2.321 1.955 1.955 0 00.912-1.246l3.128-10.967zm-21.193-2.386a1.955 1.955 0 00-1.33 2.424l3.129 10.968a1.957 1.957 0 003.142 1.076 1.955 1.955 0 00.611-2.151L50.39 62.665a1.953 1.953 0 00-2.424-1.35z"
        fill="url(#cupPin_svg__paint0_linear_94_7)"
      />
      <defs>
        <linearGradient
          id="cupPin_svg__paint0_linear_94_7"
          x1={28.787}
          y1={51.371}
          x2={97.64}
          y2={70.399}
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

export default SvgCupPin;
