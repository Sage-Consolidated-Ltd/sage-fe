import { useState } from "react";
import { CheckIcon } from "../../utils/icons";

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  width?: number; // Only pixels
  height?: number; // Only pixels
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  label,
  width = 16,
  height = 16,
  className = "",
  labelClassName = "",
  disabled = false,
  required = false,
  name,
  id,
}) => {
  const isControlled = controlledChecked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = () => {
    if (disabled) return;

    const newChecked = !checked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  // Calculate checkmark size (60% of checkbox size)
  const checkmarkSize = Math.round(width * 0.6);

  return (
    <div className={`flex items-start gap-2 ${className}`}>
      {/* Custom checkbox container */}
      <div className="relative shrink-0 mt-0.5">
        {/* Hidden native checkbox for accessibility */}
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          className="peer sr-only"
        />

        {/* Custom checkbox visual */}
        <div
          onClick={handleChange}
          style={{ width: `${width}px`, height: `${height}px` }}
          className={`
            rounded border-2 transition-all duration-200 cursor-pointer
            flex items-center justify-center
            ${
              checked
                ? "bg-primary border-primary"
                : "bg-white border-input-border hover:border-primary/50"
            }
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {/* Checkmark icon - sized using wrapper div */}
          {checked && (
            <div className="flex items-center justify-center text-white">
              <CheckIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>

      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          onClick={handleChange}
          className={`
            text-sm text-text-primary cursor-pointer select-none
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            ${labelClassName}
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
