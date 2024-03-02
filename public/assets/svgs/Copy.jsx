import React from "react";

export const Copy = ({
  className,
  fill = "none",
  pathFill = "white",
  stoke,
}) => {
  return (
    <svg
      className={`${className}`}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Copy">
        <path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.75 3.125C6.75 2.77982 7.02982 2.5 7.375 2.5H17.375C17.7202 2.5 18 2.77982 18 3.125V13.125C18 13.4702 17.7202 13.75 17.375 13.75H13.625C13.2798 13.75 13 13.4702 13 13.125C13 12.7798 13.2798 12.5 13.625 12.5H16.75V3.75H8V6.875C8 7.22018 7.72018 7.5 7.375 7.5C7.02982 7.5 6.75 7.22018 6.75 6.875V3.125Z"
          fill={pathFill}
        />
        <path
          id="Vector (Stroke)_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6.875C3 6.52982 3.27982 6.25 3.625 6.25H13.625C13.9702 6.25 14.25 6.52982 14.25 6.875V16.875C14.25 17.2202 13.9702 17.5 13.625 17.5H3.625C3.27982 17.5 3 17.2202 3 16.875V6.875ZM4.25 7.5V16.25H13V7.5H4.25Z"
          fill={pathFill}
        />
      </g>
    </svg>
  );
};
