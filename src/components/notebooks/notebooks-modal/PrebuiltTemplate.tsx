import React, { useState } from "react";
import ContainmentOptionCard from "../../props/ContainmentOptionCard";
import Toggle from "../../props/Toggle";
import { ForwardIcon, ViewIcon } from "../../../utils/icons";
import Radio from "../../props/Radio";
import Button from "../../props/Button";

const PrebuiltTemplate = () => {
  const [activeStage, setActiveStage] = useState("01");
  const PrebuiltTemplates = [
    {
      id: "01",
      title: "Brute Force Login Detection",
      description:
        "Analyze failed logins across accounts and geographies. Visualize spikes and flag suspicious attempts.",
      status: "Ready",
      type: "default",
      open: "Use Template",
    },
    {
      id: "02",
      title: "File Hash Enrichment",
      description:
        "CLook up suspicious hashes in VirusTotal, MISP, or internal feeds and enrich alerts with reputation scores.",
      status: "AI Generated",
      type: "default",
      open: "Use Template",
    },
    {
      id: "03",
      title: "Data Drift Monitoring",
      description:
        "Detect schema or distribution changes in your ingested data. Prevent broken parsers and missed detections.",
      status: "AI Generated",
      type: "active",
      open: "Use Template",
    },
    {
      id: "04",
      title: "Phishing URL Enrichment",
      description:
        "Look up suspicious hashes in VirusTotal, MISP, or internal feeds and enrich alerts with reputation scores.",
      status: "Ready",
      type: "default",
      open: "Use Template",
    },
    {
      id: "05",
      title: "Incident-Triggered Notebook",
      description:
        "Look up suspicious hashes in VirusTotal, MISP, or internal feeds and enrich alerts with reputation scores.",
      status: "Ready",
      type: "default",
      open: "Use Template",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-text-secondary text-sm font-bold">
            Choose a Prebuilt Template
          </p>
        </div>

        <div className="border border-border"></div>

        {/* template grid */}
        <div className="flex items-center flex-wrap gap-4">
          {PrebuiltTemplates.map((stage) => (
            <div key={stage.id} onClick={() => setActiveStage(stage.id)}>
              {/* Card - Unified Click */}
              <div
                className={`relative p-4 rounded-3xl border-2 transition-all max-w-[400px] flex flex-col gap-2 ${
                  activeStage === stage.id
                    ? "border-primary shadow-lg bg-white"
                    : "border-border bg-white group-hover:border-text-primary/10"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-0.5">
                    <div className="pointer-events-none">
                      {/* pointer-events-none because the parent div handles the click for the whole card */}
                      <Radio
                        id={stage.id}
                        name=""
                        checked={activeStage === stage.id}
                        onChange={() => setActiveStage(stage.id)}
                        label=""
                      />
                    </div>
                    <p className="font-bold text-text-secondary text-base leading-6">
                      {stage.title}
                    </p>
                  </div>
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
                  <p className="text-xs w-fit text-text-secondary mt-1 py-0.5 px-1 rounded-sm">
                    {stage.description}
                  </p>
                </div>

                <div className="border-t border-border mt-3 pt-2">
                  <button className="text-text-secondary text-sm flex items-center gap-1 hover:opacity-80 transition-opacity">
                    <ViewIcon className="w-4 h-4 text-primary-hover" />
                    {stage.open}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*template grid*/}
        <div className="mt-20">
          <Button paddingX="px-4" paddingY="py-2" height="min-h-[0px]">
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrebuiltTemplate;
