import React from "react";
import CoverageCount from "../../../dashboard/dash-components/CoverageCount";

const IngestionHealthCoverageCount = () => {
  return (
    <div className="flex flex-col gap-4 bg-default py-[28px] px-[30px] rounded-[18px] relative">
      {/*====== coverage count========== */}
      <div className="flex items-center gap-12 ">
        <CoverageCount
          text="Total Events Ingested"
          borderColor="border-success"
          textColor="text-success"
        >
          <p className="flex items-center gap-1">
            {" "}
            1.8M <span className="text-primary text-sm">-32</span>
            <span className="text-sm text-text-primary font-normal">
              Last 24hr{" "}
            </span>
          </p>
        </CoverageCount>

        <CoverageCount
          text="Active Data Sources"
          borderColor="border-selection"
          textColor="text-selection"
        >
          <p className="flex items-center gap-1">
            {" "}
            12 <span className="text-success text-sm">+23</span>
            <span className="text-sm text-text-primary font-normal">
              running normally{" "}
            </span>
          </p>
        </CoverageCount>

        <CoverageCount
          text="Delayed Sources"
          borderColor="border-text-muted"
          textColor="text-text-muted"
        >
          <p className="flex items-center gap-1">
            {" "}
            2 <span className="text-primary text-sm">-4</span>
            <span className="text-sm text-text-primary font-normal">
              Last 24hr{" "}
            </span>
          </p>
        </CoverageCount>

        <CoverageCount
          text="Ingestion Errors"
          borderColor="border-primary-hover"
          textColor="text-primary-hover"
        >
          <p className="flex items-center gap-1">
            {" "}
            169 <span className="text-primary-hover text-sm">-4</span>
            <span className="text-sm text-text-primary font-normal">
              Last 24hr{" "}
            </span>
          </p>
        </CoverageCount>
      </div>
      {/*====== coverage count========== */}
    </div>
  );
};

export default IngestionHealthCoverageCount;
