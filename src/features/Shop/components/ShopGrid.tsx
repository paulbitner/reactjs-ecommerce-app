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
    <div className={styles.grid}>
      <h3 className={styles.productCount}>All Products: {props.data.length}</h3>
      
      <ThreeColFlex>
      {props.data.map((product: Product, index: number) => (
        <ProductCard productData={product} />
      ))}
      </ThreeColFlex>
    </div>
  );
};

export default ShopGrid;
