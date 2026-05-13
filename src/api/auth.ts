import { usePost } from "../hooks/useApi";
import { useApiStore } from "../store/apiStore";
import { useQueryClient } from "@tanstack/react-query";
import { endpoints } from "./endpoints";
import type {
  EmailVerifyDto,
  LoginDto,
  LoginResponse,
  RegisterDto,
  VerifyDto,
  VerifyResponse,
} from "../types/endpoit-type";

// ─── Hooks ────────────────────────────────────────────────────────────────────

// register user
export const useRegister = () => {
  return usePost<void, RegisterDto>(endpoints.auth.register);
  // No session set here — redirect to login after success,
  // or if your backend auto-logs in on register, treat it like useLogin below.
};

// login user
export const useLogin = () => {
  const setIsAuthenticated = useApiStore((s) => s.setIsAuthenticated);

  return usePost<LoginResponse, LoginDto>(endpoints.auth.login, {
    onSuccess: () => {
      // Cookie is already set by the browser from the Set-Cookie header.
      setIsAuthenticated(true);
    },
  });
};

// logout user
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

// verify email
export const useVerify = () => {
  return usePost<VerifyResponse, VerifyDto>(endpoints.auth.verifyEmail);
};
export const useVerifyEmail = () => {
  return usePost<VerifyResponse, EmailVerifyDto>(endpoints.auth.emailVerify);
};

// ─── Selectors ────────────────────────────────────────────────────────────────

export const useIsAuthenticated = () => useApiStore((s) => s.isAuthenticated);
