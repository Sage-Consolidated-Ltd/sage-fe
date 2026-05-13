import React, { useState } from "react";
import Button from "../../../props/Button";
import { ImportIcon, Plus1Icon, PlusIcon } from "../../../../utils/icons";
import IngestionAddDataModal from "../../logs-data-modals/IngestionAddDataModal";
import DefineSourceTypeAddDataModal from "../../logs-data-modals/DefineSourceTypeAddDataModal";
import InputSettingsAddDataModal from "../../logs-data-modals/InputSettingsAddDataModal";
import ReviewAndConfirmAddDataModal from "../../logs-data-modals/ReviewAndConfirmAddDataModal";
import SucessAddDataModal from "../../logs-data-modals/SucessAddDataModal";
import { useNavigate } from "react-router-dom";

const IngestionHealthHeader = () => {
  const [isIngestionModalOpen, setIsIngestionModalOpen] = useState(false);
  const [isDefineSourceModalOpen, setIsDefineSourceModalOpen] = useState(false);
  const [isInputSettingsModalOpen, setIsInputSettingsModalOpen] =
    useState(false);
  const [isReviewConfirmModalOpen, setIsReviewConfirmModalOpen] =
    useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  const dataQuality = () => {
    navigate("/logs-&-data/data-quality");
  };
  return (
    <div className="flex flex-col gap-4 bg-default py-[27px] px-[30px] rounded-[18px] relative">
      <div className="text-text-muted text-base leading-6">
        Logs & Data /
        <span className="text-text-primary text-base"> Ingestion </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 max-w-[596px]">
          <p className="text-text-primary text-xl ">Ingestion </p>
          <p className="text-text-secondary text-xs">
            Monitor real-time ingestion status across all connected data
            sources. Track volume, delays, errors, and source activity to ensure
            complete coverage.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <Button
              paddingX="px-4"
              paddingY="py-2"
              height="min-h-[0px]"
              onClick={() => setIsIngestionModalOpen(true)}
              icon={<PlusIcon className="text-white" />}
            >
              Add Data
            </Button>
          </div>
          <div>
            <Button
              paddingX="px-4"
              paddingY="py-2"
              height="min-h-[0px]"
              variant="white"
              icon={<Plus1Icon />}
              onClick={dataQuality}
            >
              Data Quality
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
              Download Report
            </Button>
          </div>
        </div>
      </div>

      {/* ================= */}
      <div>
        <IngestionAddDataModal
          isOpen={isIngestionModalOpen}
          setIsOpen={setIsIngestionModalOpen}
          onNext={() => {
            setIsIngestionModalOpen(false);
            setIsDefineSourceModalOpen(true);
          }}
        />
        <DefineSourceTypeAddDataModal
          isOpen={isDefineSourceModalOpen}
          setIsOpen={setIsDefineSourceModalOpen}
          onNext={() => {
            setIsDefineSourceModalOpen(false);
            setIsInputSettingsModalOpen(true);
          }}
        />
        <InputSettingsAddDataModal
          isOpen={isInputSettingsModalOpen}
          setIsOpen={setIsInputSettingsModalOpen}
          onNext={() => {
            setIsInputSettingsModalOpen(false);
            setIsReviewConfirmModalOpen(true);
          }}
          onBack={() => {
            setIsInputSettingsModalOpen(false);
            setIsDefineSourceModalOpen(true);
          }}
        />
        <ReviewAndConfirmAddDataModal
          isOpen={isReviewConfirmModalOpen}
          setIsOpen={setIsReviewConfirmModalOpen}
          onNext={() => {
            setIsReviewConfirmModalOpen(false);
            setIsSuccessModalOpen(true);
          }}
          onBack={() => {
            setIsReviewConfirmModalOpen(false);
            setIsInputSettingsModalOpen(true);
          }}
        />
        <SucessAddDataModal
          isOpen={isSuccessModalOpen}
          setIsOpen={setIsSuccessModalOpen}
        />
      </div>
    </div>
  );
};

export default IngestionHealthHeader;
