import React from "react";
import Button from "../../../props/Button";
import { PlusIcon } from "../../../../utils/icons";

const AiAssistHeader = () => {
  return (
    <div className=" bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-shadow-card z-10  flex flex-col gap-7 ">
      <div className="text-text-muted text-base leading-6 font-medium">
        Hunting /
        <span className="text-text-primary text-base">
          {" "}
          AI-Assisted Threat Hunt{" "}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 max-w-[596px]">
          <p className="text-text-primary text-xl ">AI-Assisted Threat Hunt </p>
          <p className="text-text-secondary text-xs">
            Collaborate with AI to uncover hidden threats. Ask questions in
            plain English, refine queries, and let AI suggest hunts, patterns,
            and correlations across your data.
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
              Schedule Hunt
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistHeader;
