import React from 'react';

const AnalyticsDashboard = () => {
  // Demo data
  const stats = [
    { label: 'Total Users', value: 1200 },
    { label: 'Courses Sold', value: 340 },
    { label: 'Revenue', value: '$12,000' },
    { label: 'Active Mentors', value: 15 },
  ];

  return (
    <div className="analytics-dashboard" style={{maxWidth: 600, margin: '2rem auto'}}>
      <h2>Analytics Dashboard (Demo)</h2>
      <div style={{display: 'flex', gap: 24, flexWrap: 'wrap'}}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{background: '#f3f3f3', padding: 24, borderRadius: 8, minWidth: 120, textAlign: 'center'}}>
            <div style={{fontSize: 24, fontWeight: 600}}>{stat.value}</div>
            <div style={{color: '#555'}}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop: 32, color: 'gray'}}>
        <em>Integrate with real analytics for production use.</em>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
