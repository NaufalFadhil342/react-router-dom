import React from 'react';
import { useParams } from 'react-router-dom';
import './displayProduct.css';

import { ProductsData } from '../../../productData';

const DisplayProduct = () => {
  const { id } = useParams();

  return (
    <div className="displayProduct">
      <div className="productDisplay">
        <h1>{ProductsData[id - 1].name}</h1>
        <p>{ProductsData[id - 1].description}</p>
      </div>
    </div>
  );
};

export default DisplayProduct;
