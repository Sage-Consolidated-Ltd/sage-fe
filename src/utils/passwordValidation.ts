export interface PasswordRequirements {
  length: boolean;
  upper: boolean;
  lower: boolean;
  digit: boolean;
  special: boolean;
}

export interface PasswordStrength {
  score: number; // 0-4
  label: string;
  colorClass: string;
}

// Backend only accepts these special characters: @$!%*?&
const ALLOWED_SPECIAL_CHARS = "@$!%*?&";
const SPECIAL_REGEX = new RegExp(
  `[${ALLOWED_SPECIAL_CHARS.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}]`,
);

export const validatePasswordRequirements = (
  password: string,
): PasswordRequirements => {
  const specialCount = (
    password.match(new RegExp(`[${ALLOWED_SPECIAL_CHARS}]`, "g")) || []
  ).length;

  // Check for invalid characters (anything not alphanumeric or in allowed set)
  const hasInvalidChars = /[^a-zA-Z0-9@$!%*?&]/.test(password);

  return {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    digit: /[0-9]/.test(password),
    special: specialCount >= 1 && !hasInvalidChars,
  };
};

export const isPasswordValid = (
  requirements: PasswordRequirements,
): boolean => {
  return (
    requirements.length &&
    requirements.upper &&
    requirements.lower &&
    requirements.digit &&
    requirements.special
  );
};

export const calculatePasswordStrength = (
  password: string,
): PasswordStrength => {
  if (!password) {
    return { score: 0, label: "", colorClass: "bg-gray-200" };
  }

  const req = validatePasswordRequirements(password);
  if (!isPasswordValid(req)) {
    return { score: 0, label: "", colorClass: "bg-gray-200" };
  }

  let score = 0;
  const length = password.length;
  const specialCount = (password.match(/[@$!%*?&]/g) || []).length;

  // Base valid = 1
  score += 1;

  // Length bonuses
  if (length >= 12) score += 1;
  if (length >= 16) score += 1;

  // Variety bonus
  const variety = [req.upper, req.lower, req.digit, specialCount >= 2].filter(
    Boolean,
  ).length;
  if (variety >= 4) score += 1;

  const finalScore = Math.min(score, 4);

  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = [
    "bg-gray-200",
    "bg-error",
    "bg-warning",
    "bg-success",
    "bg-success",
  ];

  return {
    score: finalScore,
    label: labels[finalScore],
    colorClass: colors[finalScore],
  };
};

export const getStrengthTextColor = (score: number): string => {
  if (score >= 3) return "text-success";
  if (score === 2) return "text-warning";
  return "text-error";
};
