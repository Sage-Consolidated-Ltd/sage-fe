import React, { useState } from "react";
import {
  mockDataQuality,
  StatusActionIcon,
  StatusBadge,
  type DataQuality,
} from "../../../../utils/DataQuality";
import {
  ChevronLeft1Icon,
  ChevronRight1Icon,
  MoreIcon,
  Plus1Icon,
  RunIcon,
  SampleIcon,
} from "../../../../utils/icons";
import type { ColumnDef } from "../../../../types/table";
import Table from "../../../../shared/Table";
import Drawer from "../../../props/Drawer";

interface TableProps {
  data?: DataQuality[];
}

const DataQualityTable = ({ data = mockDataQuality }: TableProps) => {
  const [selectedDataQuality, setSelectedDataQuality] =
    useState<DataQuality | null>(null);

  // main table columns
  const columns: ColumnDef<DataQuality>[] = [
    {
      key: "Source",
      header: "Source",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.Source}</span>
      ),
    },
    {
      key: "CiscoFirewall",
      header: "Cisco Firewall",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.CiscoFirewall}</span>
      ),
    },

    {
      key: " MissingFields",
      header: " Missing Fields",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.MissingFields}</span>
      ),
    },
    {
      key: "UnmappedEvents",
      header: " Unmapped Events",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.UnmappedEvents}</span>
      ),
    },
    {
      key: "Duplicates",
      header: " Duplicates",
      cell: (i) => (
        <span className="text-text-secondary text-sm">{i.Duplicates}</span>
      ),
    },

    {
      key: "status",
      header: "Status",
      cell: (i) => <StatusBadge status={i.status} />,
    },

    {
      key: "action",
      header: "Actions",
      cell: (i) => (
        <div className="flex items-center gap-3">
          <button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDataQuality(i);
            }}
          >
            <Plus1Icon className="text-primary-hover" />
          </button>
          {/* Status-specific icon rendered here */}
          <StatusActionIcon status={i.status} />
        </div>
      ),
    },
  ];
  return (
    <div>
      {/* ============table============= */}
      <div className="flex flex-col gap-4 bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-shadow-card  ">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-text-secondary">
            Log Quality Breakdown
          </p>
          <MoreIcon />
        </div>

        {/* border */}
        <div className="border border-border"></div>
        {/* border */}

        <Table<DataQuality>
          data={data}
          columns={columns}
          showHeader={false}
          showCheckboxes={true}
          showFooter={false}
          className="bg-transparent"
        />
        <div className="flex items-center gap-2 justify-end">
          <div className="flex items-center gap-2 text-input-border">
            <ChevronLeft1Icon />
            <ChevronRight1Icon />
          </div>
          <div>
            <p>Showing 1-4 of 1</p>
          </div>
        </div>
      </div>

      {/* ===========Drawer============ */}
      <Drawer
        isOpen={!!selectedDataQuality}
        onClose={() => setSelectedDataQuality(null)}
        width="550px"
      >
        <Drawer.Header title="Palo Alto Firewall – Data Quality" children />

        <div className="pl-7 ">
          <p className="text-text-primary text-base flex gap-2">
            Status:
            <span className="bg-success px-2 py-1 text-default tracking-[2%] text-xs rounded-lg">
              Good
            </span>
          </p>
        </div>
        <Drawer.Body>
          <div className="flex flex-col gap-8">
            {/* =====summary======= */}

            <div>
              <div className="font-bold text-base text-text-primary pb-2">
                <p>Summary</p>
              </div>
              <div className="pl-7 flex flex-col gap-4">
                <li className="font-normal">
                  Error:{" "}
                  <span className="bg-hover-light rounded-lg py-0.5 px-1.5 text-xs font-bold ">
                    Invalid JSON
                  </span>
                </li>
                <li>
                  Line:{" "}
                  <span className="bg-hover-light rounded-lg py-0.5 px-1.5 text-xs font-bold ">
                    184
                  </span>
                </li>
              </div>
            </div>
            {/* =====summary======= */}

            {/* =========Sample Log============== */}
            <div className=" bg-default rounded-[18px] border border-border p-5 h-[131px]">
              <div className="flex items-center justify-between">
                <p className="text-xl text-text-secondary flex items-center gap-2">
                  <SampleIcon className="text-primary-hover" />
                  Sample Log:
                </p>
                <p className="text-text-muted text-sm border border-border rounded-sm py-1.5 px-3.5">
                  CSS
                </p>
              </div>
              <div className="border-l border-border ml-8 mt-2">
                <p className="font-medium text-base leading-6 pl-2">
                  {" "}
                  “<span className="text-success">src</span>”: “
                  <span className="text-primary">10.20.33.11</span>”, “dst”:
                  undefined{" "}
                </p>
              </div>
            </div>

            {/* border */}
            <div className="border border-border"></div>
            {/* border */}

            {/* ===========Sample Log============= */}
          </div>
        </Drawer.Body>
      </Drawer>
      {/* ===========Drawer============ */}
      {/* ============table============= */}
    </div>
  );
};

export default DataQualityTable;
