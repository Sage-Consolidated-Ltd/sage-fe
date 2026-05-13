import { type AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";

export interface ApiResponse<T> {
  data: T;
  status: number;
}

async function request<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
  const response = await axiosInstance.request<T>(config);
  return { data: response.data, status: response.status };
}

export const apiClient = {
  get: <T>(url: string, params?: object, config?: AxiosRequestConfig) =>
    request<T>({ method: "GET", url, params, ...config }),

  post: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
    request<T>({ method: "POST", url, data: body, ...config }),

  put: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
    request<T>({ method: "PUT", url, data: body, ...config }),

  patch: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
    request<T>({ method: "PATCH", url, data: body, ...config }),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    request<T>({ method: "DELETE", url, ...config }),
};
