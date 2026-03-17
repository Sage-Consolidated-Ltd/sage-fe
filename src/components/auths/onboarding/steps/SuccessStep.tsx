import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // or your router
import { motion } from "motion/react";
import { formContentVariants } from "../../../../utils/variants";
import { getImageSrc } from "../../../../utils/imageUtils";
import Loader from "../../../../shared/Loader";

const SuccessStep = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <motion.div
      key="step2-form"
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
          Your security brain is online. you will be redirected to your
          environment.
        </p>
      </div>

      <Loader size="62px" />

      <p className="text-primary text-center">
        Preparing your security brain...
      </p>
    </motion.div>
  );
};

export default SuccessStep;
