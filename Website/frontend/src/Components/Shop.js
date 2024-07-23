// src/components/Shop.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHOP } from '../queries';

const Shop = ({ filter }) => {
  const { loading, error, data } = useQuery(GET_SHOP, {
    variables: { filter },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.shop.name}</h1>
    </div>
  );
};

export default Shop;
