import { CheckIcon, XIcon } from "../../utils/icons";

export const RequirementRow = ({
  met,
  label,
}: {
  met: boolean;
  label: string;
}) => (
  <div className="flex items-center gap-2">
    {met ? (
      <CheckIcon className="w-[18px] h-[18px] text-success" />
    ) : (
      <XIcon className="w-[18px] h-[18px] text-primary" />
    )}
    <p
      className={`text-xs ${met ? "text-text-primary" : "text-text-secondary"}`}
    >
      {label}
    </p>
  </div>
);
