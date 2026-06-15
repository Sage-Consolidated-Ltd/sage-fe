import React, { useState } from "react";
import AdvancedLogSearch from "../huntingComponents/advanced-logComponents/AdvancedLogSearch";
import AdvancedLogOverview from "../huntingComponents/advanced-logComponents/AdvancedLogOverview";
import AdvancedLogTableTabs from "../huntingComponents/advanced-logComponents/AdvancedLogTableTabs";

const AdvancedLogSearchPage = () => {
  const [activeTab, setActiveTab] = useState("recentSearches");
  return (
    <div className="flex flex-col gap-6">
      <AdvancedLogSearch />
      <AdvancedLogOverview />
      <AdvancedLogTableTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default AdvancedLogSearchPage;
