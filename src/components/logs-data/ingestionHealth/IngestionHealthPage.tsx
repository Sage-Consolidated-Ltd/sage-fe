import React from "react";
import IngestionHealthHeader from "../logs-dataComponents/IngestionHealthComponents/IngestionHealthHeader";
import IngestionHealthCoverageCount from "../logs-dataComponents/IngestionHealthComponents/IngestionHealthCoverageCount";
import AlertsNotifications from "../logs-dataComponents/IngestionHealthComponents/AlertsNotifications";
import IngestionDataSourceTable from "../logs-dataComponents/IngestionHealthComponents/IngestionDataSourceTable";

const IngestionHealthPage = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <IngestionHealthHeader />
      <IngestionHealthCoverageCount />
      <IngestionDataSourceTable />
      <AlertsNotifications />
    </div>
  );
};

export default IngestionHealthPage;
