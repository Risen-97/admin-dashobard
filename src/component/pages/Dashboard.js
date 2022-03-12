import Details from "../layout/Details";
import Orders from "../layout/Orders";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      <Orders />
      <Details />
    </section>
  );
};

export default Dashboard;
