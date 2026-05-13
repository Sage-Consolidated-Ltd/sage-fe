import React from "react";
import {
  AiChatIcon,
  MoreIcon,
  Notification1Icon,
} from "../../../../utils/icons";

const AlertsNotifications = () => {
  return (
    <div>
      {/* ==========AI Auto============== */}
      <div className="flex flex-col gap-4 bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-shadow-card h-[396px]">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-text-secondary">
            Alerts & Notifications
          </p>
          <MoreIcon />
        </div>

        {/* border */}
        <div className="border border-border"></div>
        {/* border */}

        <div>
          <div className="flex items-center gap-3 pb-2">
            <Notification1Icon className="text-primary" />
            <p className="text-text-primary text-xl">Ingestion Warnings</p>
          </div>
          <div className="flex items-center gap-2 pl-7 pb-2">
            <li className="list-disc">Azure AD</li>
            <p className="bg-hover-light text-text-secondary rounded-lg px-2 py-1 text-xs">
              Increased latency detected.
            </p>
          </div>
          <div className="flex items-center gap-2 pl-7">
            <li className="list-disc">Proofpoint</li>
            <p className="bg-hover-light text-text-secondary rounded-lg px-2 py-1 text-xs">
              Sudden drop in email events (−78%).
            </p>
            <p className="bg-hover-light text-text-secondary rounded-lg px-2 py-1 text-xs">
              Require analyst approval for admin accounts
            </p>
          </div>
        </div>

        <div className="pt-6">
          <div className="flex items-center gap-3 pb-2">
            <AiChatIcon className="text-primary" />
            <p className="text-text-primary text-xl">AI Insight</p>
          </div>
          <div className="flex items-center gap-2 pl-7 pb-2">
            <li className="list-disc">
              Ingestion errors correlate with schema changes detected 1 hour
              ago.
            </li>
          </div>
        </div>
      </div>
      {/* ======================== */}
    </div>
  );
};

export default AlertsNotifications;
