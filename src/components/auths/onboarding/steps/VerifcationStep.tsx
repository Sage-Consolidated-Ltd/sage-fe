import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Button from "../../../props/Button";
import Radio from "../../../props/Radio";
import { CheckIcon } from "../../../../utils/icons";

import { formContentVariants } from "../../../../utils/variants";
import { useOnboardStore } from "../../../../store/onboardStore";
import Input from "../../../props/Input";

const VerificationStep = () => {
  const {
    verificationMethod,
    emailCode,
    totpCode,
    securityKeyVerified,
    resendTimer,
    isResending,
    setVerificationMethod,
    setEmailCode,
    setTotpDigit,
    verifySecurityKey,
    decrementResendTimer,
    startResendTimer,
    nextStep,
    prevStep,
  } = useOnboardStore();

  // Timer effect
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(decrementResendTimer, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer, decrementResendTimer]);

  const isValid = () => {
    switch (verificationMethod) {
      case "email":
        return emailCode.length === 6;
      case "authenticator":
        return totpCode.every((d) => d !== "");
      case "securityKey":
        return securityKeyVerified;
      default:
        return false;
    }
  };

  const handleTotpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    setTotpDigit(index, value);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`totp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleTotpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !totpCode[index] && index > 0) {
      const prevInput = document.getElementById(`totp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <motion.div
      key="step3-form"
      variants={formContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex flex-col gap-y-5"
    >
      <div>
        <h1 className="text-2xl text-text-primary">Verify your Account</h1>
        <p className="text-text-secondary mt-1.5">
          To protect your organization's environment, we require identity
          verification before continuing setup.
        </p>
      </div>

      {/* Email Verification */}
      <VerificationOption
        id="email-verify"
        label="Email Verification (default)"
        desc="Send a one-time code to your email address: admin@acmecyber.com"
        checked={verificationMethod === "email"}
        onChange={() => setVerificationMethod("email")}
      >
        {verificationMethod === "email" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-7 flex gap-3"
          >
            <Button type="button" variant="primary">
              Send Code
            </Button>
            <Input
              name="emailCode"
              type="text"
              placeholder="Enter code"
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
              maxLength={6}
              className="flex-1"
            />
          </motion.div>
        )}
      </VerificationOption>

      {/* Authenticator App */}
      <VerificationOption
        id="authenticator-verify"
        label="Authenticator App"
        desc="Secure your account with an authenticator app (TOTP)."
        checked={verificationMethod === "authenticator"}
        onChange={() => setVerificationMethod("authenticator")}
      >
        {verificationMethod === "authenticator" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-7 bg-surface rounded-[22px] py-3 px-4 shadow-check w-fit"
          >
            <p className="text-xs text-text-secondary">
              Scan this QR code using Google, Microsoft Authenticator.
            </p>
            <p className="text-xs text-text-secondary mb-4">
              Then enter the 6-digit code below.
            </p>

            <div className="flex justify-end">
              <div className="max-w-[158px]">
                <div className="">
                  {/* <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-400">QR Code</span>
                </div>
              </div> */}
                  <button
                    type="button"
                    className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
                  >
                    <RefreshIcon />
                    Refresh
                  </button>
                </div>

                <div className=" mb-4">
                  <p className="text-sm text-text-secondary mb-1">
                    Can't scan? Use this secret key:
                  </p>
                  <p className="text-sm font-mono font-semibold text-text-primary tracking-wider">
                    NZWF 3TREF JYZX
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2">
              {totpCode.map((digit, index) => (
                <input
                  key={index}
                  id={`totp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleTotpChange(index, e.target.value)}
                  onKeyDown={(e) => handleTotpKeyDown(index, e)}
                  className="w-10 h-10 text-center text-lg font-medium border border-input-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-surface"
                />
              ))}
            </div>
          </motion.div>
        )}
      </VerificationOption>

      {/* Security Key */}
      <VerificationOption
        id="securitykey-verify"
        label="Physical device"
        desc="Use Security Key (YubiKey, Titan, etc.)"
        checked={verificationMethod === "securityKey"}
        onChange={() => setVerificationMethod("securityKey")}
      >
        {verificationMethod === "securityKey" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-7 bg-surface rounded-xl p-4 shadow-sm border border-gray-100"
          >
            {!securityKeyVerified ? (
              <>
                <p className="text-sm text-text-secondary mb-4">
                  Plug in or tap your FIDO2-compatible security key to continue.
                </p>
                <Button
                  type="button"
                  onClick={verifySecurityKey}
                  className="w-full"
                >
                  Verify Security Key
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-2 text-success">
                <CheckIcon className="w-5 h-5" />
                <span className="font-medium">Verified</span>
              </div>
            )}
          </motion.div>
        )}
      </VerificationOption>

      {/* Actions */}
      <div className="mt-2 flex gap-2">
        <Button type="button" onClick={nextStep} disabled={!isValid()}>
          VERIFY & CONTINUE
        </Button>
      </div>

      {/* Resend Timer */}
      {verificationMethod === "email" && (
        <div className="text-center">
          {resendTimer > 0 ? (
            <p className="text-sm text-text-secondary">
              Resend in{" "}
              <span className="text-primary font-medium">
                00:{resendTimer.toString().padStart(2, "0")}
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={startResendTimer}
              disabled={isResending}
              className="text-sm text-primary font-medium hover:underline disabled:opacity-50"
            >
              Resend code
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

const VerificationOption = ({
  id,
  label,
  desc,
  checked,
  onChange,
  children,
}: {
  id: string;
  label: string;
  desc: string;
  checked: boolean;
  onChange: () => void;
  children?: React.ReactNode;
}) => (
  <div className="flex flex-col gap-y-3">
    <Radio
      id={id}
      name="verification"
      label={label}
      checked={checked}
      onChange={onChange}
      desc={desc}
    />
    {children}
  </div>
);

const RefreshIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

export default VerificationStep;
