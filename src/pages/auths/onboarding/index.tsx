import React from "react";
import { useTitle } from "../../../hooks/useTitle";
import OnboardPage from "../../../components/auths/onboarding/OnboardPage";

const Onboard = () => {
  useTitle("Setup Wizard - SAGE SHIELD");
  return (
    <>
      <OnboardPage />
    </>
  );
};

export default Onboard;
