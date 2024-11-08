import React from "react";
export default function ToolsIconFlipped({
  height = 70,
  width = "47",
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
      <path
        d="M37.9874 9.09915H23.3489V60C23.3489 65.5226 18.9151 70 13.4464 70V9.09915H0C0 4.07339 4.0337 0 9.01051 0H47C47 5.02577 42.9643 9.09915 37.9874 9.09915Z"
        fill="white"
      />
      <path
        d="M3.72138 15.6463V38.9177C3.72138 40.5253 5.01186 41.8285 6.60376 41.8285C8.19566 41.8285 9.48819 40.5253 9.48819 38.9177V15.6463C9.48819 14.0387 8.1977 12.7355 6.6058 12.7355C5.01391 12.7355 3.72138 14.0387 3.72138 15.6463Z"
        fill={color}
      />
      <path
        d="M27.401 15.6442V54.3805C27.401 55.9881 28.6915 57.2913 30.2834 57.2913C31.8753 57.2913 33.1678 55.9881 33.1678 54.3805V15.6442C33.1678 14.0366 31.8773 12.7335 30.2854 12.7335C28.6935 12.7335 27.401 14.0366 27.401 15.6442Z"
        fill={color}
      />
    </svg>
  );
}
