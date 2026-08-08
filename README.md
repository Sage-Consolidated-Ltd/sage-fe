# Sage Frontend (sage-sh)

A modern, high-performance web platform for threat intelligence, incident response, security automation, and log analytics built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🛠️ Tech Stack

### Core Framework & Build Tools

- **React**: `^19.2.0`
- **React DOM**: `^19.2.0`
- **TypeScript**: `~5.9.3`
- **Vite**: `^7.2.4` (using `@vitejs/plugin-react` `^5.1.1`)

### Styling & UI Components

- **Tailwind CSS**: `^4.1.17` (via `@tailwindcss/vite` `^4.1.17`)
- **Lucide React Icons**: `^0.559.0`
- **Motion (Framer Motion)**: `^12.23.25`

### State Management & Data Fetching

- **Zustand**: `^5.0.9` (Client state & persistent storage with `persist` middleware)
- **TanStack React Query**: `^5.100.6` (Server state, caching, & async query/mutation management)
- **Axios**: `^1.15.2` (HTTP client with response interceptors and session cookie handling)

### Visualization & Graphics

- **Chart.js**: `^4.5.1` & **react-chartjs-2**: `^5.3.1` (Security metrics & dashboard charts)
- **ReactFlow** (`reactflow` `^11.11.4` / `react-flow` `^1.0.3`): (Interactive graph rendering & attack path visualizer)
- **D3.js**: `^7.9.0` (Data-driven security visualizations)

### Code Quality & Linting

- **ESLint**: `^9.39.1` with `typescript-eslint` (`^8.46.4`), `eslint-plugin-react-hooks` (`^7.0.1`), and `eslint-plugin-react-refresh` (`^0.4.24`)

---

## 📁 Project Structure

```text
sage-sh/
├── public/                 # Static public assets
├── src/
│   ├── api/                # API layer custom hooks & endpoint configurations
│   ├── assets/             # Images, graphics, and static design media
│   ├── components/         # Domain-specific UI component modules
│   ├── hooks/              # Custom React hooks (API, navigation, title state)
│   ├── layouts/            # Page layouts and route guards
│   ├── lib/                # Low-level network utilities (Axios instance, API client)
│   ├── pages/              # Top-level page views mapped to application routes
│   ├── routes/             # App routing structure and sidebar navigation routes
│   ├── shared/             # Reusable UI elements (Sidebar, Topbar, Table, Modals)
│   ├── store/              # Zustand global state stores
│   ├── types/              # TypeScript interfaces, DTOs, and type definitions
│   └── utils/              # Helper functions, icon libraries, mock data, and maps
├── .env.development        # Development environment variables
├── .env.example            # Environment variables template
├── .env.production         # Production environment variables
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript project configuration
└── vite.config.ts          # Vite build configuration
```

### Component Domain Subfolders (`src/components/`)

- `auths/`: Login components (`LoginPage`, `MFAVerification`, `AuthSideItem`), onboarding steps (`OnboardPage`), and auth footers.
- `automation/`: Components for playbooks, playbook editor, automation execution history, and Sage AI integration.
- `dashboard/`: Security overview dashboard widgets, activity metrics, threat level indicators, and system status charts.
- `hunting/`: Advanced log search UI, query builders, attack path graph visualizers, and AI-assisted threat hunting components.
- `incident/`: Incident and alert feeds, severity level badges, event timelines, and detailed incident inspection views.
- `integration/`: Management components for third-party Security, IAM, and Communication tool integrations.
- `logs-data/`: Log ingestion status, ingestion health, data quality metrics, data management, and parser/transformation rule builders.
- `notebooks/`: Security investigation notebooks, query cells, and Markdown note-taking tools.
- `props/`: Reusable component prop definitions and helper prop interfaces.
- `settings/`: User profile settings, account preferences, notification parameters, and organization settings.
- `sidebar/`: Sidebar menu navigation UI, collapsible navigation trees, search controls, and section headings.
- `splash/`: Splash screen initialization component displayed during application bootstrap.
- `table/`: Reusable data tables, pagination controls, column sorting, filtering, and cell formatters.
- `topbar/`: Top navigation bar component (search bar, profile header, notifications, mobile toggle).

---

## 🔌 API Layer (`src/api/`)

The API layer is located in `src/api/` and provides strongly-typed custom React Query hooks for communicating with the backend endpoints:

- **[`auth.ts`](src/api/auth.ts)**: Authentication API hooks.
  - `useRegister`: Registers a new user account (`POST /auth/register`).
  - `useLogin`: Authenticates credentials (`POST /auth/login`), updating Zustand `isAuthenticated` state on success.
  - `useLogout`: Ends session (`POST /auth/logout`), clearing local state and invalidating React Query cache.
  - `useVerify` & `useVerifyEmail`: Handles email verification requests (`POST /auth/send-verification-email`, `POST /auth/verify-email`).
  - `useIsAuthenticated`: Selector hook reading the user's authentication state.
- **[`company.ts`](src/api/company.ts)**: Organization and company management API hooks.
  - `useIndustries`: Public GET request hook (`GET /company/industries`) returning available industry choices.
  - `useInviteMembers`: Protected POST request hook (`POST /company/invite`) to send team member invites with role assignments.
