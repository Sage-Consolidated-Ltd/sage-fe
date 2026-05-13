// Core
export { apiClient } from "./lib/apiClient";
export { axiosInstance } from "./lib/axios";

// Generic hooks
export {
  useGet,
  usePost,
  usePut,
  usePatch,
  useDelete,
  useInvalidate,
} from "./hooks/useApi";

// Protected hooks (require session cookie)
export {
  useProtectedGet,
  useProtectedPost,
  useProtectedPut,
  useProtectedPatch,
  useProtectedDelete,
} from "./hooks/useProtectedApi";

// Endpoint definitions
export { endpoints, keys } from "./api/endpoints";

// Resource-specific hooks
export * from "./api/auth";
export * from "./api/company";
export * from "./api/users";

// Store
export { useApiStore } from "./store/apiStore";
