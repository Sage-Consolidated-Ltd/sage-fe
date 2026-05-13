import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  // Tells the browser to include HttpOnly cookies on every request automatically.
  // Your backend must respond with the correct CORS headers:
  //   Access-Control-Allow-Origin: <your-frontend-origin>  (not "*")
  //   Access-Control-Allow-Credentials: true
  withCredentials: true,
});

// Response interceptor — normalize errors + handle session expiry
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      // Session expired or not authenticated — redirect to login
      // window.location.href = "/login";
    }

    const message =
      error.response?.data?.message ?? error.message ?? "Unknown error";
    return Promise.reject(new Error(message));
  },
);
