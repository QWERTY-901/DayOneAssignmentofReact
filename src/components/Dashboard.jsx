import Sidebar from './layout/Sidebar';
import MainContent from './layout/MainContent';
import StatusFooter from './layout/StatusFooter';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content-area">
        <MainContent />
        <StatusFooter />
      </div>
    </div>
  );
};

export default Dashboard;