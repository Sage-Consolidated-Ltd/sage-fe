import React from "react";
import AiAssistHeader from "../huntingComponents/ai-assistComponents/AiAssistHeader";
import AiAssistBody from "../huntingComponents/ai-assistComponents/AiAssistBody";

const AiAssistPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <AiAssistHeader />
      <AiAssistBody />
    </div>
  );
};

export default AiAssistPage;
