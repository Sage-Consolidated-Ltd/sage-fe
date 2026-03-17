import { motion } from "motion/react";
import { Select } from "../../../props/Select";
import Button from "../../../props/Button";

import { formContentVariants } from "../../../../utils/variants";
import { useOnboardStore } from "../../../../store/onboardStore";
import { getTimeZones, industries } from "../../../../utils/timezone";
import Input from "../../../props/Input";

const ProfileStep = () => {
  const { profile, updateProfile, nextStep } = useOnboardStore();
  const timeZones = getTimeZones();

  const isValid =
    profile.companyName &&
    profile.email &&
    profile.industry &&
    profile.timeZone;

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
        name="name"
        type="text"
        placeholder="Acme Inc."
        label="Company Name"
        required
        value={profile.companyName}
        onChange={(e) => updateProfile("companyName", e.target.value)}
      />

      <Input
        name="email"
        type="email"
        placeholder="admin@acmecyber.com"
        label="Email"
        required
        value={profile.email}
        onChange={(e) => updateProfile("email", e.target.value)}
      />

      <Select
        label="Industry"
        options={industries}
        placeholder="Select an industry"
        iconVariant="upDown"
        showInfo
        infoTooltip="What sector does your company operate in?"
        value={profile.industry}
        onChange={(value) => updateProfile("industry", value)}
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
      />

      <div>
        <Button type="button" onClick={nextStep} disabled={!isValid}>
          NEXT: CREATE PASSWORD
        </Button>
      </div>
    </motion.div>
  );
};

export default ProfileStep;
