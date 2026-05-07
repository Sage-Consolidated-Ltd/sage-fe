import { useApiStore } from "../store/apiStore";
import { useGet, usePost, usePut, usePatch, useDelete } from "./useApi";
import type { UseQueryOptions } from "@tanstack/react-query";

export function useProtectedGet<TData>(
  queryKey: readonly unknown[],
  url: string,
  params?: object,
  options?: Omit<UseQueryOptions<TData>, "queryKey" | "queryFn" | "enabled">,
) {
  const isAuthenticated = useApiStore((s) => s.isAuthenticated);

  return useGet<TData>(queryKey, url, params, {
    ...options,
    enabled: isAuthenticated,
  });
}

export {
  usePost as useProtectedPost,
  usePut as useProtectedPut,
  usePatch as useProtectedPatch,
  useDelete as useProtectedDelete,
};
