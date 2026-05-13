import { DisableIcon, Plus1Icon, ToolsIcon } from "./icons";

export interface DataQuality {
  id: string;
  Source: string;
  CiscoFirewall: string;
  MissingFields: string;
  UnmappedEvents: string;
  Duplicates: string;
  status?: "Good" | "Warning" | "Partial";
}

export const mockDataQuality: DataQuality[] = [
  {
    id: "1",
    Source: "Palo Alto Firewall",
    CiscoFirewall: "12",
    MissingFields: "3%",
    UnmappedEvents: "0",
    Duplicates: "0.1%",
    status: "Good",
  },
  {
    id: "2",
    Source: "Defender ATP",
    CiscoFirewall: "210",
    MissingFields: "6%",
    UnmappedEvents: "231",
    Duplicates: "1.2%",
    status: "Warning",
  },
  {
    id: "3",
    Source: "Cisco Firewall",
    CiscoFirewall: "0",
    MissingFields: "0",
    UnmappedEvents: "32",
    Duplicates: "0",
    status: "Partial",
  },
];

export const StatusBadge = ({ status }: { status: DataQuality["status"] }) => {
  const styles: Record<string, string> = {
    Good: "bg-success text-default",
    Warning: "bg-warning text-default",
    Partial: "bg-error text-default",
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
  status: DataQuality["status"];
}) => {
  switch (status) {
    case "Good":
      return;
    case "Warning":
      return <ToolsIcon className="text-primary-hover w-5 h-5" />;
    case "Partial":
      return <DisableIcon className="text-error w-5 h-5" />;
    default:
      return <Plus1Icon className="text-primary-hover w-4 h-4" />;
  }
};
