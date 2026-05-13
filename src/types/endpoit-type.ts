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

export interface VerifyDto {
  email: string;
}
export interface EmailVerifyDto {
  token: string;
}

export interface LoginResponse {
  message?: string;
  user?: { id: number; email: string; name: string };
}

export interface VerifyResponse {
  message?: string;
  success?: string;
}
