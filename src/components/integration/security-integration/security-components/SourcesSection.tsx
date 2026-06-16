import React from "react";
import { SourceCard } from "./SourceCard";

// Icon components (use your actual icon library)
const AzureIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505l7.73-16.553z" />
  </svg>
);
const CrowdStrikeIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);
const PaloAltoIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);
const EmailIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const ThreatIntelIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);
const ServiceNowIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);
const GoogleCloudIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);
const AWSIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);
const LDAPIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);
const RADIUSIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);
const DefenderIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);
const SentinelOneIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);
const FirewallIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);
const LoadBalancerIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);
const VPNIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);
const CloudflareIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);
const CustomAppIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);
const KubernetesIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);

const popularSources = [
  {
    icon: <AzureIcon />,
    iconBg: "bg-blue-500",
    title: "Cloud",
    subtitle: "Azure Active Directory",
    description: "Ingest sign-in and audit events for identities.",
    authType: "Auth",
    authDetails: "OAuth2 (Client ID / Secret) or Managed Identity",
    status: "connected" as const,
  },
  {
    icon: <CrowdStrikeIcon />,
    iconBg: "bg-red-500",
    title: "Endpoint",
    subtitle: "CrowdStrike",
    description: "Stream EDR detections, telemetry, and quarantine actions.",
    authType: "Auth",
    authDetails: "API Key (client id / secret)",
    status: "warning" as const,
  },
  {
    icon: <PaloAltoIcon />,
    iconBg: "bg-orange-500",
    title: "Network",
    subtitle: "Palo Alto Firewall",
    description:
      "Ingest firewall traffic and threat logs (Threat, Traffic, URL).",
    authType: "Auth",
    authDetails: "Syslog over TLS or Panorama API (token)",
    status: "warning" as const,
  },
  {
    icon: <EmailIcon />,
    iconBg: "bg-blue-600",
    title: "Email",
    subtitle: "O365 / Exchange",
    description: "Pull Exchange Online message traces and quarantine actions.",
    authType: "Auth",
    authDetails: "OAuth2, Application permissions (Mail.Read,...)",
    status: "available" as const,
  },
  {
    icon: <ThreatIntelIcon />,
    iconBg: "bg-indigo-500",
    title: "Threat Intel",
    subtitle: "VirusTotal / MISP Feed",
    description: "Fetch IoCs, enrich events, and auto-tag matches.",
    authType: "Auth",
    authDetails: "API key / TAXII credentials",
    status: "available" as const,
  },
  {
    icon: <ServiceNowIcon />,
    iconBg: "bg-gray-800",
    title: "ServiceNow / JIRA",
    subtitle: undefined,
    description: "Incidents, change tickets and updates",
    authType: "Auth",
    authDetails: "OAuth2 / API token / Basic auth.",
    status: "available" as const,
  },
];

