import React from "react";
import Modal from "../../props/Modal";
import Button from "../../props/Button";

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
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="1100px">
      <Modal.Header
        title="Input Settings"
        children="Configure how this data will be indexed and identified."
      />

      <Modal.Body>
        <div></div>
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
