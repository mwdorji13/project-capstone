// src/components/LoginPage.tsx
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Must Healthcare</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
