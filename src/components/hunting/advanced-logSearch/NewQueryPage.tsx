import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../props/Button";
import {
  AiChatIcon,
  EditIcon,
  FiltersIcon,
  ImportIcon,
  PlusIcon,
  Share1Icon,
  Share2Icon,
  XIcon,
  ZapIcon,
} from "../../../utils/icons";
import { AnimatePresence, motion, type Variants } from "motion/react";

const NewQueryPage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const [activeTab, setActiveTab] = useState("Structured (KQL)");

  const tabVariants: Variants = {
    initial: { opacity: 0, y: 10, filter: "blur(4px)" },
    enter: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(4px)",
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const renderTabContent = () => {
    // We wrap the specific tables in a common motion.div for the transition
    return (
      <motion.div
        key={activeTab} // Crucial for AnimatePresence to track switches
        variants={tabVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {activeTab === "Structured (KQL)" && (
          <div className="h-[253px]">
            <ol className="list-decimal pl-10 text-text-secondary font-fira-code text-base leading-6">
              <li>
                SourceIP NOT in ("10.0.0.0/8", "172.16.0.0/12",
                "192.168.0.0/16")
              </li>
              <li>AND DestinationPort == 3389</li>
              <li>AND TimeGenerated {">"} ago(48h)</li>
            </ol>
          </div>
        )}

        {activeTab === "Natural Language" && (
          <div className="flex flex-col gap-5">
            <p className="text-sm text-text-primary bg-surface border border-input-border rounded-xl p-4 h-[78px]">
              Show me all failed logins from external IPs in the last 24 hours.
            </p>

            <div className="flex items-center gap-1 text-xs text-text-secondary">
              <p>System Conversion (KQL) : </p>
              <div className="flex items-center justify-center gap-2">
                <AiChatIcon className="text-primary" />
                <p>AI Summarize</p>
              </div>
            </div>

            <div className="h-[253px] bg-toast border border-input-border rounded-xl p-3">
              <ol className="list-decimal pl-10 text-text-secondary font-fira-code text-base leading-6">
                <li>EventID == 4625</li>
                <li>
                  AND SourceIP NOT in ("10.0.0.0/8", "172.16.0.0/12",
                  "192.168.0.0/16"){" "}
                </li>
                <li>AND TimeGenerated {">"} ago(24h)</li>
              </ol>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* =========header=================== */}
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
              Dive deep into raw security events using a flexible query editor
              or natural language assistant. Search across logs, correlate
              signals, and surface hidden threats. Save and share hunts for
              repeatable investigations.
            </p>
          </div>

          <div className="flex items-center gap-2 ">
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
            <div>
              <Button
                paddingX="px-4"
                paddingY="py-2"
                height="min-h-[0px]"
                variant="white"
                icon={<XIcon />}
                onClick={handleBack}
              >
                CANCEL
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* ==============header==================== */}

      {/* ======================================== */}
      <div className=" bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-shadow-card z-10  flex flex-col gap-4 ">
        <div>
          <p className="text-text-primary text-2xl pb-2">New Query</p>
        </div>

        <div className="flex items-center justify-center pb-2 gap-2 font-medium text-base cursor-pointer border-b-2 border-b-primary w-[143px]">
          <p>Query 01</p>
          <EditIcon className="text-primary" />
        </div>

        {/* Evidence Table Section */}
        <section>
          <div className="flex text-sm text-text-primary relative">
            {["Structured (KQL)", "Natural Language"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-[9px] px-6 cursor-pointer transition-colors duration-200 z-10 ${
                  activeTab === tab
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 border-l border-r border-t border-border bg-default rounded-t-xl -z-10"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </button>
            ))}

            <div className="flex items-center gap-4 text-sm text-text-secondary ">
              <div className="border border-border "></div>

              <div className="flex items-center gap-1 cursor-pointer bg-alt border border-primary py-1 px-2 rounded-lg">
                <ZapIcon className="text-primary" />
                <p>Run Query</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <ImportIcon className="text-primary" />
                <p>Save</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <Share2Icon className="text-primary" />
                <p>Share</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <PlusIcon className="text-primary" />
                <p>New Rule</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <FiltersIcon className="text-primary" />
                <p>Filter</p>
              </div>
            </div>
          </div>

          <div
            className={`border border-input-border bg-default p-[18px] rounded-tr-xl rounded-b-xl overflow-hidden ${
              activeTab === "Structured (KQL)" ? "rounded-tl-xl" : ""
            }`}
          >
            <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
          </div>
        </section>
      </div>
      {/* ======================================== */}
    </div>
  );
};

export default NewQueryPage;
