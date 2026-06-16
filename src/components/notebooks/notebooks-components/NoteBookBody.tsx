import React, { useState } from "react";
import CoverageCount from "../../dashboard/dash-components/CoverageCount";
import NoteBookTableTabs from "./NoteBookTableTabs";

const NoteBookBody = () => {
  const [activeTab, setActiveTab] = useState("library");
  return (
    <div className=" bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-shadow-card z-10">
      <div className="flex items-center gap-12 py-7 ">
        <CoverageCount
          text="Total Notebooks"
          borderColor="border-primary-hover"
          textColor="text-primary-hover"
        >
          22
        </CoverageCount>

        <CoverageCount
          text="Active Sessions:"
          borderColor="border-success"
          textColor="text-success"
        >
          4
        </CoverageCount>

        <CoverageCount
          text="Prebuilt Templates Available:"
          borderColor="border-warning"
          textColor="text-text-primary"
        >
          9
        </CoverageCount>

        <CoverageCount
          text="Last Ran"
          borderColor="border-text-muted"
          textColor=""
        >
          <span className="text-xl font-bold text-text-secondary tracking-[-0.5%] leading-10">
            Sep 23, 2025 · 09:42 AM
          </span>
        </CoverageCount>
      </div>

      <div>
        <NoteBookTableTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default NoteBookBody;
