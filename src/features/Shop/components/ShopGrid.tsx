import React from "react"
import styles from "styles/ShopGrid.module.css"
import { Product } from "../types/index"
import ProductCard from "./ProductCard"
import ThreeColFlex from "components/Layout/ThreeColFlex"

type ShopGridProps = {
    data: Array<Product>;
  };

const ShopGrid = (props: ShopGridProps) => {
  return (
    <>
      <h1>All Products: {props.data.length}</h1>
      <ThreeColFlex>
      {props.data.map((product: Product, index: number) => (
        <ProductCard productName={product.productname} productPrice={product.productPrice} />
      ))}
      </ThreeColFlex>
    </>
  );
};

export default ShopGrid;
