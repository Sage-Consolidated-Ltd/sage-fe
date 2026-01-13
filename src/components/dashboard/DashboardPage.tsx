import EndpointProtectionCard from "./dash-components/EndpointProtectionCard";
import IdentityCard from "./dash-components/IdentityCard";
import KnownVulnerability from "./dash-components/KnownVulnerability";
import OverallSecurity from "./dash-components/OverallSecurity";
import ThreatCard from "./dash-components/ThreatCard";

const DashboardPage = () => {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-full">
          <OverallSecurity count={40} />
        </div>

        <div className="w-[724px]">
          <KnownVulnerability />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[18px] mt-[18px]">
        <IdentityCard />
        <EndpointProtectionCard />
        <ThreatCard />
      </div>
    </>
  );
};

export default DashboardPage;
