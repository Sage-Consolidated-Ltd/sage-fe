import React, { useState } from "react";
import Input from "../../props/Input";
import TextArea from "../../props/TextArea";
import Radio from "../../props/Radio";
import {
  ChevronDown1Icon,
  MarkIcon,
  SquaredInfoIcon,
} from "../../../utils/icons";
import Button from "../../props/Button";
import Checkbox from "../../props/Checkbox";
import Toggle from "../../props/Toggle";
import { Select } from "../../props/Select";

const BlankNotebook = () => {
  const [activeStage, setActiveStage] = useState("01");

  const ResourceTier = [{ label: "Standard (small)", value: "resourceTier" }];

  const AccessControl = [
    { label: "Private (only me)", value: "accessControl" },
  ];

  const SelectRunTime = [
    {
      id: "01",
      title: "🐍 Python 3 (Default)",
      description: "Ideal for data analysis, ML models, and API integrations.”",
    },
    {
      id: "02",
      title: "🔍 KQL Mode",
      description: "Use Kusto-style queries for quick log exploration.",
    },
    {
      id: "03",
      title: "☁️ PySpark / Distributed Mode",
      description:
        "For large-scale threat hunting and enrichment on big datasets.",
    },
  ];
  return (
    <div>
      {/* ===================== */}
      <div className="flex gap-4">
        <Input
          name="name"
          type="text"
          placeholder="Enter a descriptive name (e.g., Rare DNS Beaconing Hunt)"
          label="Notebook Name"
        />

        <TextArea
          name="description"
          label="Description (Optional)"
          placeholder="Add a short note about what this notebook will explore or automate."
          rows={3}
          resize="none"
        />
      </div>
      {/* ===================== */}

      {/* border */}
      <div className="border border-border my-5"></div>
      {/* border */}

      {/* ===========select run time enironment============= */}
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-text-secondary text-sm font-bold">
            Select Runtime Environment
          </p>
        </div>

        {/* template grid */}
        <div className="flex items-center flex-wrap gap-4">
          {SelectRunTime.map((stage) => (
            <div key={stage.id} onClick={() => setActiveStage(stage.id)}>
              {/* Card - Unified Click */}
              <div
                className={`relative p-4 rounded-xl border-2 transition-all max-w-[400px] flex flex-col gap-2 ${
                  activeStage === stage.id
                    ? "border-primary shadow-lg bg-white"
                    : "border-border bg-white group-hover:border-text-primary/10"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-0.5">
                    <div className="pointer-events-none">
                      <Radio
                        id={stage.id}
                        name=""
                        checked={activeStage === stage.id}
                        onChange={() => setActiveStage(stage.id)}
                        label=""
                      />
                    </div>
                    <p
                      className={`font-bold text-base leading-6 ${activeStage === stage.id ? "text-primary" : " text-text-secondary"}`}
                    >
                      {stage.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="w-2 h-2 rounded-full  bg-success"></span>
                  </div>
                </div>

                <div>
                  <p className="text-xs w-fit text-text-secondary mt-1 py-0.5 px-1 rounded-sm">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*template grid*/}
        <div className="flex items-center gap-2 text-warning mt-1 ">
          <SquaredInfoIcon />
          <p className=" text-xs">
            “Choose an environment depending on your workflow. You can switch
            later if needed.
          </p>
        </div>
      </div>
      {/* ===========select run time enironment============= */}

      {/* border */}
      <div className="border border-border my-5"></div>
      {/* border */}

      {/* =============Data Sources / Advanced settings========================= */}

      <div className="flex ">
        {/* =====Data Sources======= */}
        <div className="mr-40">
          <div className="gap-4 flex flex-col">
            <p className="text-text-primary pb-1.5 text-sm font-bold">
              Data Sources
            </p>
            <Checkbox label="Security Logs" />
            <Checkbox label="Threat Intel Feeds" />
            <Checkbox label="Endpoint Telemetry" />
            <Checkbox label="Custom Upload (CSV / JSON)" />

            <p className="text-selection text-base">Manage Data Sources →</p>
          </div>
        </div>
        {/* =====Data Sources======= */}

        {/* border */}
        <div className="border border-l border-border"></div>
        {/* border */}

        {/* =======Advanced Settings===== */}
        <div className="ml-6">
          <div className="flex items-center gap-5">
            <p className="text-text-secondary text-sm font-bold">
              Advanced Settings (Optional)
            </p>
            <ChevronDown1Icon />
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <Input
              name="name"
              type="text"
              placeholder="30 min"
              label="Kernel Timeout: "
            />

            <div className="flex items-center scale-90 origin-left">
              <Toggle label="Auto-Save:" />
            </div>

            <Select
              label="Resource Tier:"
              options={ResourceTier}
              placeholder="Standard (small)"
              iconVariant="down1"
            />

            <Select
              label="Access Control:"
              options={AccessControl}
              placeholder="Private (only me)"
              iconVariant="down1"
            />
          </div>
        </div>
        {/* =======Advanced Settings===== */}
      </div>
      {/* =============Data Sources / Advanced settings========================= */}

      {/* ===============footer button=========== */}
      <div className="flex items-center gap-4 mt-8">
        <div>
          <Button
            paddingX="px-4"
            paddingY="py-2"
            height="min-h-[0px]"
            icon={<MarkIcon className="text-white" />}
          >
            Create Notebook
          </Button>
        </div>
        <div>
          <Button
            paddingX="px-4"
            paddingY="py-2"
            height="min-h-[0px]"
            variant="white"
            icon={<MarkIcon />}
          >
            Save as Template
          </Button>
        </div>
      </div>
      {/* ===============footer button=========== */}
    </div>
  );
};

export default BlankNotebook;
