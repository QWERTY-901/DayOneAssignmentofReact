import Sidebar from './layout/Sidebar';
import MainContent from './layout/MainContent';
import StatusFooter from './layout/StatusFooter';

// Dashboard.jsx or App.jsx wrapper
const dashboardWrapperStyle = {
  marginLeft: '240px', // Matches your Sidebar width
  width: 'calc(100% - 240px)', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Centers the content within the available space
  minHeight: '100vh',
};

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