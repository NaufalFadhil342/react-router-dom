import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';

import { Navbar } from './components/navbar';
import DisplayProduct from './pages/product/product-display/displayProduct';
import { Search } from './pages/product/search/search';
import { ListProduct } from './pages/product/list/listProduct';
import { Add } from './pages/product/add/add';

const Home = React.lazy(() => import('./pages/home/index'));
const Login = React.lazy(() => import('./pages/login/index'));
const Product = React.lazy(() => import('./pages/product'));

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={<h1 style={{ marginTop: '4rem' }}>Loading...</h1>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product />}>
              <Route path="search" element={<Search />} />
              <Route path="list" element={<ListProduct />} />
              <Route path="add" element={<Add />} />
              <Route path=":id" element={<DisplayProduct />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
