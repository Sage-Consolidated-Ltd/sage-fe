import React, { act } from "react";
import type { TabsProps } from "../../types/tab";

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "pill",
  className = "",
}) => {
  // Base container styles
  const containerClasses = {
    underline: "flex items-center",
    pill: "flex items-center gap-2 p-1 bg-gray-50 rounded-2xl",
    text: "flex items-center gap-[25px]",
  };

  // Tab button styles
  const getTabClasses = (tabId: string, disabled?: boolean) => {
    const isActive = activeTab === tabId;
    const baseClasses =
      "flex items-center gap-2 transition-all duration-200 font-medium whitespace-nowrap cursor-pointer";

    if (disabled) {
      return `${baseClasses} cursor-not-allowed text-text-tertiary opacity-50`;
    }

    if (variant === "underline") {
      const activeClasses = isActive
        ? "text-text-primary border-b-2 border-primary pb-3 px-[19px]"
        : "text-text-muted border-b-2 border-border hover:border-primary pb-3 px-[19px]";
      return `${baseClasses} ${activeClasses}`;
    }

    if (variant === "text") {
      const activeClasses = isActive ? "text-[#1E1A19]" : "text-[#4A3F3C]/60";
      return `${baseClasses} ${activeClasses}`;
    }

    // Pill variant
    const activeClasses = isActive
      ? "bg-primary-50 border border-border-focus text-primary-900"
      : "text-text-tertiary hover:text-primary-900 hover:bg-white/50";
    return `${baseClasses} px-4 py-2 min-h-[48px] rounded-xl ${activeClasses}`;
  };

  return (
    <div className={`${containerClasses[variant]} ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => !tab.disabled && onTabChange(tab.id)}
          disabled={tab.disabled}
          className={getTabClasses(tab.id, tab.disabled)}
        >
          {tab.icon && <span className="flex items-center">{tab.icon}</span>}
          <span>{tab.label}</span>
          {tab.count !== undefined && (
            <span
              className={`min-w-[23px] h-[19px] text-xs text-white rounded-lg grid place-items-center ${
                activeTab === tab.id ? "bg-primary" : "bg-text-muted"
              }`}
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
