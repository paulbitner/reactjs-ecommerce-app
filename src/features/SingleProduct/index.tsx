import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "styles/SingleProduct.module.css";
import MaxContentWidth from "components/Layout/MaxWidthContainer";
import { useSingleProduct } from "./api/getSingleProduct";
import TwoColFlex from "components/Layout/TwoColFlex";
import { TSingleProduct } from "./types";
import VariantSelector from "./components/VariantSelector";

/* Uses slug in URL to fetch the product data from the API. */

const SingleProduct = () => {
  const { slug } = useParams();
  const singleProductQuery = useSingleProduct({ slug });

  const [selectedvariantID, setselectedvariantID] = useState();
  const [selectedvariantIDName, setselectedvariantIDName] = useState('');

  function updateselectedvariantID(index: any, variantName: any) {
    setselectedvariantID(index);
    setselectedvariantIDName(variantName);
  }

  useEffect(() => {
    if (singleProductQuery.status === "success") {
      setselectedvariantID(
        singleProductQuery.data?.productVariants[0].variantID
      );
      setselectedvariantIDName(
        singleProductQuery.data?.productVariants[0].variantName
      );
    }
  }, [singleProductQuery.status, singleProductQuery.data]);

  if (singleProductQuery.isLoading) {
    return <div>Loading products...</div>;
  }

  console.log(singleProductQuery);

  return (
    <>
      <MaxContentWidth>
        <div className={style.SingleProduct}>
          <TwoColFlex>
            <div className={style.imageCol}>
              <img
                src={singleProductQuery?.data?.mainImage}
                alt={singleProductQuery?.data?.productname}
              />
            </div>
            <div className={style.productInfoCol}>
              {singleProductQuery.data?.categoryName && (
                <div className={style.categoryName}>
                  {singleProductQuery.data.categoryName}
                </div>
              )}

              <h1 className={style.productTitle}>
                {singleProductQuery.data?.productname}
              </h1>

              <div className={style.reviews}>[reviews]</div>

              {singleProductQuery.data?.tagline && (
                <div className={style.tagline}>
                  {singleProductQuery.data?.tagline}
                </div>
              )}

              {singleProductQuery.data?.productdescription && (
                <div className={style.description}>
                  {singleProductQuery.data.productdescription}
                </div>
              )}

              <div className={style.flavor}>
                <strong>Flavor:</strong> Peppermint
              </div>
              <VariantSelector
                data={singleProductQuery.data?.productVariants}
                setVariant={updateselectedvariantID}
                selectedVariantID={selectedvariantID}
                selectedVariantIDName={selectedvariantIDName}
              />
            </div>
          </TwoColFlex>
        </div>
      </MaxContentWidth>
    </>
  );
};

export default SingleProduct;
