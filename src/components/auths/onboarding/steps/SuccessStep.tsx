import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { formContentVariants } from "../../../../utils/variants";
import { getImageSrc } from "../../../../utils/imageUtils";
import Loader from "../../../../shared/Loader";
import Button from "../../../props/Button";

interface SuccessStepProps {
  autoNavigate?: boolean;
  redirectDelay?: number;
  redirectPath?: string;
}

const SuccessStep = ({
  autoNavigate = true,
  redirectDelay = 5000,
  redirectPath = "/dashboard",
}: SuccessStepProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!autoNavigate) return;

    const timer = setTimeout(() => {
      navigate(redirectPath);
    }, redirectDelay);

    return () => clearTimeout(timer);
  }, [autoNavigate, redirectDelay, redirectPath, navigate]);

  return (
    <motion.div
      key="step4-form"
      variants={formContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex items-center justify-center flex-col gap-y-6"
    >
      <div>
        <img src={getImageSrc("tick.png")} alt="" />
      </div>

      <div>
        <h1 className="text-text-primary text-2xl text-center">
          You're all set!
        </h1>
        <p className="text-center text-text-secondary mt-1.5">
          Your security brain is online. We'll start monitoring your environment
          in real-time.
        </p>
      </div>

      <Loader size="62px" />

      <p className="text-primary text-center">
        {autoNavigate
          ? "Preparing your security brain..."
          : "Your security brain is ready!"}
      </p>

      {/* Manual navigation buttons — shown when autoNavigate is false */}
      {!autoNavigate && (
        <div className="flex flex-col gap-3 w-full max-w-[320px]">
          <Button type="button" onClick={() => navigate(redirectPath)}>
            GO TO DASHBOARD
          </Button>
          <Button
            type="button"
            variant="white"
            onClick={() => navigate("/invite")}
          >
            INVITE TEAMMATES
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default SuccessStep;
