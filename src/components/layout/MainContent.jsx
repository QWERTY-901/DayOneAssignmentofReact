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
  width: '90%',      // Don't use 100% so you have some "breathing room" on the sides
  maxWidth: '1200px', // Prevents it from looking too stretched on massive monitors
  margin: '0 auto',   // Centers it perfectly in the area next to the sidebar
  padding: '40px 0',
};

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Forces 3 equal columns
  gap: '30px',
  width: '100%',
};

const headerStyle = {
  marginBottom: '30px',
  borderBottom: '2px solid #ddd',
  paddingBottom: '10px'
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