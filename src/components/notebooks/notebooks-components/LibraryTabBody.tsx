import React, { useState } from "react";
import {
  CloneIcon,
  DisableIcon,
  EditIcon,
  ExportIcon,
  Share1Icon,
  ViewIcon,
  ZapIcon,
} from "../../../utils/icons";

import Button from "../../props/Button";
import Drawer from "../../props/Drawer";

const LIBRARYSTAGES = [
  {
    id: "01",
    title: "Brute Force Login Detection",
    description: "Prebuilt",
    status: "Ready",
    type: "default",
    owner: "SecOps Team",
    lastRun: "Sep 21, 2025",
    open: "Open",
  },
  {
    id: "02",
    title: "Custom ML – Rare DNS Queries",
    description: "Custom (ML)",
    status: "Active",
    type: "default",
    owner: "Custom (ML)",
    lastRun: "Sep 23, 2025",
    open: "Open",
  },
  {
    id: "03",
    title: "Phishing URL Enrichment",
    description: "Prebuilt",
    status: "Ready",
    type: "active",
    owner: "Threat Intel",
    lastRun: "Sep 20, 2025",
    open: "Open",
  },
  {
    id: "04",
    title: "Incident-Triggered Notebook",
    description: "AI-Generated",
    status: "Ready",
    type: "default",
    owner: "System",
    lastRun: "Sep 19, 2025",
    open: "Open",
  },
];

