import React from 'react';

const MainContent = () => {
  return (
    <main style={mainStyle}>
      <header style={headerStyle}>
        <h1>System Overview</h1>
        <p>Welcome back! Here is what is happening today.</p>
      </header>

      <section style={cardGridStyle}>
        <div style={cardStyle}>
          <h3>Total Users</h3>
          <p style={numberStyle}>1,284</p>
        </div>
        <div style={cardStyle}>
          <h3>Active Sessions</h3>
          <p style={numberStyle}>42</p>
        </div>
        <div style={cardStyle}>
          <h3>System Health</h3>
          <p style={{ ...numberStyle, color: '#27ae60' }}>99.9%</p>
        </div>
      </section>
    </main>
  );
};

// Styling to make it look like a real dashboard
// src/components/layout/MainContent.jsx

const mainStyle = {
  marginLeft: '240px', // Matches Sidebar width exactly
  padding: '40px',
  backgroundColor: '#f4f7f6',
  minHeight: '100vh',
  width: 'calc(100% - 240px)', // Ensures it doesn't cause horizontal scrolling
};

const headerStyle = {
  marginBottom: '30px',
  borderBottom: '2px solid #ddd',
  paddingBottom: '10px'
};

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px'
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const numberStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  margin: '10px 0',
  color: '#2c3e50'
};

export default MainContent;