import React, { useState, useRef, useEffect } from "react";
import Modal from "../../props/Modal";
import {
  UploadIcon,
  MonitorIcon,
  ForwardIcon,
  SquaredInfoIcon,
} from "../../../utils/icons";
import { AnimatePresence } from "motion/react";
import AddDataSuccessStep from "../../auths/onboarding/steps/AddDataSuccessStep";

interface AddDataModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onNext?: () => void;
}

const IngestionAddDataModal = ({
  isOpen,
  setIsOpen,
  onNext,
}: AddDataModalProps) => {
  const [activeTab, setActiveTab] = useState("File Upload");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [step, setStep] = useState<"file" | "success">("file");

  useEffect(() => {
    if (!isOpen) {
      setActiveTab("File Upload");
      setSelectedFile(null);
      setIsDragging(false);
      setStep("file");
    }
  }, [isOpen]);

  // Create a ref for the hidden file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const tabs = [
    {
      title: "File Upload",
      icon: UploadIcon,
      desc: "Import files directly from your device.",
    },
    {
      title: "Monitor",
      icon: MonitorIcon,
      desc: "Collect data from systems and endpoints in real time.",
    },
    {
      title: "Forward",
      icon: ForwardIcon,
      desc: "Stream data from external tools and services.",
    },
  ];

  // --- Logic Handlers ---

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      console.log("File selected:", e.target.files[0].name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    if (onNext) {
      setTimeout(() => {
        setIsOpen(false);
        onNext();
      }, 2000); // Show success for 2 seconds then proceed
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="1100px">
      <Modal.Header title="Add Source" />

      <div className="px-6 py-2">
        <p className="text-text-secondary text-sm max-w-3xl leading-relaxed">
          Upload or connect data sources to start monitoring and searching logs
          by bringing in data from files, systems, or integration to start
          monitoring and analysis.
        </p>
      </div>

      <Modal.Body>
        <div className="flex flex-col gap-4 p-2">
          {/* Top Tab Selection */}
          <div className="grid grid-cols-3 gap-6">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.title;
              return (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(tab.title)}
                  className={`flex flex-col items-center text-center gap-4 py-8 px-6 rounded-[20px] transition-all duration-300 border-2 ${
                    isActive
                      ? "border-primary-hover bg-surface shadow-card-light scale-[1.02]"
                      : "border-transparent shadow-card bg-surface cursor-pointer hover:bg-hover-light"
                  }`}
                >
                  <span
                    className={`text-xl text-text-secondary ${isActive ? "font-bold" : "font-normal"}`}
                  >
                    {tab.title}
                  </span>
                  <tab.icon className="text-primary-hover" />
                  <p className="text-sm text-text-primary px-4">{tab.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Conditional Content Area */}
          <AnimatePresence mode="wait">
            {step === "file" ? (
              <div className="bg-surface rounded-3xl shadow-card p-12 flex flex-col items-center justify-center min-h-[400px]">
                {activeTab === "File Upload" && (
                  <div className="flex flex-col items-center w-full animate-in fade-in zoom-in duration-300">
                    <h3 className="text-xl font-normal text-text-secondary mb-3">
                      {activeTab}
                    </h3>

                    {/* Hidden Native Input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".log,.txt,.csv,.json" // Add the extensions you need
                    />

                    {/* Dropzone Area */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileInput}
                      className={`w-full max-w-xl border-2 border-dashed rounded-[18px] p-10 flex flex-col items-center justify-center transition-all cursor-pointer ${
                        isDragging
                          ? "border-primary-hover bg-surface scale-[1.01]"
                          : "border-input-border bg-surface hover:border-warning"
                      }`}
                    >
                      <UploadIcon
                        className={`mb-2 w-8 h-8 transition-transform ${isDragging ? "scale-125 text-primary-hover" : "text-primary-hover"}`}
                      />

                      {selectedFile ? (
                        <div className="text-center">
                          <p className="text-orange-600 font-bold text-lg mb-1">
                            File Ready!
                          </p>
                          <p className="text-text-primary text-sm italic">
                            {selectedFile.name}
                          </p>
                        </div>
                      ) : (
                        <div className="text-text-primary text-sm flex flex-col items-center ">
                          <p>Drag and drop your file here</p>
                          <p>or</p>
                          <p>Select file from device</p>
                        </div>
                      )}
                    </div>

                    {/* Info and Action */}
                    <div className="flex items-center justify-end gap-2 text-warning mt-4">
                      <SquaredInfoIcon />
                      <p className="font-fira-code text-xs">
                        Max file size: 500 MB
                      </p>
                    </div>

                    <button
                      onClick={handleUploadSubmit}
                      disabled={!selectedFile}
                      type="submit"
                      className={`mt-10 px-10 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all uppercase shadow-card w-[270px] ${
                        selectedFile
                          ? "bg-surface text-text-text-secondary cursor-pointer border border-text-primary"
                          : "bg-surface border border-text-primary text-text-secondary cursor-not-allowed opacity-50 "
                      }`}
                    >
                      <UploadIcon className="text-text-primary" />
                      Upload
                    </button>
                  </div>
                )}

                {activeTab !== "File Upload" && (
                  <div className="text-text-secondary italic">
                    {activeTab} content integration coming soon...
                  </div>
                )}
              </div>
            ) : (
              <AddDataSuccessStep />
            )}
          </AnimatePresence>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default IngestionAddDataModal;
