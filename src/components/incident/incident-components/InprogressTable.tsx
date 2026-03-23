import { Settings, ShieldAlert } from "lucide-react";
import Table from "../../../shared/Table";
import {
  AiChatIcon,
  ChevronRight1Icon,
  ShieldIcon,
} from "../../../utils/icons";
import {
  SeverityIndicator,
  StatusBadge,
  type Incident,
} from "../../../utils/incident";
import type { ColumnDef } from "../../../types/table";
import ContainAssetsModal from "../incident-modals/ContainAssetsModal";
import { useState } from "react";

interface TableProps {
  data: Incident[];
}

const InprogressTable = ({ data }: TableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const columns: ColumnDef<Incident>[] = [
    {
      key: "name",
      header: "Incident name",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.name}</span>
      ),
    },
    {
      key: "source",
      header: "Detection Source:",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.source}</span>
      ),
    },
    {
      key: "severity",
      header: "Severity",
      cell: (i) => <SeverityIndicator level={i.severity} />,
    },
    {
      key: "timeDetected",
      header: "Time Detected",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.timeDetected}</span>
      ),
    },
    {
      key: "status",
      header: "Status:",
      cell: (i) => (
        <div className="flex gap-2 items-center">
          {i.status === "New" && <StatusBadge status="New" />}
          <StatusBadge status={i.status} />
        </div>
      ),
    },
    {
      key: "action",
      header: "Action",
      cell: () => (
        <div className="flex items-center gap-3">
          <button onClick={() => setIsOpen(true)} className="cursor-pointer">
            <ShieldIcon className="text-selection cursor-pointer" />
          </button>

          <AiChatIcon className="text-primary-hover" />
          <ChevronRight1Icon className="text-text-muted" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Table<Incident>
        data={data}
        columns={columns}
        showHeader={false}
        className="bg-transparent"
      />

      <ContainAssetsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default InprogressTable;
