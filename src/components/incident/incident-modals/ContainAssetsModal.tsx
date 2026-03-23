import { RoundXIcon, ShieldIcon } from "../../../utils/icons";
import { SeverityIndicator } from "../../../utils/incident";
import Button from "../../props/Button";
import { InfoRow, InfoSection } from "../../props/InfoSection";
import Modal from "../../props/Modal";

interface ContainAssetsModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
const ContainAssetsModal = ({ isOpen, setIsOpen }: ContainAssetsModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="990px">
        <Modal.Header title="Contain Asset – finance-vm" />

        <Modal.Body>
          <>
            {/* Asset Overview Section */}
            <InfoSection title="Asset Overview">
              <InfoRow label="Asset Name" value="finance-vm" />
            </InfoSection>

            {/* Incident Context Section */}
            <InfoSection title="Incident Context">
              <InfoRow label="Triggered By" value="incidentData.triggeredBy" />

              <InfoRow
                label="Current Status"
                value={
                  <div className="bg-success py-1 px-2 text-white text-xs">
                    Active
                  </div>
                }
              />
              <InfoRow
                label="Severity"
                value={<SeverityIndicator level={2} />}
              />
            </InfoSection>
          </>
        </Modal.Body>

        <Modal.Footer>
          <div>
            <Button icon={<ShieldIcon className="w-6 h-6 text-white" />}>
              Save Changes
            </Button>
          </div>
          <div>
            <Button
              icon={<RoundXIcon className="w-6 h-6 text-text-secondary" />}
              paddingX="px-6"
              paddingY="py-3"
              onClick={() => setIsOpen(false)}
              variant="white"
            >
              Cancel
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContainAssetsModal;
