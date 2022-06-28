import React from "react";
import styles from "styles/ProductGrid.module.css";


interface ProductGridProps {
  data: React.ReactElement;
}

const ProductGrid = (props: ProductGridProps) => {
  return (
    props.data
  );
};

export default ProductGrid;
