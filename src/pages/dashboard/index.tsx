import DashboardPage from "../../components/dashboard/DashboardPage";
import { useTitle } from "../../hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");

  return (
    <div>
      <DashboardPage />
    </div>
  );
};

export default Dashboard;
