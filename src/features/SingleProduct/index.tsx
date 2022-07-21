import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "styles/SingleProduct.module.css";
import MaxContentWidth from "components/Layout/MaxWidthContainer";
import { useSingleProduct } from "./api/getSingleProduct";
import TwoColFlex from "components/Layout/TwoColFlex";
import VariantSelector from "./components/VariantSelector";
import Button from "components/Button";
import { useAppSelector, useAppDispatch } from "hooks";
import { addProductToCart, selectCart } from "stores/cartSlice";
import { openCartModal, selectModal } from "stores/cartModalSlice";

/* Uses slug in URL to fetch the product data from the API. */

const SingleProduct = () => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const openCart = useAppSelector(selectModal);

  const { slug } = useParams();
  const singleProductQuery = useSingleProduct({ slug });

  const [selectedvariantID, setselectedvariantID] = useState();
  const [selectedvariantIDName, setselectedvariantIDName] = useState("");
  const [selectedvariantPrice, setselectedPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  function updateselectedvariantID(
    index: any,
    variantName: any,
    variantImage: string,
    variantPrice: string
  ) {
    setselectedvariantID(index);
    setselectedvariantIDName(variantName);
    setselectedPrice(variantPrice);
    setProductImage(variantImage);
  }
  function updateCart() {
    dispatch(
      addProductToCart({
        variantID: selectedvariantID,
        variantImage: productImage,
        variantName: selectedvariantIDName,
        variantPrice: selectedvariantPrice,
        quantity: 1,
      })
    );

    dispatch(openCartModal('open'));
  }

  useEffect(() => {
    if (singleProductQuery.status === "success") {
      setselectedvariantID(
        singleProductQuery.data?.productVariants[0].variantID
      );
      setselectedvariantIDName(
        singleProductQuery.data?.productVariants[0].variantName
      );

      setselectedPrice(
        singleProductQuery.data?.productVariants[0].variantPrice
      );

      setProductImage(singleProductQuery.data?.productVariants[0].variantImage);
    }
  }, [singleProductQuery.status, singleProductQuery.data]);


  if (singleProductQuery.isLoading) {
    <MaxContentWidth>Loading...</MaxContentWidth>;
  }

  return (
    <>
      <MaxContentWidth>
        <div className={style.SingleProduct}>
          <TwoColFlex>
            <div className={style.imageCol}>
              <img
                src={productImage}
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
              <VariantSelector
                data={singleProductQuery.data?.productVariants}
                setVariant={updateselectedvariantID}
                selectedVariantID={selectedvariantID}
                selectedVariantIDName={selectedvariantIDName}
              />
              <div
                onClick={() =>
                  updateCart()
                }
              >
                {" "}
                <Button
                  value="Add to Cart"
                  backgroundColor="#00000000"
                  textColor="#000"
                  border="1px solid #000"
                />
              </div>
            </div>
          </TwoColFlex>
        </div>
      </MaxContentWidth>
    </>
  );
};

export default SingleProduct;
