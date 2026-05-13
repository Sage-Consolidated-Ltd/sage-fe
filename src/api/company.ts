import { useProtectedGet, useProtectedPost } from "../hooks/useProtectedApi";
import { useGet, useInvalidate } from "../hooks/useApi";
import { endpoints, keys } from "./endpoints";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Industry {
  id: string;
  name: string;
}

export interface IndustriesResponse {
  success: boolean;
  message: string;
  data: Industry[];
}

export interface InviteDto {
  invites: {
    email: string;
    role_id: string;
  }[];
}

export interface InviteResponse {
  success: boolean;
  message: string;
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

// GET /company/industries — public, no session required
export const useIndustries = () =>
  useGet<IndustriesResponse>(keys.industries.all, endpoints.company.industries);

// POST /company/invite — requires session cookie
export const useInviteMembers = () => {
  return useProtectedPost<InviteResponse, InviteDto>(endpoints.company.invite);
};
