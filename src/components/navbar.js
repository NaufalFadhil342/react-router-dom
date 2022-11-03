import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/product">
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
