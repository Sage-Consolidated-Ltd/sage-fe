import {
  useQuery,
  useMutation,
  useQueryClient,
  type UseQueryOptions,
  type UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";

// ─── GET ────────────────────────────────────────────────────────────────────

export function useGet<TData>(
  queryKey: readonly unknown[],
  url: string,
  params?: object,
  options?: Omit<UseQueryOptions<TData>, "queryKey" | "queryFn">,
) {
  return useQuery<TData>({
    queryKey,
    queryFn: () => apiClient.get<TData>(url, params).then((r) => r.data),
    ...options,
  });
}

// ─── POST ───────────────────────────────────────────────────────────────────

export function usePost<TData, TVariables = unknown>(
  url: string,
  options?: UseMutationOptions<TData, Error, TVariables>,
) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: (body) => apiClient.post<TData>(url, body).then((r) => r.data),
    ...options,
  });
}

// ─── PUT ────────────────────────────────────────────────────────────────────

export function usePut<TData, TVariables = unknown>(
  url: string,
  options?: UseMutationOptions<TData, Error, TVariables>,
) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: (body) => apiClient.put<TData>(url, body).then((r) => r.data),
    ...options,
  });
}

// ─── PATCH ──────────────────────────────────────────────────────────────────

export function usePatch<TData, TVariables = unknown>(
  url: string,
  options?: UseMutationOptions<TData, Error, TVariables>,
) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: (body) => apiClient.patch<TData>(url, body).then((r) => r.data),
    ...options,
  });
}

// ─── DELETE ─────────────────────────────────────────────────────────────────

export function useDelete<TData, TVariables = unknown>(
  urlFactory: (variables: TVariables) => string,
  options?: UseMutationOptions<TData, Error, TVariables>,
) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: (variables) =>
      apiClient.delete<TData>(urlFactory(variables)).then((r) => r.data),
    ...options,
  });
}

// ─── Invalidation helper ─────────────────────────────────────────────────────

export function useInvalidate() {
  const qc = useQueryClient();
  return (...queryKeys: readonly unknown[][]) =>
    Promise.all(
      queryKeys.map((key) => qc.invalidateQueries({ queryKey: key })),
    );
}
