import React, { useState } from 'react';

const APIDemo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      // Demo: fetch from public API
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-demo" style={{maxWidth: 500, margin: '2rem auto'}}>
      <h2>API Integration Demo</h2>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <div style={{color: 'red'}}>{error}</div>}
      {data && (
        <div style={{marginTop: 16, background: '#f9f9f9', padding: 12, borderRadius: 8}}>
          <strong>{data.title}</strong>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default APIDemo;
