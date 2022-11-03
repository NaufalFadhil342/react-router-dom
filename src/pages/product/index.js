import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../../App.css';

const Product = () => {
  return (
    <header className="product">
      <div className="feature">
        <Link to="search">Search</Link>
        <Link to="list">List</Link>
        <Link to="add">Add</Link>
      </div>

      <Outlet />
    </header>
  );
};

export default Product;
