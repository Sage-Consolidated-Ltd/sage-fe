import React from "react";
import Modal from "../../../props/Modal";
import {
  CircleFilledCheckIcon,
  IncidentIcon,
  InfoFillIcon,
  MarkIcon,
  RefreshIcon,
  ReOrderIcon,
  ResetIcon,
} from "../../../../utils/icons";
import Loader from "../../../../shared/Loader";
import Button from "../../../props/Button";
import { getImageSrc } from "../../../../utils/imageUtils";

interface RecommendationSuccessModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const RecommendationSuccessModal = ({
  isOpen,
  setIsOpen,
}: RecommendationSuccessModalProps) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="800px">
        <Modal.Header title="." />
        <Modal.Body>
          <div className="flex flex-col gap-8 items-center justify-center">
            <div>
              <img src={getImageSrc("Shield.png")} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 m-auto w-[454px]">
              <p className="text-2xl text-text-primary text-center">
                Recommendations Applied Successfully
              </p>
              <p className="text-center text-text-secondary text-base">
                The recommended actions were executed. A summary of applied
                changes is listed below.
              </p>
            </div>

            <div className="flex flex-col gap-1 text-sm text-text-primary">
              <p className="flex items-center gap-1.5 p-4 rounded-sm bg-default">
                <span>
                  <CircleFilledCheckIcon className="text-success" />{" "}
                </span>
                IP 185.92.11.3 blocked at firewall
              </p>
              <p className="flex items-center gap-1.5 p-4 rounded-sm bg-default">
                <span>
                  <CircleFilledCheckIcon className="text-success" />{" "}
                </span>
                Account svc-admin locked for 30 mins
              </p>
              <p className="flex items-center gap-1.5 p-4 rounded-sm bg-default">
                <span>
                  <CircleFilledCheckIcon className="text-success" />{" "}
                </span>
                Notification sent to jdoe@corp.local regarding suspicious
                activity
              </p>
            </div>

            <div className="flex items-center justify-center flex-col gap-5 w-[535px]">
              <Loader size="62px" />
              <p className="text-base text-text-secondary text-center">
                Changes are logged in the system audit trail and linked to
                Incident <span className="underline">#INC-1042</span> for
                tracking.”
              </p>
            </div>

            <div className="flex items-cente justify-centerr gap-6">
              <Button
                paddingX="px-4"
                paddingY="py-2"
                height="min-h-[0px]"
                icon={<IncidentIcon className="text-white" />}
              >
                View Incident
              </Button>
              <Button
                paddingX="px-4"
                paddingY="py-2"
                height="min-h-[0px]"
                variant="white"
                icon={<ResetIcon />}
              >
                Undo Last Action
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RecommendationSuccessModal;
