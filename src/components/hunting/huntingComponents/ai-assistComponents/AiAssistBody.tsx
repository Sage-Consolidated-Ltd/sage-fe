import React, { useState } from "react";
import {
  AiChatIcon,
  ChevronDownIcon,
  ExportIcon,
  InfoDownIcon,
  MarkIcon,
  RunIcon,
  XIcon,
  ZapIcon,
} from "../../../../utils/icons";
import Checkbox from "../../../props/Checkbox";
import Button from "../../../props/Button";
import RecommendationSuccessModal from "./RecommendationSuccessModal";
import Drawer from "../../../props/Drawer";

const AiAssistBody = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState(false);
  return (
    <div className=" bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-shadow-card z-10  flex flex-col gap-7 ">
      <div className="flex gap-6">
        {/* =============== Sage AI Assistant===================== */}
        <div className="bg-surface border border-input-border p-5 rounded-xl h-[360px] min-w-[670px] ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xl text-text-secondary">
              <AiChatIcon className="text-primary-hover" />
              <p>Ask Sage AI Assistant</p>
            </div>

            <p className="text-warning text-xs">
              AI will translate your question into a structured query and run it
              against your logs.
            </p>
            <div className="border-b border-input-border my-3"></div>
          </div>
        </div>
        {/* =============== Sage AI Assistant===================== */}

        {/* ================Suggested Hunts=============== */}
        <div className="bg-surface border border-input-border p-5 rounded-xl h-[360px] min-w-[800px] flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xl text-text-secondary">
              <AiChatIcon className="text-primary-hover" />
              <p>Suggested Hunts</p>
            </div>

            <p className="text-warning text-xs">
              AI proactively suggests based on recent data anomalies:
            </p>
            <div className="flex flex-col gap-1">
              <Checkbox label="Unusual PowerShell usage on domain controllers" />
              <Checkbox label="Spike in failed email logins from Nigeria" />
              <Checkbox label="Outbound connections to rare geographies" />
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-sm text-text-secondary ">
            <div className="flex items-center gap-1 bg-alt border border-primary-hover rounded-lg px-2 py-1">
              <ZapIcon className="text-primary-hover" />
              <p>Run Hunt</p>
            </div>

            <div className="flex items-center gap-1">
              <MarkIcon className="text-success" />
              <p>Save</p>
            </div>
            <div className="flex items-center gap-1 ">
              <XIcon className="text-error" />
              <p>Ignore</p>
            </div>
          </div>
        </div>
        {/* ================Suggested Hunts=============== */}
      </div>

      {/* =================Hunt Results=================== */}
      <div className="bg-surface border border-input-border p-5 rounded-xl flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xl text-text-secondary">
            <AiChatIcon className="text-primary-hover" />
            <p>Hunt Results</p>
          </div>

          <div className="border-b border-input-border my-3"></div>

          <div>
            <p className="text-text-secondary font-bold text-base mb-2">
              Results Summary
            </p>
            <ul className="list-disc pl-8 text-text-primary text-sm flex flex-col gap-1">
              <li>342 failed login attempts detected</li>
              <li>18 unique external IPs</li>
              <li>3 accounts targeted repeatedly</li>
            </ul>
          </div>

          <div className=" mt-6 ">
            <div className="ml-8 my-2">
              <li className="text-text-secondary text-sm font-bold">
                AI Insight:
              </li>
            </div>

            <p className="border-l-3 border-primary w-[572px] pl-2 ml-3">
              This pattern looks like brute force attempts. I recommend enabling
              lockout policies for jdoe@corp.local.
            </p>
            <div className="border-b border-input-border mt-2"></div>
          </div>

          <div className="mt-6 mb-20">
            <p className="text-text-secondary font-bold text-base mb-2">
              Recommendations
            </p>
            <ul className="list-disc pl-8 text-text-primary text-sm flex flex-col gap-1">
              <li>Isolate compromised endpoints</li>
              <li>
                Enforce MFA for{" "}
                <span className="bg-alt py-1 px-2 rounded-lg">svc-admin</span>
              </li>
              <li>
                Lock <span className="underline">jdoe@corp.local</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="border-b border-input-border my-3"></div>

            <div className="flex items-center gap-5 pl-5">
              <div>
                <Button
                  paddingX="px-4"
                  paddingY="py-2"
                  height="min-h-[0px]"
                  variant="white"
                  icon={<InfoDownIcon />}
                  onClick={() => setSelectedDetails(true)}
                >
                  Details
                </Button>
              </div>

              <div
                className="flex gap-1.5 items-center cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <RunIcon className="text-primary-hover" />
                <p>Apply Recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =================Hunt Results=================== */}

      <Drawer
        isOpen={!!selectedDetails}
        onClose={() => setSelectedDetails(false)}
        width="710px"
      >
        <Drawer.Header title="Hunt Results: Failed Logins (External IPs, Last 24h)" />
        <Drawer.Body>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-text-primary text-base">
                342 failed login attempts detected across multiple accounts. Use
                filters to explore activity by source IP, user, or system.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base text-text-primary">Actions</p>

              <div className="flex items-center gap-3 text-sm">
                <button className="flex items-center gap-1.5 bg-alt py-2 px-2 rounded-xl hover:border hover:border-[#A4C1E3] cursor-pointer ">
                  <ZapIcon className="text-primary" />
                  Save Hunt
                </button>
                <button className="flex items-center gap-1.5">
                  <MarkIcon className="text-warning" />
                  Escalate to Incident
                </button>
                <button className="flex items-center gap-1.5">
                  <MarkIcon className="text-warning" />
                  Tag IoC
                </button>
                <button className="flex items-center gap-1.5">
                  <ExportIcon className="text-primary-hover" />
                  Export Results
                  <ChevronDownIcon />
                </button>
              </div>
            </div>

            {/* border */}
            <div className="border border-border "></div>
            {/* border */}

            <div>
              <p className="text-base text-text-secondary font-bold">
                Summary Stats
              </p>
              <div className="ml-7 text-base text-text-primary font-normal">
                <li>Total Attempts: 342</li>
                <li>Unique External IPs: 18</li>
                <li>Accounts Targeted: 3</li>
                <li>Linked Alerts: 5</li>
              </div>
              <p className="text-warning text-sm">
                Stats are calculated from raw logs ingested in the last 24
                hours.
              </p>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>

      <div>
        <RecommendationSuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default AiAssistBody;
