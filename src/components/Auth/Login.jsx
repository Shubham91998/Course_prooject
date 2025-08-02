import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.error === 'Invalid credentials') {
          setError('User not found. Please register first.');
        } else {
          setError(data.error || 'Login failed');
        }
        return;
      }
      login(data);
      if (data.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <div style={{
        background: '#fff',
        padding: '2.5rem 2rem',
        borderRadius: '1.2rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        width: '100%',
        maxWidth: 370,
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: 24,
          color: '#5a189a',
          fontWeight: 700,
          letterSpacing: 1
        }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '0.8rem 1rem',
              borderRadius: 8,
              border: '1px solid #d1d5db',
              fontSize: 16,
              outline: 'none',
              marginBottom: 6
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: '0.8rem 1rem',
              borderRadius: 8,
              border: '1px solid #d1d5db',
              fontSize: 16,
              outline: 'none',
              marginBottom: 6
            }}
          />
          <button type="submit" style={{
            background: 'linear-gradient(90deg, #5a189a 0%, #764ba2 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '0.8rem',
            fontWeight: 600,
            fontSize: 17,
            cursor: 'pointer',
            marginTop: 8,
            boxShadow: '0 2px 8px rgba(90,24,154,0.08)'
          }}>Login</button>
          {error && <div style={{ color: '#e63946', marginTop: 4, textAlign: 'center', fontWeight: 500 }}>{error}</div>}
        </form>
        <div style={{ marginTop: 18, textAlign: 'center', color: '#555' }}>
          Not registered? <Link to="/signup" style={{ color: '#5a189a', fontWeight: 600 }}>Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
