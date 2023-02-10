import React from "react";

export default function MidleFlipped({
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
      <path d="M22.0207 57.1338V0L0 12.8662V70L22.0207 57.1338Z" fill="white" />
      <path
        d="M22.986 57.1338L45.0174 70V12.8662L22.986 0V57.1338Z"
        fill={color}
      />
      <path
        d="M68.0034 57.1338V0L45.9826 12.8662V70L68.0034 57.1338Z"
        fill="white"
      />
      <path d="M91 70V12.8662L68.9686 0V57.1338L91 70Z" fill={color} />
    </svg>
  );
}
