import React, { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const SettingsCard = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-surface rounded-xl shadow-settings py-[27px] px-[30px] flex flex-col gap-6 ${className}`}
    >
      {children}
    </div>
  );
};

// --- Subcomponents ---

// 1. Header (Title + Action)
const Header = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => (
  <div className="flex items-center justify-between border-b border-border pb-3">
    <h3 className="text-[20px] font-bold text-text-secondary">{title}</h3>
    <div className="text-sm text-text-secondary">{children}</div>
  </div>
);

// 2. Row (The key-value pairs)
interface RowProps {
  label: string;
  value?: ReactNode;
  children?: ReactNode; // In case you want to pass custom status badges
}

const Row = ({ label, value, children }: RowProps) => (
  <div className="text-sm xl:text-base flex justify-between items-center">
    <span className=" text-text-secondary">{label}</span>
    <div className="text-right font-bold text-text-secondary">
      {value || children}
    </div>
  </div>
);

// Namespace assignment
SettingsCard.Header = Header;
SettingsCard.Row = Row;

export default SettingsCard;
