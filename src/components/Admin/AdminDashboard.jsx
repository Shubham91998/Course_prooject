import React from 'react';
import { useAuth } from '../Auth/useAuth';

const AdminDashboard = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <div>Access denied. Admins only.</div>;
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Welcome, {user.email}!</p>
      <ul>
        <li>View all users (demo)</li>
        <li>Manage courses (demo)</li>
        <li>View analytics (demo)</li>
        <li>Send notifications (demo)</li>
      </ul>
      <div style={{marginTop: '2rem', color: 'gray'}}>
        <em>More advanced admin features can be added here.</em>
      </div>
    </div>
  );
};

export default AdminDashboard;
