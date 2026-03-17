import { div } from "motion/react-client";
import type { RadioButtonProps } from "../../types/extra";

const Radio: React.FC<RadioButtonProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
  desc = "",
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="hidden" // Hides the default radio button
      />
      <label
        htmlFor={id}
        className={`flex ${desc !== "" ? "items-start" : "items-center"} cursor-pointer gap-2`}
      >
        {/* Custom radio button circle */}
        <div>
          <div
            className={`
            w-5 h-5 rounded-full border-2 transition-all duration-200 ease-in-out
            ${
              checked
                ? "bg-white border-primary-hover"
                : "bg-white border-text-secondary"
            }
            flex items-center justify-center
          `}
          >
            {/* Inner green dot for checked state */}
            {checked && (
              <div className="w-3 h-3 rounded-full bg-primary-hover"></div>
            )}
          </div>
        </div>
        <div>
          <span className="text-text-secondary">{label}</span>
          {desc !== "" && (
            <div>
              <span className="text-text-secondary text-xs">{desc}</span>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default Radio;
