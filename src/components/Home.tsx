// src/components/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  const handleLoginClick = () => {
    window.location.href = '/login'; // Navigate to the login page
  };

  return (
    <div>
      <p>Company Description: MustHealthcare is a leading supplier of medical equipment, providing top-quality products and services to meet all your healthcare needs.</p>
      <p>We strive to be the best supplier in the industry, offering innovative solutions and exceptional customer service.</p>
      
      {/* Login button linking to login page */}
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Home;
