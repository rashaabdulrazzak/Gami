import React from "react";

export default function LunchpadFlipped({
  height = 70,
  width = "91",
  color = "#E5E7EB",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.7507 70L0 46.6662H27.5L13.7507 70Z" fill={color} />
      <path d="M41.2493 70L27.5 46.6662H55L41.2493 70Z" fill="#E5E7EB" />
      <path
        d="M27.5 46.6662L13.7493 23.3338H41.2493L27.5 46.6662Z"
        fill={color}
      />
      <path d="M27.5 0L41.2493 23.3338H13.7493L27.5 0Z" fill="white" />
      <path d="M13.7493 23.3338L27.5 46.6662H0L13.7493 23.3338Z" fill="white" />
    </svg>
  );
}
