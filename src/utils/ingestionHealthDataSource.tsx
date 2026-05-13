import { DisableIcon, MoreIcon, ResetIcon, ToolsIcon } from "./icons";

export interface IngestionDataSource {
  id: string;
  Source: string;
  Type: string;
  EventsToday: string;
  LastEvent: string;
  status?: "Active" | "Delayed" | "Error";
}

export const mockIngestionDataSource: IngestionDataSource[] = [
  {
    id: "1",
    Source: "auth_logs",
    Type: "Upload",
    EventsToday: "1.2M",
    LastEvent: "09:42 AM",
    status: "Active",
  },
  {
    id: "2",
    Source: "Defender ATP",
    Type: "Endpoint",
    EventsToday: "235K",
    LastEvent: "09:15 AM",
    status: "Delayed",
  },
  {
    id: "3",
    Source: "Cisco Firewall",
    Type: "Network",
    EventsToday: "560K",
    LastEvent: "09:00 AM",
    status: "Active",
  },
  {
    id: "4",
    Source: "VirusTotal Feed",
    Type: "Threat Intel",
    EventsToday: "0",
    LastEvent: "N/A",
    status: "Error",
  },
];

export const StatusBadge = ({
  status,
}: {
  status: IngestionDataSource["status"];
}) => {
  const styles: Record<string, string> = {
    Active: "bg-success text-default",
    Delayed: "bg-text-muted text-default",
    Error: "bg-error text-default",
  };

  return (
    <span className={`px-2 py-1 rounded-lg text-xs ${styles[status || "New"]}`}>
      {status}
    </span>
  );
};

/**
 * New Helper Component for Row Actions
 */
export const StatusActionIcon = ({
  status,
}: {
  status: IngestionDataSource["status"];
}) => {
  switch (status) {
    case "Active":
      return <DisableIcon className="text-error w-5 h-5" />;
    case "Delayed":
      return <ToolsIcon className="text-primary-hover w-5 h-5" />;
    case "Error":
      return <ResetIcon className="text-warning w-5 h-5" />;
    default:
      return <MoreIcon className="text-text-primary w-4 h-4" />;
  }
};
