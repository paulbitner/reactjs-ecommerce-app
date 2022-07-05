import React from "react";
import styles from "styles/ProductCard.module.css";

interface ProductCardProps {
  productName: string;
  productPrice: string;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <>
      <div className={styles.productCard}>
        <h3>{props.productName}</h3>
      </div>
    </>
  );
};

export default ProductCard;
