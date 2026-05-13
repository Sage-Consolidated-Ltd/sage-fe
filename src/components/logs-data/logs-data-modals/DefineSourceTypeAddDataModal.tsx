import React from "react";
import Modal from "../../props/Modal";
import Button from "../../props/Button";
import Input from "../../props/Input";
import TextArea from "../../props/TextArea";
import { Select } from "../../props/Select";

interface DefineSourceTypeAddDataModal {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onNext?: () => void;
}

const Category = [{ label: "Custom", value: "category" }];
const AppContext = [{ label: "Search & Reporting", value: "appContext" }];

const DefineSourceTypeAddDataModal = ({
  isOpen,
  setIsOpen,
  onNext,
}: DefineSourceTypeAddDataModal) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="900px">
      <Modal.Header
        title="Define Source Type"
        children="Help us understand your data format for better parsing and search."
      />

      <Modal.Body>
        <div className="flex flex-col gap-y-4.5">
          <Input
            name="name"
            type="text"
            placeholder="e.g. auth_logs"
            label="Name"
          />

          <TextArea
            name="description"
            label="Description (optional)"
            placeholder="Short description of this data source"
            rows={8}
            resize="none"
          />

          <Select
            label="Category"
            options={Category}
            placeholder="Custom"
            iconVariant="down1"
          />
          <Select
            label="App / Context"
            options={AppContext}
            placeholder="Search & Reporting"
            iconVariant="down1"
          />
          {/* border */}
          <div className="border border-border"></div>
          {/* border */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <section className="mt-10">
          <div className="flex items-center gap-4 pt-4">
            <div>
              <Button paddingX="py-3" paddingY="px-6" onClick={onNext}>
                Save & Continue
              </Button>
            </div>
          </div>
        </section>
      </Modal.Footer>
    </Modal>
  );
};

export default DefineSourceTypeAddDataModal;
