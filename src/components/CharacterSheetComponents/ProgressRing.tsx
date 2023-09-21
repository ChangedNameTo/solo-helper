import * as React from "react";

export default function ProgressRing(props) {
  // The rest of your component logic can go here...
  const radius = 32;
  const stroke = 4;
  const progress = props.progress;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const circleStyle = {
    stroke: "white",
    fill: "transparent",
    strokeWidth: stroke,
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: strokeDashoffset,
    r: normalizedRadius,
    cx: radius,
    cy: radius,
    transition: "stroke-dashoffset 0.35s",
    transform: "rotate(-90deg)",
    transformOrigin: "50% 50%",
  }

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        style={circleStyle}
      />
      <text
        textAnchor="middle"
        fill="white"
        x={radius}
        y={radius + 6}
      >
        {props.progress}%
      </text>
    </svg>
  );
}
