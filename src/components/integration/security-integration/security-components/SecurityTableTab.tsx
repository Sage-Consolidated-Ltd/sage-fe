import { useState } from "react";
import Input from "../../../props/Input";
import Tabs from "../../../props/Tabs";
import { SourcesSection } from "./SourcesSection";
import ConnectedTable from "./ConnectedTable";
import { mockSources } from "../../../../utils/incident";
import {
  BoxPlusIcon,
  DisableIcon,
  EditIcon,
  Plus1Icon,
  ResetIcon,
} from "../../../../utils/icons";

const SecurityTableTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("marketplace");

  const tabs = [
    { id: "marketplace", label: "Market Place" },
    { id: "connected", label: "Connected Sources" },
  ];

  const handleDelete = (id: string) => {
    console.log("Delete source:", id);
  };

  const handleMenu = (id: string) => {
    console.log("Open menu for:", id);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between gap-6 flex-wrap items-start mb-6">
        <div className="flex gap-6 items-center flex-wrap">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="underline"
            className="p-2"
          />

          {activeTab === "connected" && (
            <div className="flex items-center gap-[9px]">
              <button className="gap-1 flex items-center cursor-pointer px-2 py-1">
                <BoxPlusIcon className="w-[18px] h-[18px] text-primary-hover" />
                <p className="text-sm text-text-secondary">View Logs</p>
              </button>
              <button className="gap-1 flex items-center cursor-pointer px-2 py-1">
                <EditIcon className="w-[18px] h-[18px] text-primary-hover" />
                <p className="text-sm text-text-secondary">Edit Config</p>
              </button>
              <button className="gap-1 flex items-center cursor-pointer px-2 py-1">
                <DisableIcon className="w-[18px] h-[18px] text-primary-hover" />
                <p className="text-sm text-text-secondary">Disconnect</p>
              </button>
              <button className="gap-1 flex items-center cursor-pointer px-2 py-1">
                <ResetIcon className="w-[18px] h-[18px] text-primary-hover" />
                <p className="text-sm text-text-secondary">Sync</p>
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col items-end gap-4 flex-1">
          <div className="flex items-center gap-4 w-full justify-end">
            <div className="max-w-md w-full">
              <Input
                name="search"
                type="text"
                placeholder="Search Incidents & Alerts..."
                search
                searchPosition="left"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* <div>
              <Dropdown
                placeholder="Filter"
                options={filterOptions}
                selectedValues={filters}
                onSelect={(value) => {
                  if (!filters.includes(value)) {
                    setFilters([...filters, value]);
                  }
                }}
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "marketplace" ? (
          <SourcesSection />
        ) : (
          <ConnectedTable
            data={mockSources}
            onDelete={handleDelete}
            onMenu={handleMenu}
          />
        )}
      </div>
    </div>
  );
};

export default SecurityTableTab;