const LibraryTabBody = () => {
  const [activeStage, setActiveStage] = useState("01");
  const [selectedLibraryStage, setSelectedLibraryStage] = useState<
    (typeof LIBRARYSTAGES)[number] | null
  >(null);

  return (
    <div>
      {/* Library Grid */}
      <div className="flex items-center flex-wrap gap-4">
        {LIBRARYSTAGES.map((stage) => (
          <div
            key={stage.id}
            onClick={() => {
              setActiveStage(stage.id);
            }}
          >
            {/* Card - Unified Click */}
            <div
              className={`relative p-4 rounded-3xl border-2 transition-all min-w-[360px] flex flex-col gap-2 cursor-pointer ${
                activeStage === stage.id
                  ? "border-primary shadow-lg bg-white"
                  : "border-border bg-white group-hover:border-text-primary/10"
              }`}
            >
              <div className="flex justify-between items-center">
                <p className="font-bold text-text-secondary text-base leading-6">
                  {stage.title}
                </p>
                <div className="flex items-center gap-1 text-xs">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      stage.status === "Ready" ? "bg-success" : "bg-warning"
                    }`}
                  ></span>
                  {stage.status}
                </div>
              </div>

              <div>
                <p className="text-xs w-fit text-text-secondary mt-1 bg-hover-light py-0.5 px-1 rounded-sm">
                  {stage.description}
                </p>
              </div>

              <div className="flex justify-between">
                <div className="text-text-secondary text-sm">
                  <p className=" font-bold ">Owner</p>
                  <p>{stage.owner}</p>
                </div>
                <div className="text-text-secondary text-sm">
                  <p className="font-bold">Last Run</p>
                  <p>{stage.lastRun}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-border mt-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedLibraryStage(stage);
                  }}
                  className="text-text-secondary text-sm flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <ViewIcon className="w-4 h-4 text-primary-hover" />
                  {stage.open}
                </button>

                <div className="">
                  {stage.description === "Prebuilt" ? (
                    <button className="text-text-secondary text-sm flex items-center gap-1 hover:opacity-80 transition-opacity">
                      <CloneIcon className="w-4 h-4 text-primary-hover" />
                      Duplicate
                    </button>
                  ) : stage.description === "Custom (ML)" ? (
                    <button className="text-text-secondary text-sm flex items-center gap-1 hover:opacity-80 transition-opacity">
                      <DisableIcon className="w-4 h-4 text-primary-hover" />
                      Stop
                    </button>
                  ) : (
                    <button className="text-text-secondary text-sm flex items-center gap-1 hover:opacity-80 transition-opacity">
                      <EditIcon className="w-4 h-4 text-primary-hover" />
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*Library Grid */}

      {/* Drawer - Opens when a stage is selected */}
      <Drawer
        isOpen={!!selectedLibraryStage}
        onClose={() => setSelectedLibraryStage(null)}
        width="800px"
      >
        {selectedLibraryStage && (
          <>
            <Drawer.Header title="Brute Force Login Detection" />

            <Drawer.Body>
              <div className="flex flex-col gap-6">
                {/* ===================================== */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5 text-sm ">
                    <p className="text-base font-bold">Status:</p>
                    <p className="bg-success rounded-lg text-default px-2 py-1">
                      Running
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm ">
                    <p className="text-base font-bold"> Last Saved:</p>
                    <p className="text-sm">Sep 23, 2025, 09:42 AM</p>
                  </div>

                  <div>
                    <p className="text-base text-text-primary pb-2">Actions</p>
                    <div className="flex items-center gap-5">
                      <button className="flex items-center gap-1.5">
                        <ZapIcon className="text-success" />
                        Run All
                      </button>
                      <button className="flex items-center gap-1.5">
                        <DisableIcon className="text-error" />
                        Stop Kernel
                      </button>
                      <button className="flex items-center gap-1.5">
                        <ExportIcon className="text-primary-hover" />
                        Export
                      </button>
                      <button className="flex items-center gap-1.5">
                        <Share1Icon />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                {/* ===================================== */}

                {/* ========Markdown Cell (Intro):============== */}
                <div>
                  <p className="mb-3 text-base text-text-primary">
                    Markdown Cell (Intro):
                  </p>
                  <div className="bg-default border border-border p-4 rounded-xl text-sm font-fira-code tracking-[0.5%] leading-4 ">
                    <span className="text-[#2489FF]">
                      # Suspicious PowerShell Usage
                    </span>
                    <p className="text-primary flex flex-col gap-1">
                      This notebook investigates encoded PowerShell commands
                      often linked to privilege escalation or lateral movement.
                    </p>
                  </div>
                </div>
                {/* ==========Markdown Cell (Intro):============ */}
                {/* ========Code Cell============== */}
                <div>
                  <p className="mb-3 text-base text-text-primary">Code Cell</p>
                  <div className="bg-default border border-border p-4 rounded-xl text-sm font-fira-code tracking-[0.5%] leading-4 ">
                    <span className="text-[#2489FF]">
                      # Query authentication logs for encoded PowerShell
                      commands
                    </span>
                    <p className="text-primary flex flex-col gap-1">
                      <span>query = """</span>
                      <span>Event</span>
                      <span>| where EventID == 4104</span>
                      <span>| where CommandLine contains "EncodedCommand"</span>
                      <span>
                        | summarize count() by Account, Computer, TimeGenerated
                      </span>
                      <span> """ </span>
                      <span>df = log_analytics.run(query)</span>
                      <span> df.head(10)</span>
                    </p>
                  </div>
                </div>
                {/* ==========Code Cell============ */}
                {/* ===========Code Cell (Visualization)=========== */}
                <div>
                  <p className="mb-3 text-base text-text-primary">
                    Code Cell (Visualization)
                  </p>
                  <div className="bg-default border border-border p-4 rounded-xl text-sm font-fira-code tracking-[0.5%] leading-4 ">
                    <span className="text-primary">
                      import matplotlib.pyplot as plt
                    </span>
                    <p>
                      df.plot(kind="bar", x="Account", y="Count", title="Encoded
                      PowerShell Usage") plt.show()
                    </p>
                  </div>
                </div>
                {/* ===========Code Cell (Visualization)=========== */}
                {/* =====AI Insight======== */}
                <div className="text-text-primary text-base">
                  <p className="mb-2">AI Insight </p>
                  <li className="ml-8">
                    High-confidence detection of malicious PowerShell activity.
                    Recommended actions: lock svc-admin, isolate FIN-SERVER-01,
                    review lateral movement attempts.
                  </li>
                </div>
                {/* ======AI Insight======= */}
              </div>
            </Drawer.Body>

            <Drawer.Footer className="justify-start">
              <div className="flex items-center gap-6">
                <Button paddingX="px-4" paddingY="py-2" height="min-h-[0px]">
                  Apply Playbook
                </Button>
                <Button
                  paddingX="px-4"
                  paddingY="py-2"
                  height="min-h-[0px]"
                  variant="white"
                >
                  Save as Detection Rule
                </Button>
              </div>
            </Drawer.Footer>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default LibraryTabBody;
