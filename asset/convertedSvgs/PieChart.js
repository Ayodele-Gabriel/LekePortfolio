import * as React from "react";

function SvgPieChart(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 395 395"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.2}
        d="M124.972 269.277c-39.849-39.849-39.849-104.457 0-144.306 39.849-39.848 104.456-39.848 144.305 0 39.849 39.849 39.849 104.457 0 144.306-39.849 39.848-104.456 39.848-144.305 0z"
        fill="url(#PieChart_svg__paint0_linear_78_14)"
      />
      <path
        d="M108.222 173.302c-5.335-1.429-10.87 1.734-11.77 7.183A102.04 102.04 0 10201.78 95.191c-5.517-.252-9.762 4.505-9.473 10.02l4.096 78.168c.356 6.784-6.012 11.941-12.574 10.183l-75.608-20.26z"
        fill="url(#PieChart_svg__paint1_linear_78_14)"
      />
      <defs>
        <linearGradient
          id="PieChart_svg__paint0_linear_78_14"
          x1={289.843}
          y1={145.537}
          x2={71.301}
          y2={260.292}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12C2E9" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#F64F59" />
        </linearGradient>
        <linearGradient
          id="PieChart_svg__paint1_linear_78_14"
          x1={317.556}
          y1={301.369}
          x2={88.602}
          y2={212.314}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F64F59" />
          <stop offset={0.496} stopColor="#C471ED" />
          <stop offset={1} stopColor="#12C2E9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgPieChart;
