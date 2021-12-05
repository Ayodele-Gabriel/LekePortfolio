import * as React from 'react'

function SvgArrow(props) {
  return props.direction === 'right' ? (
    <svg
      width="1em"
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
  ) : (
    <svg
      width="1em"
      viewBox="0 0 16 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 1a1 1 0 00-2 0h2zM7.293 28.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L8 26.586l-5.657-5.657A1 1 0 00.93 22.343l6.364 6.364zM7 1v27h2V1H7z"
        fill="url(#arrow_svg__paint0_linear_76_215)"
      />
      <defs>
        <linearGradient
          id="arrow_svg__paint0_linear_76_215"
          x1={11}
          y1={1}
          x2={6.419}
          y2={0.585}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F64F59" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#12C2E9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgArrow
