const UserGateway = () => {
  const user = { name: "Alex", role: "admin", status: "active" };

  if (user.status === "suspended") {
    return <h2>Account Suspended: Please Contact Support</h2>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      {user.role === "admin" && <AdminPanel />}
      <p>Your dashboard is ready.</p>
    </div>
  );
};

// Small placeholder for the AdminPanel
const AdminPanel = () => <div className="admin-box">Admin Controls Enabled</div>;

export default UserGateway;