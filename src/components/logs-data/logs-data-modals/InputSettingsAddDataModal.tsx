import React, { useState } from "react";
import Modal from "../../props/Modal";
import Button from "../../props/Button";
import { Select } from "../../props/Select";
import { ChevronDown1Icon } from "../../../utils/icons";
import Radio from "../../props/Radio";
import Input from "../../props/Input";

interface InputSettingsAddDataModal {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onNext?: () => void;
  onBack?: () => void;
}

const InputSettingsAddDataModal = ({
  isOpen,
  setIsOpen,
  onNext,
  onBack,
}: InputSettingsAddDataModal) => {
  const [activeStage, setActiveStage] = useState("01");
  const Default = [{ label: "Default", value: "" }];

  const SelectType = [
    {
      id: "01",
      title: "Auto-detect (default)",
    },
    {
      id: "02",
      title: "Custom value",
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="990px">
      <Modal.Header
        title="Input Settings"
        children="Configure how this data will be indexed and identified."
      />

      <Modal.Body>
        <div>
          {/* =================== */}
          <div className="flex justify-between">
            <div className="text-text-secondary text-base">
              <p className="font-bold">Host</p>
              <p>Identifies the source machine for this data.</p>
            </div>
            {/* template grid */}
            <div className="flex flex-col gap-4">
              {SelectType.map((stage) => (
                <div key={stage.id} onClick={() => setActiveStage(stage.id)}>
                  {/* Card - Unified Click */}
                  <div
                    className={`relative p-4 rounded-xl border-2 transition-all max-w-[400px] flex flex-col gap-2 ${
                      activeStage === stage.id
                        ? "border-primary shadow-lg bg-white"
                        : "border-border bg-white group-hover:border-text-primary/10"
                    }`}
                  >
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
                        className={`font-normal text-base leading-6 ${activeStage === stage.id ? "text-primary" : " text-text-secondary"}`}
                      >
                        {stage.title}
                      </p>
                    </div>

                    <div className="">
                      {stage.title === "Auto-detect (default)" ? (
                        <div></div>
                      ) : (
                        <div className="min-w-[350px]">
                          <Input
                            name="name"
                            type="text"
                            placeholder="e.g. auth_logs"
                            label=""
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/*template grid*/}
          </div>
          {/* =================== */}

          {/* border */}
          <div className="border border-border my-6"></div>
          {/* border */}

          {/* =================== */}
          <div className="flex justify-between">
            <div className="text-text-secondary text-base">
              <p className="font-bold">Index</p>
              <p>Choose where this data will be stored.</p>
            </div>
            <div className="min-w-[380px]">
              <Select
                label=""
                options={Default}
                placeholder="Default"
                iconVariant="down1"
              />
              <p className="text-primary text-base mt-5">Create new index</p>
            </div>
          </div>
          {/* =================== */}

          {/* border */}
          <div className="border border-border my-6"></div>
          {/* border */}

          {/* =================== */}
          <div className="">
            <div className="flex items-center gap-5">
              <p className="text-text-secondary text-sm font-bold">
                Advanced Settings (Optional)
              </p>
              <ChevronDown1Icon />
            </div>
          </div>
          {/* =================== */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <section className="mt-10">
          <div className="flex items-center gap-4 pt-4">
            <div>
              <Button
                paddingX="py-3"
                paddingY="px-6"
                variant="white"
                onClick={onBack}
              >
                Back
              </Button>
            </div>
            <div>
              <Button paddingX="py-3" paddingY="px-6" onClick={onNext}>
                Review & Confirm
              </Button>
            </div>
          </div>
        </section>
      </Modal.Footer>
    </Modal>
  );
};

export default InputSettingsAddDataModal;
