import React from 'react';

const Sidebar = () => {
  // Common navigation items
  const navItems = ["Home", "Analytics", "Settings", "Profile"];

  return (
    <aside style={sidebarStyle}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Dashboard</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {navItems.map((item, index) => (
          <li key={index} style={listItemStyle}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

// Inline styles for quick setup (you can move these to CSS later)
// src/components/layout/Sidebar.jsx

const sidebarStyle = {
  width: '240px',      // Slightly wider for a cleaner look
  height: '100vh',
  position: 'fixed',   // This locks it in place
  top: 0,
  left: 0,
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '20px',
  zIndex: 100,         // Ensures it stays on top of other elements
};

const listItemStyle = {
  padding: '10px 0',
  borderBottom: '1px solid #34495e',
  cursor: 'pointer',
};

export default Sidebar;