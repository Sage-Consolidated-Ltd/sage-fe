import Table from "../../../../shared/Table";
import type { ColumnDef } from "../../../../types/table";
import {
  DisableIcon,
  MoreIcon,
  ResetIcon,
  ToolsIcon,
} from "../../../../utils/icons";

// Types
export interface ConnectedSource {
  id: string;
  name: string;
  type: string;
  eventsToday: string;
  lastSync: string;
  status: "Active" | "Warning" | "Error";
  icon: React.ReactNode;
  iconBg?: string;
}

// Status badge component
const StatusBadge = ({ status }: { status: ConnectedSource["status"] }) => {
  const styles = {
    Active: "bg-success text-default",
    Warning: "bg-warning text-white",
    Error: "bg-error text-default",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

// Action buttons component
const SourceActions = ({
  status,
  onDelete,
  onMenu,
}: {
  status: ConnectedSource["status"];
  onDelete?: () => void;
  onMenu?: () => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onMenu}
        className="text-text-primary transition-colors cursor-pointer"
        aria-label="More options"
      >
        <MoreIcon />
      </button>
      <button
        onClick={onDelete}
        className="text-text-muted hover:text-red-500 transition-colors cursor-pointer"
        aria-label="Delete source"
      >
        {status === "Error" ? (
          // Refresh icon for error state
          <ResetIcon className="text-warning w-5 h-5" />
        ) : status === "Warning" ? (
          <ToolsIcon className="text-primary-hover w-5 h-5" />
        ) : (
          <DisableIcon className="text-error w-5 h-5" />
        )}
      </button>
    </div>
  );
};

interface ConnectedSourcesTableProps {
  data: ConnectedSource[];
  onDelete?: (id: string) => void;
  onMenu?: (id: string) => void;
  className?: string;
}

export const ConnectedTable = ({
  data,
  onDelete,
  onMenu,
  className = "",
}: ConnectedSourcesTableProps) => {
  const columns: ColumnDef<ConnectedSource>[] = [
    {
      key: "name",
      header: "Source Name",
      cell: (s) => (
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              s.iconBg || "bg-blue-500"
            }`}
          >
            {s.icon}
          </div>
          <span className="text-text-primary text-sm font-medium">
            {s.name}
          </span>
        </div>
      ),
    },
    {
      key: "type",
      header: "Type",
      cell: (s) => (
        <span className="text-text-primary text-sm pl-1">{s.type}</span>
      ),
    },
    {
      key: "eventsToday",
      header: "Events Today",
      cell: (s) => (
        <span className="text-text-primary text-sm pl-1">{s.eventsToday}</span>
      ),
    },
    {
      key: "lastSync",
      header: "Last Sync",
      cell: (s) => (
        <span className="text-text-primary text-sm pl-1">{s.lastSync}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (s) => <StatusBadge status={s.status} />,
    },
    {
      key: "actions",
      header: "Actions",
      cell: (s) => (
        <SourceActions
          status={s.status}
          onDelete={() => onDelete?.(s.id)}
          onMenu={() => onMenu?.(s.id)}
        />
      ),
    },
  ];

  return (
    <Table<ConnectedSource>
      data={data}
      columns={columns}
      className={`bg-transparent ${className}`}
    />
  );
};

export default ConnectedTable;
