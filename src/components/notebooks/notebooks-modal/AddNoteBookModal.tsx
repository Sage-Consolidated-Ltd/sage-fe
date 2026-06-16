import React, { useState } from "react";
import Modal from "../../props/Modal";
import { AnimatePresence, motion, type Variants } from "motion/react";
import BlankNotebook from "./BlankNotebook";
import PrebuiltTemplate from "./PrebuiltTemplate";
import { ResetIcon } from "../../../utils/icons";

interface AddNoteBookModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const AddNoteBookModal = ({ isOpen, setIsOpen }: AddNoteBookModalProps) => {
  const [activeTab, setActiveTab] = useState("Blank NoteBook");

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
    return (
      <motion.div
        key={activeTab}
        variants={tabVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {activeTab === "Blank NoteBook" && <BlankNotebook />}
        {activeTab === "Prebuilt Templates (AI)" && <PrebuiltTemplate />}
      </motion.div>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="1100px">
      <Modal.Header
        title="New Notebook"
        children="Start from a blank Jupyter environment for experiments, threat research, or modeling."
      />
      <Modal.Body>
        <section>
          <div className="flex text-sm text-text-primary relative justify-between items-center">
            <div className="flex text-sm text-text-primary relative">
              {["Blank NoteBook", "Prebuilt Templates (AI)"].map((tab) => (
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
            </div>

            {/* Re Generate button - only shows on Prebuilt Templates tab */}
            {activeTab === "Prebuilt Templates (AI)" && (
              <button className=" text-sm text-text-primary cursor-pointer flex items-center gap-1">
                <ResetIcon className="text-warning" />
                Re Generate (AI)
              </button>
            )}
          </div>
          <div
            className={`border border-input-border bg-default p-[18px] rounded-tr-xl rounded-b-xl overflow-hidden ${activeTab === "Blank NoteBook" ? "" : "rounded-tl-xl"}`}
          >
            <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default AddNoteBookModal;
