import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../shared/Loader";
import { motion } from "motion/react";
import { formContentVariants } from "../../../../utils/variants";
import { CircleFilledCheckIcon } from "../../../../utils/icons";

const AddDataSuccessStep = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("");
  //   }, 5000); // 5 seconds delay

  //   return () => clearTimeout(timer); // Cleanup
  // }, [navigate]);
  return (
    <motion.div
      key="step2-form"
      variants={formContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-surface rounded-3xl shadow-card p-12 flex flex-col items-center justify-center min-h-[400px] gap-y-6 "
    >
      <Loader size="62px" />
      <p className="text-text-secondary text-base">auth_logs</p>
      <div className="flex items-center gap-2 bg-default p-4 rounded-sm">
        <CircleFilledCheckIcon className="text-success" />
        <p>File uploaded successfully</p>
      </div>
    </motion.div>
  );
};

export default AddDataSuccessStep;
