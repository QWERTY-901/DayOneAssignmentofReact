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
const sidebarStyle = {
  width: '200px',
  height: '100vh',
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
};

const listItemStyle = {
  padding: '10px 0',
  borderBottom: '1px solid #34495e',
  cursor: 'pointer',
};

export default Sidebar;