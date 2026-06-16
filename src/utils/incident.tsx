import type { ConnectedSource } from "../components/integration/security-integration/security-components/ConnectedTable";

export type SeverityLevel = 1 | 2 | 3 | 4;

export interface Incident {
  id: string;
  name: string;
  source: string;
  severity: SeverityLevel;
  timeDetected?: string;
  resolutionTime?: string;
  status?:
    | "New"
    | "Investigating"
    | "Running Playbook"
    | "Contained"
    | "Needs Review"
    | "Pending Approval"
    | "Dismissed";
}

export const mockIncidents: Incident[] = [
  {
    id: "1",
    name: "Suspicious Login from Unusual Location",
    source: "IDS Alert",
    severity: 1,
    timeDetected: "2 minutes ago",
    resolutionTime: "2 minutes ago",
    status: "New",
  },
  {
    id: "2",
    name: "Malicious Macro Doc",
    source: "IDS Alert",
    severity: 2,
    timeDetected: "14 minutes ago",
    status: "Running Playbook",
  },
  {
    id: "3",
    name: "Large outbound data transfer detected...",
    source: "IDS Alert",
    severity: 4,
    timeDetected: "Aug 13, 2025 08:05 am",
    resolutionTime: "Aug 13, 2025 08:05 am",
    status: "Investigating",
  },
  {
    id: "4",
    name: "Social Engineering Attempt",
    source: "192.172.1.2",
    severity: 2,
    timeDetected: "Aug 4, 2025 12:14 am",
    resolutionTime: "Aug 4, 2025 12:14 am",
    status: "Contained",
  },
  {
    id: "5",
    name: "Scanning IP Ranges",
    source: "192.172.1.2",
    severity: 4,
    timeDetected: "Aug 4, 2025 12:14 am",
    status: "Pending Approval",
  },
  {
    id: "6",
    name: "Ransomware",
    source: "C://Downloads/file.exe",
    severity: 2,
    timeDetected: "Aug 4, 2025 12:14 am",
    status: "Dismissed",
  },
];

export const SeverityIndicator = ({ level }: { level: SeverityLevel }) => {
  const colors = ["bg-info", "bg-warning", "bg-error", "bg-primary-hover"];
  const activeColor = colors[level - 1];

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`w-[9px] h-[9px] rounded-xs ${step <= level ? activeColor : "bg-border"}`}
        />
      ))}
    </div>
  );
};

export const StatusBadge = ({ status }: { status: Incident["status"] }) => {
  const styles: Record<string, string> = {
    New: "bg-success text-text-primary",
    Investigating: "bg-info text-text-primary",
    "Running Playbook": "bg-[#7265FF] text-text-primary",
    Contained: "bg-border text-text-primary",
    "Needs Review": "bg-warning text-white",
    "Pending Approval": "bg-error text-text-primary",
    Dismissed: "bg-text-secondary text-white",
  };

  return (
    <span className={`px-2 py-1 rounded-lg text-xs ${styles[status || "New"]}`}>
      {status}
    </span>
  );
};

// Placeholder icons - replace with your actual icon components
const AzureIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505l7.73-16.553z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

const CiscoIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

const VirusTotalIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);

export const mockSources: ConnectedSource[] = [
  {
    id: "1",
    name: "Azure AD",
    type: "Cloud",
    eventsToday: "1.2M",
    lastSync: "09:42 AM",
    status: "Active",
    icon: <AzureIcon />,
    iconBg: "bg-blue-500",
  },
  {
    id: "2",
    name: "Defender ATP",
    type: "Endpoint",
    eventsToday: "235K",
    lastSync: "09:15 AM",
    status: "Warning",
    icon: <ShieldIcon />,
    iconBg: "bg-blue-600",
  },
  {
    id: "3",
    name: "Cisco Firewall",
    type: "Network",
    eventsToday: "560K",
    lastSync: "09:00 AM",
    status: "Active",
    icon: <CiscoIcon />,
    iconBg: "bg-green-600",
  },
  {
    id: "4",
    name: "VirusTotal Feed",
    type: "Threat Intel",
    eventsToday: "0",
    lastSync: "N/A",
    status: "Error",
    icon: <VirusTotalIcon />,
    iconBg: "bg-indigo-500",
  },
];
