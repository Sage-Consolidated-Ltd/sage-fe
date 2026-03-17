import { create } from "zustand";

export type VerificationMethod = "email" | "authenticator" | "securityKey";

interface Profile {
  companyName: string;
  email: string;
  industry: string;
  timeZone: string;
}

interface Touched {
  password: boolean;
  confirm: boolean;
}

interface OnboardState {
  // Step management
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  // Step 1: Profile
  profile: Profile;
  updateProfile: (field: keyof Profile, value: string) => void;

  // Step 2: Password
  password: string;
  confirmPassword: string;
  touched: Touched;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  setTouched: (field: keyof Touched) => void;
  resetPasswordTouched: () => void;

  // Step 3: Verification
  verificationMethod: VerificationMethod;
  emailCode: string;
  totpCode: string[];
  securityKeyVerified: boolean;
  resendTimer: number;
  isResending: boolean;
  setVerificationMethod: (method: VerificationMethod) => void;
  setEmailCode: (code: string) => void;
  setTotpDigit: (index: number, value: string) => void;
  verifySecurityKey: () => void;
  decrementResendTimer: () => void;
  startResendTimer: () => void;
}

const initialState = {
  currentStep: 1,
  profile: {
    companyName: "",
    email: "",
    industry: "",
    timeZone: "",
  },
  password: "",
  confirmPassword: "",
  touched: { password: false, confirm: false },
  verificationMethod: "email" as VerificationMethod,
  emailCode: "",
  totpCode: ["", "", "", "", "", ""],
  securityKeyVerified: false,
  resendTimer: 18,
  isResending: false,
};

export const useOnboardStore = create<OnboardState>()((set) => ({
  ...initialState,

  // Step management
  setStep: (step) => set({ currentStep: step }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 4),
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  // Profile
  updateProfile: (field, value) =>
    set((state) => ({
      profile: { ...state.profile, [field]: value },
    })),

  // Password
  setPassword: (value) => set({ password: value }),

  setConfirmPassword: (value) => set({ confirmPassword: value }),

  setTouched: (field) =>
    set((state) => ({
      touched: { ...state.touched, [field]: true },
    })),

  resetPasswordTouched: () =>
    set({ touched: { password: false, confirm: false } }),

  // Verification
  setVerificationMethod: (method) =>
    set(() => ({
      verificationMethod: method,
      // Reset verification states when switching methods
      emailCode: "",
      totpCode: ["", "", "", "", "", ""],
      securityKeyVerified: false,
    })),

  setEmailCode: (code) =>
    set({
      emailCode: code.replace(/\D/g, "").slice(0, 6),
    }),

  setTotpDigit: (index, value) =>
    set((state) => {
      if (value.length > 1) return state;
      const newCode = [...state.totpCode];
      newCode[index] = value;
      return { totpCode: newCode };
    }),

  verifySecurityKey: () => set({ securityKeyVerified: true }),

  decrementResendTimer: () =>
    set((state) => {
      if (state.resendTimer <= 0) return state;
      return { resendTimer: state.resendTimer - 1 };
    }),

  startResendTimer: () => {
    set({ resendTimer: 60, isResending: true });
    setTimeout(() => set({ isResending: false }), 1000);
  },
}));
