import { useEffect } from "react";
import { motion } from "motion/react";
import { Select } from "../../../props/Select";
import Button from "../../../props/Button";

import { formContentVariants } from "../../../../utils/variants";
import { useOnboardStore } from "../../../../store/onboardStore";
import { useIndustries } from "../../../../api/company";
import { getTimeZones } from "../../../../utils/timezone";
import Input from "../../../props/Input";
import { SquaredInfoIcon } from "../../../../utils/icons";

const ProfileStep = () => {
  const { profile, updateProfile, nextStep } = useOnboardStore();
  const { data: industries, isLoading: industriesLoading } = useIndustries();
  const timeZones = getTimeZones();

  // Auto-detect user timezone on mount
  useEffect(() => {
    if (profile.timeZone) return; // Don't override if already set

    try {
      const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // Check if detected timezone exists in our options
      const match = timeZones.find(
        (tz) => tz.value === detected || tz.label.includes(detected),
      );
      if (match) {
        updateProfile("timeZone", match.value);
      }
    } catch {
      // Silently fail if Intl API not supported
    }
  }, []); // Run once on mount

  const isValid =
    profile.companyName &&
    profile.email &&
    profile.industry &&
    profile.timeZone &&
    profile.fullName;

  const industryOptions =
    industries?.data?.map((industry) => ({
      value: industry.id,
      label: industry.name,
    })) || [];

  return (
    <motion.div
      key="step1-form"
      variants={formContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex flex-col gap-y-4"
    >
      <div>
        <h1 className="text-2xl text-text-primary">
          Let's start with your profile
        </h1>
        <p className="text-text-secondary mt-1.5">
          We'll use this to tailor your threat detection models.
        </p>
      </div>

      <Input
        name="companyName"
        type="text"
        placeholder="Acme Inc."
        label="Company Name"
        required
        value={profile.companyName}
        onChange={(e) => updateProfile("companyName", e.target.value)}
      />

      <Select
        label="Industry"
        options={industryOptions}
        placeholder="Select an industry"
        iconVariant="upDown"
        showInfo
        infoTooltip="What sector does your company operate in?"
        value={profile.industry}
        onChange={(value) => updateProfile("industry", value)}
        disabled={industriesLoading}
      />

      <Select
        label="Time Zone / Region"
        options={timeZones}
        placeholder="Select time zone"
        iconVariant="down"
        showInfo
        infoTooltip="Used for scheduling and notifications"
        value={profile.timeZone}
        onChange={(value) => updateProfile("timeZone", value)}
        searchable
        searchPlaceholder="Search time zones..."
      />

      <div className="border border-border rounded-[18px] p-4 space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="admin@acmecyber.com"
          label="Email"
          required
          value={profile.email}
          onChange={(e) => updateProfile("email", e.target.value)}
        />

        <Input
          name="fullName"
          type="text"
          placeholder="First Last"
          label="Full Name"
          required
          value={profile.fullName}
          onChange={(e) => updateProfile("fullName", e.target.value)}
        />

        <div className="flex items-center gap-1.5 text-warning font-fira-code">
          <SquaredInfoIcon className="w-6 h-6" />
          <p className="text-xs leading-4 tracking-[0.5%] max-w-[324px]">
            You'll be the primary admin for this workspace
          </p>
        </div>
      </div>

      <div>
        <Button type="button" onClick={nextStep} disabled={!isValid}>
          NEXT: CREATE PASSWORD
        </Button>
      </div>
    </motion.div>
  );
};

export default ProfileStep;
