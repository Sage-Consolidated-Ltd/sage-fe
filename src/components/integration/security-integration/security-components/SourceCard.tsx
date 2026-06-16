import React from "react";

interface SourceCardProps {
  icon: React.ReactNode;
  iconBg?: string;
  title: string;
  subtitle?: string;
  description: string;
  authType: string;
  authDetails: string;
  status?: "connected" | "available" | "warning";
  onClick?: () => void;
  className?: string;
}

export const SourceCard: React.FC<SourceCardProps> = ({
  icon,
  iconBg = "bg-blue-500",
  title,
  subtitle,
  description,
  authType,
  authDetails,
  status = "available",
  onClick,
  className = "",
}) => {
  const statusColors = {
    connected: "bg-green-500",
    available: "bg-gray-300",
    warning: "bg-orange-400",
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative bg-surface border border-gray-200 rounded-xl p-4 
        hover:shadow-md hover:border-gray-300 transition-all cursor-pointer
        ${className}
      `}
    >
      {/* Status dot */}
      <div
        className={`
          absolute top-3 right-3 w-2 h-2 rounded-full
          ${statusColors[status]}
        `}
      />

      {/* Header: icon + title */}
      <div className="flex items-start gap-3 mb-2">
        <div
          className={`
            w-10 h-10 rounded-lg flex items-center justify-center shrink-0
            ${iconBg}
          `}
        >
          {icon}
        </div>
        <div className="min-w-0 pr-4">
          <h3 className="text-sm font-semibold text-text-primary leading-tight">
            {title}
            {subtitle && (
              <span className="font-normal text-text-muted"> — {subtitle}</span>
            )}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-text-secondary mb-3 leading-relaxed">
        {description}
      </p>

      {/* Auth info */}
      <div className="space-y-0.5">
        <div className="text-xs font-semibold text-text-primary">
          {authType}
        </div>
        <div className="text-xs text-text-muted">{authDetails}</div>
      </div>
    </div>
  );
};
