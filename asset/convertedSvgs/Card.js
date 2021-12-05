import * as React from "react";

function SvgCard(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 50 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40.234 35.578H9.766C4.38 35.578 0 31.198 0 25.812V10.188C0 4.803 4.38.422 9.766.422h30.468C45.62.422 50 4.802 50 10.187v15.626c0 5.384-4.38 9.765-9.766 9.765zM9.766 4.328a5.866 5.866 0 00-5.86 5.86v15.624c0 3.231 2.629 5.86 5.86 5.86h30.468c3.231 0 5.86-2.629 5.86-5.86V10.188c0-3.23-2.629-5.859-5.86-5.859H9.766z"
        fill="url(#Card_svg__paint0_linear_78_181)"
      />
      <path
        d="M40.234 12.14H9.766a1.953 1.953 0 110-3.906h30.468a1.953 1.953 0 110 3.907z"
        fill="url(#Card_svg__paint1_linear_78_181)"
      />
      <path
        d="M17.188 27.766H9.765a1.953 1.953 0 110-3.907h7.421a1.953 1.953 0 110 3.907z"
        fill="url(#Card_svg__paint2_linear_78_181)"
      />
      <defs>
        <linearGradient
          id="Card_svg__paint0_linear_78_181"
          x1={0}
          y1={15.422}
          x2={55.675}
          y2={36.081}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12C2E9" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#F64F59" />
        </linearGradient>
        <linearGradient
          id="Card_svg__paint1_linear_78_181"
          x1={7.813}
          y1={9.901}
          x2={14.756}
          y2={25.843}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12C2E9" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#F64F59" />
        </linearGradient>
        <linearGradient
          id="Card_svg__paint2_linear_78_181"
          x1={7.813}
          y1={25.526}
          x2={16.939}
          y2={32.431}
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

export default SvgCard;
