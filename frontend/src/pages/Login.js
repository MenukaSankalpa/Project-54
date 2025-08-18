// src/pages/Login.js
import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    try {
      // Simulate login success
      const user = { email, role: 'admin' };
      const token = 'dummy-token';
      onLogin(user, token);
    } catch {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-brand-red text-center">Welcome Back</h2>
      {error && <p className="mb-4 text-red-600 font-semibold">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <FiMail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="Email address"
            className="pl-10 pr-4 py-3 w-full rounded-md border border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red outline-none transition"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="relative">
          <FiLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="password"
            placeholder="Password"
            className="pl-10 pr-4 py-3 w-full rounded-md border border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red outline-none transition"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-red hover:bg-red-700 text-white font-semibold py-3 rounded-md transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
