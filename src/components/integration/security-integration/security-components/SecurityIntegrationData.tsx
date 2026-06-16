import { AiChatIcon } from "../../../../utils/icons";

const SecurityIntegrationData = () => {
  return (
    <div>
      {/* Stats row */}
      <div className="flex items-center gap-12">
        <div>
          <div className="text-xs text-text-muted">Total Connected Source</div>
          <div className="text-2xl font-bold text-text-primary">12</div>
        </div>
        <div>
          <div className="text-xs text-text-muted">Events Ingested Today</div>
          <div className="text-2xl font-bold text-orange-500">8.6M</div>
        </div>
        <div className="flex items-baseline gap-2">
          <div>
            <div className="text-xs text-text-muted">Top Log Type</div>
            <div className="text-2xl font-bold text-text-primary">62%</div>
          </div>
          <span className="text-sm text-text-secondary">Authentication</span>
        </div>
      </div>

      {/* Segmented progress bar */}
      <div className="flex h-2 rounded-full overflow-hidden">
        <div className="bg-green-500 w-[20%]" />
        <div className="bg-orange-400 w-[25%]" />
        <div className="bg-gray-300 flex-1" />
      </div>

      {/* Info banner */}
      <div className="bg-blue-50 rounded-lg px-4 py-3 flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <AiChatIcon className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
          <p className="text-sm text-text-primary">
            We noticed you haven't connected your email provider. Based on your
            industry, we recommend enabling O365 or Gmail logs.
          </p>
        </div>
        <button className="self-start bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-3 py-1.5 rounded-md transition-colors">
          Connect Suggested Source
        </button>
      </div>
    </div>
  );
};

export default SecurityIntegrationData;
