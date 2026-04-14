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
  position: 'fixed',
  bottom: 0,
  
  // 1. Position it exactly at the end of the sidebar
  left: '280px', 
  
  // 2. Make it span to the right edge
  right: 0,
  
  // 3. Visual Styling
  height: '50px',
  backgroundColor: '#ecf0f1',
  borderTop: '1px solid #bdc3c7',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 40px', // Matches the padding of your Main Content for symmetry
  zIndex: 1000,
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