import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ColumnDef } from "../../../types/table";
import {
  mockPlayBook,
  StatusBadge,
  type MyPlayBook,
} from "../../../utils/myPlayBook";
import Table from "../../../shared/Table";
import { DisableIcon, MoreIcon, PauseIcon } from "../../../utils/icons";

interface TableProps {
  data?: any[];
}

const MyPlayBookTable = ({ data = mockPlayBook }: TableProps) => {
  const [selectedPlayBook, setSelectedPlayBook] = useState(false);
  const navigate = useNavigate();

  const columns: ColumnDef<MyPlayBook>[] = [
    {
      key: "name",
      header: "Playbook Name",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.name}</span>
      ),
    },
    {
      key: "triggers",
      header: "Triggers",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.triggers}</span>
      ),
    },

    {
      key: "lastRun",
      header: "Last Run",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.lastRun}</span>
      ),
    },
    {
      key: "rules",
      header: "Linked Rules",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.rules}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (i) => (
        <div className="flex gap-2 items-center">
          <StatusBadge status={i.status} />
        </div>
      ),
    },
    {
      key: "action",
      header: "Actions",
      cell: () => (
        <div className="flex items-center gap-3">
          <MoreIcon className="text-text-secondary cursor-pointer" />
          <button className="cursor-pointer">
            <PauseIcon className="text-warning cursor-pointer" />
          </button>

          <button
            onClick={() => setSelectedPlayBook(true)}
            className="cursor-pointer"
          >
            <DisableIcon className="text-error" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table<MyPlayBook>
        data={data}
        columns={columns}
        showHeader={false}
        showCheckboxes={true}
        className="bg-transparent"
      />
    </div>
  );
};

export default MyPlayBookTable;
