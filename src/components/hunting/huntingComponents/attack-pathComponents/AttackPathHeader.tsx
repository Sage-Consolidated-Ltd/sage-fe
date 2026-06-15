import React from "react";
import {
  ChevronDownIcon,
  ExportIcon,
  FiltersIcon,
  ZapIcon,
} from "../../../../utils/icons";

const AttackPathHeader = () => {
  return (
    <div className=" bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-shadow-card z-10 flex flex-col gap-7 ">
      <div className="text-text-muted text-base leading-6 font-medium">
        Hunting /
        <span className="text-text-primary text-base">
          {" "}
          Attack Path Visualizer{" "}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 max-w-[596px]">
          <p className="text-text-primary text-xl ">Attack Path Visualizer </p>
          <p className="text-text-secondary text-xs">
            Explore how attackers move across your environment. Visualize entry
            points, lateral movement, and impacted assets. Use this view to
            identify chokepoints and break the kill chain.
          </p>
        </div>

        <div className="flex items-center gap-7">
          {/* border */}
          <div className="border border-r border-border h-[70px]"></div>
          {/* border */}

          <div className="flex items-center gap-1  text-sm">
            <ExportIcon className="text-primary-hover" />
            <p>Export Graph</p>
            <ChevronDownIcon />
          </div>

          <div className="flex items-center gap-1 text-sm">
            <ZapIcon className="text-primary-hover" />
            <p>Simulate Attack Path</p>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <FiltersIcon className="text-primary-hover" />
            <p>Filters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttackPathHeader;