const otherSources = [
  {
    icon: <GoogleCloudIcon />,
    iconBg: "bg-blue-400",
    title: "Google Cloud Storage",
    subtitle: undefined,
    description: "Object-scored logs for ingestion",
    authType: "Auth",
    authDetails: "Service account key / IAM role",
    status: "warning" as const,
  },
  {
    icon: <AWSIcon />,
    iconBg: "bg-yellow-600",
    title: "AWS CloudTrail",
    subtitle: undefined,
    description: "API events and account activity from AWS",
    authType: "Auth",
    authDetails: "AWS IAM (access key + secret) / IAM role (assume role)",
    status: "available" as const,
  },
  {
    icon: <LDAPIcon />,
    iconBg: "bg-blue-500",
    title: "LDAP / AD LDAP",
    subtitle: undefined,
    description: "Directory queries and account changes.",
    authType: "Auth",
    authDetails: "Bind DN + password / StartTLS / client cert.",
    status: "available" as const,
  },
  {
    icon: <RADIUSIcon />,
    iconBg: "bg-gray-500",
    title: "RADIUS / Tacacs+",
    subtitle: undefined,
    description: "Auth attempts and accounting from network AAA.",
    authType: "Auth",
    authDetails: "Shared secret / TLS (for RadSec) / certificate.",
    status: "available" as const,
  },
  {
    icon: <DefenderIcon />,
    iconBg: "bg-blue-600",
    title: "Microsoft Defender for Endpoint",
    subtitle: undefined,
    description: "EDR alerts and telemetry.",
    authType: "Auth",
    authDetails: "OAuth2 app credentials (MS Graph API).",
    status: "available" as const,
  },
  {
    icon: <SentinelOneIcon />,
    iconBg: "bg-purple-600",
    title: "SentinelOne / Carbon Black / EDR",
    subtitle: undefined,
    description: "Detections, process, and audit logs.",
    authType: "Auth",
    authDetails: "API token / API key / OAuth2.",
    status: "connected" as const,
  },
  {
    icon: <FirewallIcon />,
    iconBg: "bg-cyan-500",
    title: "Firewall logs (Cisco ASA, Palo Alto, Fortinet)",
    subtitle: undefined,
    description: "Traffic allow/deny and sessions.",
    authType: "Auth",
    authDetails: "Syslog (UDP/TCP/TLS), API key, SSH for config.",
    status: "available" as const,
  },
  {
    icon: <LoadBalancerIcon />,
    iconBg: "bg-blue-700",
    title: "Load balancer / Proxy logs (NGINX, F5,...)",
    subtitle: undefined,
    description: "HTTP access and error logs.",
    authType: "Auth",
    authDetails: "File/agent, syslog, API (if hosted).",
    status: "available" as const,
  },
  {
    icon: <VPNIcon />,
    iconBg: "bg-orange-500",
    title: "VPN concentrator logs (OpenVPN, AnyCo...)",
    subtitle: undefined,
    description: "VPN authentication and session records.",
    authType: "Auth",
    authDetails: "Syslog / API / SSH",
    status: "available" as const,
  },
  {
    icon: <CloudflareIcon />,
    iconBg: "bg-orange-400",
    title: "Cloudflare / WAF logs",
    subtitle: undefined,
    description: "Edge requests, bot/fraud events, WAF blocks.",
    authType: "Auth",
    authDetails: "API token / logpush (S3/BigQuery).",
    status: "connected" as const,
  },
  {
    icon: <CustomAppIcon />,
    iconBg: "bg-blue-400",
    title: "Application logs (custom apps)",
    subtitle: undefined,
    description: "Business and security events from apps.",
    authType: "Auth",
    authDetails:
      "Log forwarder (TLS + token) / HTTPS(s) webhook (Bearer token).",
    status: "available" as const,
  },
  {
    icon: <KubernetesIcon />,
    iconBg: "bg-blue-600",
    title: "Kubernetes audit logs",
    subtitle: undefined,
    description: "API server events and pod lifecycle changes.",
    authType: "Auth",
    authDetails: "K8s service account token / TLS client cert.",
    status: "available" as const,
  },
];

export const SourcesSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Popular Sources */}
      <section>
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Popular Sources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {popularSources.map((source, index) => (
            <SourceCard
              key={index}
              icon={source.icon}
              iconBg={source.iconBg}
              title={source.title}
              subtitle={source.subtitle}
              description={source.description}
              authType={source.authType}
              authDetails={source.authDetails}
              status={source.status}
              onClick={() => console.log("Clicked:", source.title)}
            />
          ))}
        </div>
      </section>

      {/* Others */}
      <section>
        <h2 className="text-lg font-semibold text-text-primary mb-4">Others</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {otherSources.map((source, index) => (
            <SourceCard
              key={index}
              icon={source.icon}
              iconBg={source.iconBg}
              title={source.title}
              subtitle={source.subtitle}
              description={source.description}
              authType={source.authType}
              authDetails={source.authDetails}
              status={source.status}
              onClick={() => console.log("Clicked:", source.title)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
