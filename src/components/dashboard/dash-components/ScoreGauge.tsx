import { useMemo } from "react";

interface ScoreGaugeProps {
  score: number; // 0-100
  size?: number;
  strokeWidth?: number;
}

const ScoreGauge = ({
  score,
  size = 160,
  strokeWidth = 16,
}: ScoreGaugeProps) => {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  // Arc calculations for a semi-circle (180 degrees)
  const circumference = Math.PI * radius;

  // Calculate the score arc length (0-100 maps to 0-180 degrees)
  const scoreArcLength = (score / 100) * circumference;
  const remainingArcLength = circumference - scoreArcLength;

  // Create the arc path for a semi-circle (bottom half open)
  const createArcPath = (r: number) => {
    const startX = center - r;
    const startY = center;
    const endX = center + r;
    const endY = center;

    return `M ${startX} ${startY} A ${r} ${r} 0 0 1 ${endX} ${endY}`;
  };

  const arcPath = createArcPath(radius);

  // Gradient stops for orange → yellow → green
  const gradientId = useMemo(
    () => `scoreGradient-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size / 2 + strokeWidth}
        viewBox={`0 0 ${size} ${size / 2 + strokeWidth}`}
        className="gauge-shadow"
      >
        <defs>
          {/* Gradient for the score arc */}
          <linearGradient id={gradientId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FF9000" />
            <stop offset="20%" stopColor="#EDDB36" />
            <stop offset="100%" stopColor="#18E977" />
          </linearGradient>
        </defs>

        <g transform={`translate(0, ${strokeWidth / 2})`}>
          {/* Background track (remaining portion) */}
          <path
            d={arcPath}
            fill="none"
            stroke="#F6F7FC"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={-scoreArcLength}
            className="transition-all duration-700 ease-out"
          />

          {/* Score arc with gradient */}
          <path
            d={arcPath}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={remainingArcLength}
            className="transition-all duration-700 ease-out"
          />
        </g>
      </svg>
    </div>
  );
};

export default ScoreGauge;
