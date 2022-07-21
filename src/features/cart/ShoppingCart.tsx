import React, { useState, useEffect } from "react";
import style from "styles/ShoppingCart.module.css";
import ThreeColFlex from "components/Layout/ThreeColFlex";
import CartIcon from "components/CartIcon";
import TwoColFlex from "components/Layout/TwoColFlex";
import Button from "components/Button";
import { useAppSelector, useAppDispatch } from "hooks";
import { addProductToCart, selectCart, updateQuantity } from "stores/cartSlice";
import { Variant } from "features/SingleProduct/types";
import { openCartModal, selectModal } from "stores/cartModalSlice";

const ShoppingCart = () => {
  const cart = useAppSelector(selectCart);
  const openCart = useAppSelector(selectModal);

  const dispatch = useAppDispatch();

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (cart.length >= 0) localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    
    if(!openCart){
      setOpenModal(false)
    }

    if(openCart){
      setOpenModal(true);
    }
  }, [openCart]);

  return (
    <div className={style.shoppingCart}>
      <div
        onClick={() => dispatch(openCartModal('close'))}
        className={style.cartOverlay}
        style={{
          opacity: openModal ? "1" : "0",
          visibility: openModal ? "visible" : "hidden",
        }}
      ></div>
      <div onClick={() => dispatch(openCartModal('open'))}>
        <CartIcon quantity={cart.length} />
      </div>
      <div
        className={style.cartContainer}
        style={{
          opacity: openModal ? "1" : "0",
          visibility: openModal ? "visible" : "hidden",
        }}
      >
        <ThreeColFlex>
          <div className={style.cartContainerCart}>
            <CartIcon quantity={cart.length} />
          </div>
          <div className={style.cartContainerHeading}>Shopping Bag</div>
          <div onClick={() => dispatch(openCartModal('close'))} className={style.cartContainerClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="36"
              viewBox="0 0 29 36"
            >
              <g fill="#000" fillRule="evenodd">
                <path d="M4.954 7L25.46 27.506l-1.414 1.414L3.54 8.414z"></path>
                <path d="M3.54 27.506L24.046 7l1.414 1.414L4.954 28.92z"></path>
              </g>
            </svg>
          </div>
        </ThreeColFlex>
        <hr />

        {cart.map((variant: Variant, index: number) => (
          <div key={index} className={style.cartVariant}>
            <div>
              <div className={style.cartVariant}>
                <div>
                  <img src={variant.variantImage} alt={variant.variantName} />
                </div>
                <div>
                  <h6>{variant.variantName}</h6>
                  <span className={style.price}>
                    $
                    {variant.quantity
                      ? Number(variant.variantPrice) * variant.quantity
                      : 0}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className={style.cartLineItemQuantityContainer}>
                <a
                  href="#"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        variantID: variant.variantID,
                        action: "decrement",
                      })
                    )
                  }
                >
                  -
                </a>
                <span rv-text="item.quantity">{variant.quantity}</span>
                <a
                  href="#"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        variantID: variant.variantID,
                        action: "increment",
                      })
                    )
                  }
                >
                  +
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className={style.cartPricingContainer}>
          <div>Subtotal</div>
          <div>$100.00</div>
        </div>
        <Button
          value="Checkout"
          backgroundColor="#000"
          textColor="#fff"
          border="none"
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
