import React, { useState } from "react";
import Button from "../../props/Button";
import { ImportIcon, PlusIcon } from "../../../utils/icons";
import AddNoteBookModal from "../notebooks-modal/AddNoteBookModal";

const NotebookHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 bg-default py-[27px] px-[30px] rounded-[18px] relative">
      <div className="text-text-primary text-base"> Notebooks </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 max-w-[596px]">
          <p className="text-text-primary text-xl ">Notebooks </p>
          <p className="text-text-secondary text-xs">
            Run advanced security experiments, hunt for novel threats, and
            enrich detections using interactive notebooks. Use prebuilt
            templates or generate new ones with AI.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Button
              paddingX="px-4"
              paddingY="py-2"
              height="min-h-[0px]"
              onClick={() => setIsOpen(true)}
              icon={<PlusIcon className="text-white" />}
            >
              New Notebook
            </Button>
          </div>

          <div>
            <Button
              paddingX="px-4"
              paddingY="py-2"
              height="min-h-[0px]"
              variant="white"
              icon={<ImportIcon />}
            >
              Import
            </Button>
          </div>
        </div>
      </div>

      {/* ================== */}
      <div>
        <AddNoteBookModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default NotebookHeader;
