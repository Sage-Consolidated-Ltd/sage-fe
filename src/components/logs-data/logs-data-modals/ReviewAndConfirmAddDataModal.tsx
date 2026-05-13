import React from "react";
import Modal from "../../props/Modal";
import Button from "../../props/Button";

interface ReviewAndConfirmAddDataModal {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onNext?: () => void;
  onBack?: () => void;
}

const ReviewAndConfirmAddDataModal = ({
  isOpen,
  setIsOpen,
  onNext,
  onBack,
}: ReviewAndConfirmAddDataModal) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="850px">
      <Modal.Header
        title="Review & Confirm"
        children=" Verify your configuration before ingesting data."
      />

      <Modal.Body>
        <div>
          <div className="flex flex-col gap-3 text-base text-text-secondary">
            <p className="flex justify-between">
              File Name: <span className="font-bold">auth_logs</span>
            </p>
            <p className="flex justify-between">
              Source Type: <span className="font-bold">Search & Reporting</span>
            </p>
            <p className="flex justify-between">
              Host: <span className="font-bold">Lab PC</span>
            </p>
            <p className="flex justify-between">
              Index: <span className="font-bold">Default</span>
            </p>
          </div>
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
                Save
              </Button>
            </div>
          </div>
        </section>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewAndConfirmAddDataModal;
