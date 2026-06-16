import React, { useEffect } from "react";
import Modal from "../../props/Modal";
import Button from "../../props/Button";
import { useNavigate } from "react-router-dom";
import { getImageSrc } from "../../../utils/imageUtils";

interface SucessAddDataModal {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onNext?: () => void;
}

const SucessAddDataModal = ({ isOpen, setIsOpen }: SucessAddDataModal) => {
  const navigate = useNavigate();

  const startSearching = () => {
    navigate("/hunting");
  };
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="1000px">
      <Modal.Header title="." />

      <Modal.Body>
        <div className="w-full flex flex-col items-center justify-center gap-y-2">
          <div>
            <img src={getImageSrc("tick.png")} alt="" />
          </div>
          <p className="text-2xl text-text-primary">Data added successfully</p>
          <p className="text-base text-text-secondary">
            Your data is now available for search and monitoring.
          </p>

          <section className="mt-10">
            <div className="flex items-center gap-4 pt-4">
              <div>
                <Button
                  onClick={startSearching}
                  paddingX="py-3"
                  paddingY="px-6"
                >
                  Start Searching
                </Button>
              </div>
              <Button paddingX="py-3" paddingY="px-6" variant="white">
                Extract Fields
              </Button>
              <Button paddingX="py-3" paddingY="px-6" variant="white">
                Add More Data
              </Button>
            </div>
          </section>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SucessAddDataModal;
