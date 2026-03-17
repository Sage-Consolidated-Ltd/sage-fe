import { AnimatePresence } from "motion/react";
import { LogoText } from "../../../utils/icons";
import { getImageSrc } from "../../../utils/imageUtils";
import { useOnboardStore } from "../../../store/onboardStore";
import ProfileStep from "./steps/ProfileStep";
import PasswordStep from "./steps/PasswordStep";
import VerificationStep from "./steps/VerifcationStep";
import AuthFooter from "../AuthFooter";
import SuccessStep from "./steps/SuccessStep";

const OnboardPage = () => {
  const { currentStep } = useOnboardStore();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProfileStep />;
      case 2:
        return <PasswordStep />;
      case 3:
        return <VerificationStep />;
      case 4:
        return <SuccessStep />;
      default:
        return <ProfileStep />;
    }
  };

  return (
    <div className="bg-default w-full overflow-x-hidden">
      <div className="container mx-auto py-[34px] px-4 sm:px-[34px] min-h-screen h-full flex flex-col">
        {/* Logo */}
        <div className="flex items-center">
          <div>
            <img src={getImageSrc("logo.svg")} alt="" />
          </div>
          <LogoText />
        </div>

        {/* Form */}
        <div className="w-full h-full flex items-center justify-center flex-1">
          <form action="" className="w-full max-w-[410px] mx-auto">
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
          </form>
        </div>

        <AuthFooter single={currentStep !== 1} />
      </div>
    </div>
  );
};

export default OnboardPage;
