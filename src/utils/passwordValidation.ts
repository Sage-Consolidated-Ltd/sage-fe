export interface PasswordRequirements {
  length: boolean;
  special: boolean;
  caseSensitive: boolean;
}

export interface PasswordStrength {
  score: number; // 0-4
  label: string;
  colorClass: string;
}

export const validatePasswordRequirements = (
  password: string,
): PasswordRequirements => {
  const specialChars = (
    password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []
  ).length;

  return {
    length: password.length >= 12,
    special: specialChars >= 2,
    caseSensitive: true, // informational
  };
};

export const isPasswordValid = (
  requirements: PasswordRequirements,
): boolean => {
  return requirements.length && requirements.special;
};

export const calculatePasswordStrength = (
  password: string,
): PasswordStrength => {
  if (!password) {
    return { score: 0, label: "", colorClass: "bg-gray-200" };
  }

  let score = 0;
  const length = password.length;
  const specialCount = (
    password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []
  ).length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  // Length contribution
  if (length >= 12) score += 1;
  if (length >= 16) score += 1;

  // Complexity contribution
  const variety = [hasUpper, hasLower, hasNumber, specialCount >= 2].filter(
    Boolean,
  ).length;
  if (variety >= 3) score += 1;
  if (variety >= 4 && length >= 14) score += 1;

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
