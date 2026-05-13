// ─── Query Keys ──────────────────────────────────────────────────────────────
// Centralized so invalidation is always consistent.

export const keys = {
  users: {
    all: ["users"] as const,
    detail: (id: string | number) => ["users", id] as const,
  },
  industries: {
    all: ["industries"] as const,
  },
  // Add more resource keys here...
};

// ─── Endpoint URLs ────────────────────────────────────────────────────────────

export const endpoints = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    register: "/auth/register",
  },
  company: {
    invite: "/company/invite",
    industries: "/company/industries",
  },
  users: {
    list: "/users",
    detail: (id: string | number) => `/users/${id}`,
    create: "/users",
    update: (id: string | number) => `/users/${id}`,
    remove: (id: string | number) => `/users/${id}`,
  },
  // Add more resources here...
};
