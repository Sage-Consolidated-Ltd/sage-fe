import { usePost } from "../hooks/useApi";
import { useApiStore } from "../store/apiStore";
import { useQueryClient } from "@tanstack/react-query";
import { endpoints } from "./endpoints";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RegisterDto {
  company_name: string;
  email: string;
  first_name: string;
  industry_id: string;
  last_name: string;
  password: string;
  time_zone: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  message?: string;
  user?: { id: number; email: string; name: string };
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

export const useRegister = () => {
  return usePost<void, RegisterDto>(endpoints.auth.register);
  // No session set here — redirect to login after success,
  // or if your backend auto-logs in on register, treat it like useLogin below.
};

export const useLogin = () => {
  const setIsAuthenticated = useApiStore((s) => s.setIsAuthenticated);

  return usePost<LoginResponse, LoginDto>(endpoints.auth.login, {
    onSuccess: () => {
      // Cookie is already set by the browser from the Set-Cookie header.
      setIsAuthenticated(true);
    },
  });
};

export const useLogout = () => {
  const clearAuth = useApiStore((s) => s.clearAuth);
  const queryClient = useQueryClient();

  return usePost<void, void>(endpoints.auth.logout, {
    onSuccess: () => {
      clearAuth();
      queryClient.clear();
    },
  });
};

// ─── Selectors ────────────────────────────────────────────────────────────────

export const useIsAuthenticated = () => useApiStore((s) => s.isAuthenticated);
