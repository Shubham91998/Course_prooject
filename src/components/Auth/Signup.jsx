import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters and include uppercase, lowercase, and a number.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      console.log('Sending signup request to backend...');
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      console.log('Signup response:', data);
      if (!res.ok) {
        setError(data.error || 'Signup failed');
        return;
      }
      setSuccess('Registration successful! You can now log in.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError('Server error');
      console.error('Signup error:', err);
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
        }}>Sign Up</h2>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          }}>Sign Up</button>
          {error && <div style={{ color: '#e63946', marginTop: 4, textAlign: 'center', fontWeight: 500 }}>{error}</div>}
          {success && <div style={{ color: '#38b000', marginTop: 4, textAlign: 'center', fontWeight: 500 }}>{success}</div>}
        </form>
        <div style={{ marginTop: 18, textAlign: 'center', color: '#555' }}>
          Already have an account? <Link to="/login" style={{ color: '#5a189a', fontWeight: 600 }}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