- **[`endpoints.ts`](src/api/endpoints.ts)**: Central dictionary defining REST API endpoint path strings (`endpoints`) and React Query cache keys (`keys`).
- **[`profile.ts`](src/api/profile.ts)**: User profile and active session management API hooks.
  - Profile: `useUserProfile` (`GET /profile`), `useUpdateProfile` (`PATCH /profile`).
  - Activity Log: `useUserActivity` (`GET /profile/activity`).
  - Notifications: `useUserNotifications` (`GET /profile/notifications`), `useUpdateNotifications` (`PATCH /profile/notifications`).
  - Preferences: `useUserPreferences` (`GET /profile/preferences`), `useUpdatePreferences` (`PATCH /profile/preferences`).
  - Sessions: `useUserSessions` (`GET /profile/session`), `useRevokeSession` (`POST /profile/session/revoke`).
- **[`users.ts`](src/api/users.ts)**: Placeholder module reserved for future user administration hooks.

---

## 🛣️ Routing Architecture

The routing map is defined across two main files in `src/routes/`:

### [`AppRoutes.tsx`](src/routes/AppRoutes.tsx)

Configures the top-level route tree using `react-router-dom`:

- **Public Routes**:
  - `/auth/login` (Login page)
  - `/auth/setup-wizard` (Onboarding wizard)
- **Protected Layout Routes**:
  - Wrapped inside [`DashboardLayout`](src/layouts/DashboardLayout.tsx).
  - Dynamically renders all routes listed in `SidebarRoutes.tsx`.
  - Non-sidebar sub-routes:
    - `/settings/profile` (Profile settings)
    - `/incidents-&-alerts/view-details` (Detailed incident view)
    - `/logs-&-data/data-quality` (Ingestion data quality metrics)
    - `/hunting/advanced-log-search/new-query` (New log query creation)
- **Fallback & Redirects**:
  - `*`: Renders the `NotFound` (404) page.
  - `/`: Redirects to `/dashboard`.

### [`SidebarRoutes.tsx`](src/routes/SidebarRoutes.tsx)

Defines structured navigation route configuration (`SidebarRoute[]`) with code-split lazy-loaded page components:

- **Main Section**:
  - `Dashboard` (`/dashboard`)
  - `Incidents & Alerts` (`/incidents-&-alerts`)
  - `Rules` (`/rules`: Detection Rule Library, Rule Builder UI, Anomaly Models)
  - `Threat Intelligence` (`/threat-intelligence`: TI Feeds, Indicators, Anomaly Models / Entity Profiles)
  - `Hunting` (`/hunting`: Advanced Log Search, Attack Path Visualizer, AI-Assisted Threat Hunt)
- **Support Section**:
  - `Automation` (`/automation`: Playbook, Playbook Editor, Sage AI)
  - `Logs & Data` (`/logs-&-data`: Ingestion, Data Management, Parser & Transformation)
  - `Notebooks` (`/notebooks`)
  - `Reporting` (`/reporting`: Dashboard, Compliance Report, Export Options)
  - `Integration` (`/integration`: Security Integrations, IAM Integrations, Communication Integrations)

---

## 🔐 Auth Flow & Route Guarding

- **Session Handling**: API requests are executed with `withCredentials: true` in `axiosInstance` ([`src/lib/axios.ts`](src/lib/axios.ts)), relying on HTTP-only cookies set by the backend server upon login.
- **Client State**: Authentication state (`isAuthenticated`) is managed via Zustand in [`src/store/apiStore.ts`](src/store/apiStore.ts) and [`src/store/auth.ts`](src/store/auth.ts), persisted across sessions in `localStorage`.
- **Route Guarding**:
  - [`AuthGuard.tsx`](src/layouts/AuthGuard.tsx) checks for active authentication token (`useAuth((s) => s.user)`). If unauthenticated, it redirects users to `/auth/login` while capturing the prior location state.
  - `axiosInstance` response interceptors intercept `401 Unauthorized` responses, reset `apiStore` authentication state (`clearAuth()`), and automatically redirect the user to `/auth/login`.
- **Authentication Pages**:
  - Login & MFA flow: `LoginPage.tsx` handles initial credential validation via `useLogin()` and transitions to `MFAVerification.tsx` when required.
  - Setup Wizard: `OnboardPage.tsx` guides new users through initial company configuration.

---

## 🚀 Setup & Installation

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm` (v9+), `pnpm`, or `yarn`

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd sage-sh

# Install project dependencies
npm install
```

### 2. Configure Environment Variables

Create a local `.env.development` file based on `.env.example`:

```bash
cp .env.example .env.development
```

Configure `VITE_API_BASE_URL` with your backend server URL:

```env
VITE_API_BASE_URL = https://backend.sageconsolidated.com/api/v1
```

> **Note:** Maintain both `.env.development` (for local development) and `.env.production` (for production builds) when changing API base URLs.

### 3. Available NPM Scripts

| Command           | Description                                                                                 |
| :---------------- | :------------------------------------------------------------------------------------------ |
| `npm run dev`     | Launches Vite local development server with HMR                                             |
| `npm run build`   | Runs TypeScript type checking (`tsc -b`) and builds production output bundle (`vite build`) |
| `npm run preview` | Serves the production build locally for verification                                        |
| `npm run lint`    | Runs ESLint across all TypeScript and React files                                           |

---
