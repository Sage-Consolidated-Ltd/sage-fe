import React from "react";
import CoverageCount from "../../../dashboard/dash-components/CoverageCount";

const AdvancedLogOverview = () => {
  return (
    <div className=" bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-shadow-card z-10">
      {/*====== coverage count========== */}
      <div className="flex items-center justify-between gap-12 ">
        <div>
          <CoverageCount
            text="Query Overview"
            borderColor="border-border"
            textColor=""
          >
            <p className="text-text-secondary text-base font-normal py-2">
              Track your usage and collaboration trends at a glance.
            </p>
            <p className="text-text-primary text-xl font-normal">
              Last Run: Aug 18, 2025
            </p>
          </CoverageCount>
        </div>

        <div className="flex items-center gap-12">
          <CoverageCount
            text="Executed Queries"
            borderColor="border-primary-hover"
            textColor="text-primary-hover"
          >
            1,842
          </CoverageCount>

          <CoverageCount
            text="Saved Hunts"
            borderColor="border-success"
            textColor="text-success"
          >
            217
          </CoverageCount>

          <CoverageCount
            text="Shared Queries"
            borderColor="border-selection"
            textColor="text-selection"
          >
            58
          </CoverageCount>
        </div>
      </div>
      {/*====== coverage count========== */}
    </div>
  );
};

export default AdvancedLogOverview;
