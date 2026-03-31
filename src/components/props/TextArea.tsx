import { useState, useRef } from "react";
import { getImageSrc } from "../../utils/imageUtils";
import type { InputProps } from "../../types/extra";
import { InfoFillIcon } from "../../utils/icons";

interface TextAreaProps extends Omit<
  InputProps,
  "type" | "search" | "searchPosition" | "height"
> {
  rows?: number;
  resize?: "none" | "vertical" | "horizontal" | "both";
  maxHeight?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value: propValue = "",
  onChange,
  placeholder,
  className = "",
  required = false,
  name,
  reset = false,
  approved = false,
  disabled = false,
  error = false,
  maxLength,
  width,
  rows = 4,
  resize = "vertical",
  maxHeight = "200px",
}) => {
  const [selection, setSelection] = useState<{
    start: number;
    end: number;
  } | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSelect = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const input = e.currentTarget;
    setSelection({
      start: input.selectionStart || 0,
      end: input.selectionEnd || 0,
    });
  };

  const getInputPadding = () => {
    return error || approved ? "pl-4 pr-10 pt-3 pb-3" : "pl-4 pr-4 pt-3 pb-3";
  };

  return (
    <div className="relative w-full flex flex-col gap-1">
      {label && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label className="block text-sm text-text-primary">{label}</label>
          </div>
        </div>
      )}

      <div className={`relative ${width}`}>
        <textarea
          ref={textAreaRef}
          name={name}
          value={propValue}
          onChange={handleChange}
          onSelect={handleSelect}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          className={`
            ${className === "" ? "bg-surface border border-input-border" : className}
            w-full text-sm text-text-tertiary appearance-none rounded-xl focus:outline-none
            ${disabled ? "bg-gray-50 cursor-not-allowed" : ""}
            ${error ? "bg-surface border border-primary shadow-error" : ""}
            ${getInputPadding()}
            leading-[22px]
            resize-${resize}
          `}
          style={{ maxHeight }}
        />

        {/* Status icons */}
        {approved && (
          <div className="absolute top-3 right-0 pr-3 flex items-center pointer-events-none">
            <img
              src={getImageSrc("check_circle.svg")}
              alt=""
              className="w-5 h-5"
            />
          </div>
        )}

        {error && (
          <div className="absolute top-3 right-0 pr-3 flex items-center pointer-events-none">
            <InfoFillIcon className="text-error w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextArea;
