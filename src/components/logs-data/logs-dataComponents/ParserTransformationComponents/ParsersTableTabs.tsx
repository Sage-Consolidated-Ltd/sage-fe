import React from "react";
import Tabs from "../../../props/Tabs";

import SampleLogsViewer from "./SampleLogsViewer";
import ParsersTable from "./ParsersTable";

interface ParserTableTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const ParsersTableTabs = ({
  activeTab,
  setActiveTab,
}: ParserTableTabsProps) => {
  const tabs = [
    { id: "parsers", label: "Parsers" },
    { id: "Sample-logs-viewer", label: "Sample Logs Viewer" },
  ];
  return (
    <div className="my-6">
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

      <div className="mt-4">
        {activeTab === "parsers" ? (
          <div className="h-[50vh]">
            <ParsersTable />
          </div>
        ) : (
          <div className="h-fit">
            <SampleLogsViewer />
          </div>
        )}
      </div>
    </div>
  );
};

export default ParsersTableTabs;
