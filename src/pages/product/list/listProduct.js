import React from 'react';
import { useNavigate } from 'react-router-dom';
import './listProduct.css';

import { ProductsData } from '../../../productData';

export const ListProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="list">
      <div className="productList">
        {ProductsData.map((product) => {
          return (
            <div
              className="productData"
              onClick={() => {
                navigate(`/product/${product.id}`);
              }}
            >
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
