import { BookIcon, BoxChartIcon } from "../../../utils/icons";
import Button from "../../props/Button";
import { PageHeader } from "../../props/PageHeader";
import Toggle from "../../props/Toggle";
import SecurityIntegrationData from "./security-components/SecurityIntegrationData";
import SecurityTableTab from "./security-components/SecurityTableTab";

const SecurityIntegrationPage = () => {
  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Integrations" },
          { label: "Security & SIEM Integrations" },
        ]}
        title="Security & SIEM Integrations"
        description="Connect log sources, cloud platforms, EDR tools, firewalls, email security, and threat intelligence feeds to power detections and investigations."
        actions={
          <>
            {/* updates */}
            <div className="flex items-center justify-between uppercase gap-2">
              <p className="font-semibold text-text-secondary">
                Connected Only
              </p>
              <Toggle size="sm" />
            </div>
            <Button variant="primary" icon={<BoxChartIcon />}>
              Ingestion Health
            </Button>
            <Button
              variant="white"
              icon={<BookIcon className="text-text-secondary" />}
            >
              Documentation
            </Button>
          </>
        }
      />

      {/* other sections */}
      <div className="bg-surface py-[27px] px-[30px] rounded-[18px] shadow-card relative">
        <SecurityIntegrationData />

        <SecurityTableTab />
      </div>
    </div>
  );
};

export default SecurityIntegrationPage;
