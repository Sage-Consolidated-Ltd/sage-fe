import React, { useState, useRef, useEffect } from "react";
import Button from "../../props/Button";

const MFAVerification = ({
  onVerify,
  onResend,
}: {
  onVerify: (code: string) => void;
  onResend: () => void;
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle countdown for "Resend in 00:XX"
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value.substring(element.value.length - 1);
    setOtp(newOtp);

    // Focus next input
    if (element.value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-text-primary mb-2">
          Verify your identity
        </h1>
        <p className="text-text-secondary">
          Just one more step to keep your account secure. Enter the 6-digit code
          from your authenticator app.
        </p>
      </div>

      <div className="flex gap-2 mb-6 justify-between">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-10 h-10 text-center text-lg font-medium border border-input-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-surface"
          />
        ))}
      </div>

      <label className="flex items-center gap-2 cursor-pointer mb-6">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300 text-primary"
        />
        <span className="text-sm text-text-secondary">
          Remember this device for 30 days
        </span>
      </label>

      <Button onClick={() => onVerify(otp.join(""))}>VERIFY & CONTINUE</Button>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Didn't receive the code?{" "}
        <button
          onClick={onResend}
          disabled={timer > 0}
          className={`font-medium ${timer > 0 ? "text-orange-500" : "text-primary hover:underline"}`}
        >
          {timer > 0
            ? `Resend in 00:${timer.toString().padStart(2, "0")}`
            : "Resend now"}
        </button>
      </p>
    </div>
  );
};

export default MFAVerification;
