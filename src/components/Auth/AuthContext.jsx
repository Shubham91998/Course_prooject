import React, { useState } from 'react';
import { AuthContext } from './AuthContext.js';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  const signup = (userData) => setUser(userData);

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

// ...existing code...
