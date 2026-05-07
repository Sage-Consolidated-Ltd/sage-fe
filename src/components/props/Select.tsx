import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  CheckIcon,
  ChevronDown1Icon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  InfoFillIcon,
  SearchIcon,
  XIcon,
} from "../../utils/icons";

interface SelectOption {
  label: string;
  value: string;
  image?: string;
}

interface CustomSelectInputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: SelectOption[];
  disabled?: boolean;
  width?: string;
  showInfo?: boolean;
  infoTooltip?: string;
  iconVariant?: "down" | "upDown" | "down1";
  searchable?: boolean; // NEW
  searchPlaceholder?: string; // NEW
}

export const Select = ({
  className = "",
  label,
  placeholder = "Select an option",
  name,
  value,
  onChange,
  options = [],
  required = false,
  disabled = false,
  width,
  showInfo = false,
  infoTooltip,
  iconVariant = "down",
  searchable = false,
  searchPlaceholder = "Search...",
}: CustomSelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selected = options.find((opt) => opt.value === value);

  // Filter options when searchable
  const filteredOptions = useMemo(() => {
    if (!searchable || !searchQuery.trim()) return options;
    const q = searchQuery.toLowerCase();
    return options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(q) ||
        opt.value.toLowerCase().includes(q),
    );
  }, [options, searchQuery, searchable]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable) {
      setTimeout(() => searchInputRef.current?.focus(), 10);
    }
  }, [isOpen, searchable]);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleToggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchQuery("");
    }
  };

  // Non-searchable: use native select for simplicity and accessibility
  if (!searchable) {
    return (
      <div className={`relative w-full flex flex-col gap-1 ${width || ""}`}>
        {label && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <label className="block text-sm text-text-primary">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {showInfo && (
                <div className="relative group">
                  <InfoFillIcon className="text-warning w-6 h-6" />
                  {infoTooltip && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                      {infoTooltip}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="relative">
          {selected?.image && (
            <img
              src={selected.image}
              alt={selected.label}
              className="rounded-full h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          )}
          <select
            name={name}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={disabled}
            className={`
              ${className === "" ? "bg-surface border border-input-border" : className}
              w-full text-sm text-text-tertiary leading-[22px] appearance-none rounded-xl py-2 focus:outline-none
              ${disabled ? "bg-gray-50 cursor-not-allowed" : "cursor-pointer"}
              ${selected?.image ? "pl-10" : "px-4"}
              pr-10
            `}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            {iconVariant === "upDown" ? (
              <ChevronUpDownIcon className="h-6 w-6 text-text-secondary" />
            ) : iconVariant === "down1" ? (
              <ChevronDown1Icon
                className={`h-6 w-6 text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            ) : (
              <ChevronDownIcon
                className={`h-6 w-6 text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  // Searchable custom dropdown
  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col gap-1 ${width || ""}`}
      onKeyDown={handleKeyDown}
    >
      {label && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label className="block text-sm text-text-primary">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {showInfo && (
              <div className="relative group">
                <InfoFillIcon className="text-warning w-6 h-6" />
                {infoTooltip && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                    {infoTooltip}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`
          ${className === "" ? "bg-surface border border-input-border" : className}
          w-full text-sm rounded-xl py-2 px-4 pr-10 text-left flex items-center gap-2
          focus:outline-none focus:ring-2 focus:ring-primary/20
          ${disabled ? "bg-gray-50 cursor-not-allowed opacity-50" : "cursor-pointer hover:border-primary/50"}
          ${!value ? "text-text-tertiary" : "text-text-primary"}
        `}
      >
        {selected?.image && (
          <img
            src={selected.image}
            alt={selected.label}
            className="rounded-full h-5 w-5"
          />
        )}
        <span className="truncate">{selected?.label || placeholder}</span>
        <div className="absolute inset-y-0 top-1/2 right-3 flex items-center pointer-events-none">
          {iconVariant === "upDown" ? (
            <ChevronUpDownIcon className="h-6 w-6 text-text-secondary" />
          ) : iconVariant === "down1" ? (
            <ChevronDown1Icon
              className={`h-6 w-6 text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          ) : (
            <ChevronDownIcon
              className={`h-6 w-6 text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          )}
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-input-border rounded-xl shadow-lg overflow-hidden">
          {/* Search input */}
          <div className="p-2 border-b border-border">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full pl-9 pr-8 py-2 text-sm bg-surface border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <XIcon className="w-4 h-4 text-text-secondary hover:text-text-primary" />
                </button>
              )}
            </div>
          </div>

          {/* Options list */}
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-text-secondary text-center">
                No results found
              </div>
            ) : (
              filteredOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`
                    w-full px-4 py-2.5 text-sm text-left flex items-center gap-2 hover:bg-surface transition-colors
                    ${opt.value === value ? "bg-primary/5 text-primary font-medium" : "text-text-primary"}
                  `}
                >
                  {opt.image && (
                    <img
                      src={opt.image}
                      alt={opt.label}
                      className="rounded-full h-5 w-5"
                    />
                  )}
                  <span className="truncate">{opt.label}</span>
                  {opt.value === value && (
                    <CheckIcon className="w-4 h-4 ml-auto text-primary" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {/* Hidden native select for form submission */}
      {name && (
        <select
          name={name}
          value={value}
          onChange={() => {}}
          className="sr-only"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
