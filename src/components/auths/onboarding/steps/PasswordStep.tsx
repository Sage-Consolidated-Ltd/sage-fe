import { useMemo, useState } from "react";
import { motion } from "motion/react";

import { CheckIcon, ChevronLeft1Icon } from "../../../../utils/icons";

import { formContentVariants } from "../../../../utils/variants";
import {
  validatePasswordRequirements,
  isPasswordValid,
  calculatePasswordStrength,
  getStrengthTextColor,
} from "../../../../utils/passwordValidation";
import { useOnboardStore } from "../../../../store/onboardStore";
import { useRegister } from "../../../../api/auth";
import Input from "../../../props/Input";
import Checkbox from "../../../props/Checkbox";
import Button from "../../../props/Button";
import { RequirementRow } from "../../../props/RequirementRow";
import { useToastStore } from "../../../../store/toastStore";

const PasswordStep = () => {
  const {
    profile,
    password,
    confirmPassword,
    touched,
    setPassword,
    setConfirmPassword,
    setTouched,
    nextStep,
    prevStep,
  } = useOnboardStore();

  const { mutate: register, isPending, isError, error } = useRegister();
  const addToast = useToastStore((s) => s.add);
  const [agreed, setAgreed] = useState(false);

  const requirements = useMemo(
    () => validatePasswordRequirements(password),
    [password],
  );
  const passwordValid = useMemo(
    () => isPasswordValid(requirements),
    [requirements],
  );
  const strength = useMemo(
    () => calculatePasswordStrength(password),
    [password],
  );

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;
  const confirmError =
    touched.confirm && confirmPassword && password !== confirmPassword;
  const isValid = passwordValid && passwordsMatch && agreed;

  const handleSubmit = () => {
    if (!isValid || isPending) return;

    const nameParts = profile.fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    register(
      {
        first_name: firstName,
        last_name: lastName,
        email: profile.email,
        password: password,
        company_name: profile.companyName,
        industry_id: profile.industry,
        time_zone: profile.timeZone,
      },
      {
        onSuccess: () => {
          addToast("success", "Account created successfully!");
          nextStep();
        },
        onError: (err: Error) => {
          addToast(
            "error",
            err.message || "Registration failed. Please try again.",
          );
        },
      },
    );
  };

  return (
    <motion.div
      key="step2-form"
      variants={formContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex flex-col gap-y-4"
    >
      <button
        className="flex items-center gap-1 text-sm text-text-primary font-medium cursor-pointer"
        onClick={prevStep}
      >
        <ChevronLeft1Icon className="w-3 h-3" />
        Back
      </button>

      <div>
        <h1 className="text-2xl text-text-primary">
          Secure your admin account
        </h1>
        <p className="text-text-secondary mt-1.5">
          Let's set up your access credentials. You'll create a login password
        </p>
      </div>

      <Input
        name="password"
        type="password"
        placeholder="Enter a strong password"
        label="Create Login Password"
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setTouched("password");
        }}
        error={touched.password && !passwordValid && password.length > 0}
      />

      <Input
        name="cpassword"
        type="password"
        placeholder="Confirm Password"
        label="Confirm Login Password"
        required
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setTouched("confirm");
        }}
        approved={passwordsMatch}
        error={confirmError}
      />

      {/* Requirements Check */}
      <div className="bg-surface shadow-check py-3 px-4 rounded-xl flex flex-col gap-y-3 w-full">
        <p className="text-xs text-text-primary">Your password must include</p>
        <RequirementRow
          met={requirements.length}
          label="At least 12 characters"
        />
        <RequirementRow
          met={requirements.special}
          label="At least two special characters @$!%*?&"
        />
        <div className="flex items-center gap-2">
          <CheckIcon className="w-[18px] h-[18px] text-success" />
          <p className="text-xs text-text-primary">
            Passwords are case sensitive
          </p>
        </div>

        {/* Password Strength */}
        <div className="mt-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-text-secondary">Password strength</p>
            {strength.score > 0 && (
              <p
                className={`text-xs font-medium ${getStrengthTextColor(strength.score)}`}
              >
                {strength.label}
              </p>
            )}
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((segment) => (
              <div
                key={segment}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  segment <= strength.score
                    ? strength.colorClass
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Checkbox
        checked={agreed}
        onChange={setAgreed}
        label={
          <>
            By signing up, I agree to the{" "}
            <a href="#" className="text-primary underline">
              terms and conditions
            </a>{" "}
            set forth by sage shield
          </>
        }
      />

      {isError && (
        <p className="text-sm text-error">
          {error?.message || "Registration failed. Please try again."}
        </p>
      )}

      <div className="mt-2 flex gap-2">
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!isValid || isPending}
        >
          {isPending ? "CREATING ACCOUNT..." : "NEXT: VERIFY ACCOUNT"}
        </Button>
      </div>
    </motion.div>
  );
};

export default PasswordStep;
