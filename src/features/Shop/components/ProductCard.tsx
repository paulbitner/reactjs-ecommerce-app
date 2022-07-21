import React from "react";
import styles from "styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import Button from "components/Button";
import { Product } from "../types/index";

interface ProductCardProps {
  productData: Product;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <>
      <Link to={props.productData.slug}>
        <div className={styles.productCard}>
          <img
            className={styles.productCardImage}
            src={props.productData.mainImage}
            alt={props.productData.productname}
          />
          <h3 className={styles.productCardTitle}>
            {props.productData.productname}
          </h3>
          <Button
            link={props.productData.slug}
            value="View Product"
            backgroundColor="#00000000"
            textColor="#000"
            border="1px solid black"
            size="small"
          />
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
