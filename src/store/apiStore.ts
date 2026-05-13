import { create } from "zustand";

// No token or session stored here — the browser manages the HttpOnly cookie.
// This store only holds UI-level auth state your components need to react to.

interface ApiState {
  isAuthenticated: boolean;
  globalError: string | null;

  setIsAuthenticated: (value: boolean) => void;
  setGlobalError: (error: string | null) => void;
  clearAuth: () => void;
}

export const useApiStore = create<ApiState>()((set) => ({
  isAuthenticated: false,
  globalError: null,

  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setGlobalError: (globalError) => set({ globalError }),

  // Called on logout — just flips the flag; the backend clears the cookie
  clearAuth: () => set({ isAuthenticated: false }),
}));
