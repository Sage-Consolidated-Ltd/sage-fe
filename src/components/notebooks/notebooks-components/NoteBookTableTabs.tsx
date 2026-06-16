import React, { useMemo, useState } from "react";
import Tabs from "../../props/Tabs";
import LibraryTabBody from "./LibraryTabBody";
import TemplatesTabBody from "./TemplatesTabBody";
import Input from "../../props/Input";
import Dropdown from "../../props/Dropdown";

interface NewBooksTableTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const NoteBookTableTabs = ({
  activeTab,
  setActiveTab,
}: NewBooksTableTabsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const tabs = [
    { id: "library", label: "Library" },
    { id: "templates", label: "Templates" },
  ];

  const [filters, setFilters] = useState([
    "Last 24 Hours",
    "Endpoint",
    "Required",
    "Nework",
  ]);
  const filterOptions = [
    { label: "Workstations", value: "Workstations" },
    { label: "Role-based groups", value: "Role-based groups" },
    { label: "Cloud resources", value: "Cloud resources" },
    { label: "Network Logs", value: "Network Logs" },
    { label: "Last 24 Hours", value: "Last 24 Hours" },
  ];

  //   // Logic: Filter data based on search and (optionally) category filters
  //   const filteredData = useMemo(() => {
  //     return mockIngestionDataSource.filter((IngestionDataSource) => {
  //       const matchesSearch = IngestionDataSource.Source.toLowerCase().includes(
  //         searchQuery.toLowerCase(),
  //       );

  //       // Add category filtering logic here if your data has categories
  //       return matchesSearch;
  //     });
  //   }, [searchQuery, filters]);
  return (
    <div>
      <div className="my-2 ">
        <div className="flex items-center justify-between">
          <div className="flex justify-between gap-6 flex-wrap items-start mb-6">
            <div className="flex items-center gap-5 flex-wrap">
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                variant="underline"
                className="p-2"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <div className="w-sm ">
              <Input
                name="search"
                type="text"
                placeholder="Search by name or description"
                search
                searchPosition="left"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
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
            </div>
          </div>
        </div>

        <div className="mt-4">
          {activeTab === "library" ? (
            <div className="h-[50vh]">
              <LibraryTabBody />
            </div>
          ) : (
            <div className="h-[50vh]">
              <TemplatesTabBody />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteBookTableTabs;
