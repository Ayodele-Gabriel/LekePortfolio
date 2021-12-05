import * as React from 'react'

function SvgCardGroup(props) {
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
        d="M74.28 74.297H40.832c-5.912 0-10.72-4.81-10.72-10.72V46.423c0-5.912 4.808-10.72 10.72-10.72H74.28c5.911 0 10.72 4.808 10.72 10.72v17.152c0 5.912-4.809 10.72-10.72 10.72zM40.832 39.99a6.44 6.44 0 00-6.432 6.433v17.152a6.44 6.44 0 006.432 6.433H74.28a6.44 6.44 0 006.432-6.433V46.424a6.44 6.44 0 00-6.432-6.433H40.832z"
        fill="url(#CardGroup_svg__paint0_linear_128_5)"
      />
      <path
        d="M74.28 48.568H40.831a2.144 2.144 0 110-4.288h33.447a2.144 2.144 0 110 4.288z"
        fill="url(#CardGroup_svg__paint1_linear_128_5)"
      />
      <path
        d="M48.98 65.72h-8.148a2.144 2.144 0 110-4.287h8.147a2.144 2.144 0 110 4.288z"
        fill="url(#CardGroup_svg__paint2_linear_128_5)"
      />
      <defs>
        <linearGradient
          id="CardGroup_svg__paint0_linear_128_5"
          x1={30.111}
          y1={52.17}
          x2={91.23}
          y2={74.849}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12C2E9" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#F64F59" />
        </linearGradient>
        <linearGradient
          id="CardGroup_svg__paint1_linear_128_5"
          x1={38.688}
          y1={46.109}
          x2={46.31}
          y2={63.611}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12C2E9" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#F64F59" />
        </linearGradient>
        <linearGradient
          id="CardGroup_svg__paint2_linear_128_5"
          x1={38.688}
          y1={63.262}
          x2={48.706}
          y2={70.842}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12C2E9" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#F64F59" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgCardGroup
