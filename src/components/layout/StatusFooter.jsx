import React from 'react';

const StatusFooter = () => {
  // Logic for the current year (from Exercise 4)
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div style={statusGroup}>
        <span style={statusDot}></span>
        <span>System Status: <strong style={{ color: '#2ecc71' }}>Operational</strong></span>
      </div>

      <div style={infoGroup}>
        <span>v1.0.4</span>
        <span style={{ margin: '0 15px' }}>|</span>
        <span>© {currentYear} BIKASH RANJAN MOHAPATRA</span>
      </div>
    </footer>
  );
};

// Styling to stick it to the bottom
const footerStyle = {
  padding: '10px 30px',
  backgroundColor: '#ecf0f1',
  borderTop: '1px solid #bdc3c7',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.85rem',
  color: '#7f8c8d',
  position: 'fixed',
  bottom: 0,
  left: '200px', // Matches your Sidebar width
  right: 0
};

const statusGroup = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const infoGroup = {
  display: 'flex',
  alignItems: 'center'
};

const statusDot = {
  height: '10px',
  width: '10px',
  backgroundColor: '#2ecc71',
  borderRadius: '50%',
  display: 'inline-block'
};

export default StatusFooter;