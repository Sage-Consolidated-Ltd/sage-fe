import React from "react";
import Button from "../../../props/Button";
import { PlusIcon } from "../../../../utils/icons";

const AdvancedLogSearch = () => {
  return (
    <div className=" bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-shadow-card z-10  flex flex-col gap-7 ">
      <div className="text-text-muted text-base leading-6 font-medium">
        Hunting /
        <span className="text-text-primary text-base">
          {" "}
          Advanced Log Search{" "}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 max-w-[596px]">
          <p className="text-text-primary text-xl ">Advanced Log Search </p>
          <p className="text-text-secondary text-xs">
            Dive deep into raw security events using a flexible query editor or
            natural language assistant. Search across logs, correlate signals,
            and surface hidden threats. Save and share hunts for repeatable
            investigations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Button
              paddingX="px-4"
              paddingY="py-2"
              height="min-h-[0px]"
              icon={<PlusIcon className="text-white" />}
            >
              New Query
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedLogSearch;
