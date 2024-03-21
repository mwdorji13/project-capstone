// src/App.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from './store';
import { RootState } from './store';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import './App.css';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();

  const handlePageChange = (page: string) => {
    dispatch(setPage(page));
  };

  return (
    <div>
      <Header />
      <div className="buttons-container">
        <button className="button" onClick={() => handlePageChange('home')}>Home</button>
        <button className="button" onClick={() => handlePageChange('products')}>Products</button>
        <button className="button" onClick={() => handlePageChange('contact')}>Contact Us</button>
        <button className="button" onClick={() => handlePageChange('login')}>Login</button>
      </div>
      {currentPage === 'home' && <Home />}
      {currentPage === 'products' && <Products />}
      {currentPage === 'contact' && <ContactUs />}
      {currentPage === 'login' && <LoginPage />}
    </div>
  );
};

export default App;
