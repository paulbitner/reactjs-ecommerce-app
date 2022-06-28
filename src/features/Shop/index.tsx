import React from "react";
import style from 'styles/SiteHeaderMain.module.css';
import MaxContentWidth from "components/Layout/MaxWidthContainer";
import { Table } from "components/Table";
import { TShop } from './types';



import { useShop } from './api/getShop';


const Shop = () => {
  const shopQuery = useShop();
    
  if (shopQuery.isLoading) {
    return (
      <div>Loading products...</div>
    );
  }

  if (!shopQuery.data) return(
    <div>Error: API server is offline</div>
  )

  console.log(shopQuery.data);

  return (
    <span>*Loop over array data here*</span>
  );
 
};

export default Shop;