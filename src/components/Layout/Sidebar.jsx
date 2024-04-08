import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Navigation</h3>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/">Overview</Link></li>
        <li><Link to="/users">List All Users</Link></li>
        <li><Link to="/transactions">List All Transactions</Link></li>
        <li><Link to="/admin/dashboard">Admin Dashboard Summary</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
