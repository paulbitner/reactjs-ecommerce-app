import React, { useState } from "react";
import style from "styles/VariantSelector.module.css";
import { Variant } from "../types";

interface VariantSelectorProps {
  data?: Array<Variant>;
  setVariant: any;
  selectedVariantID: any;
  selectedVariantIDName: any;
}

const VariantSelector = (props: VariantSelectorProps) => {

  return (
    <>
      <p className={style.selectedVariantID}><strong>Size:</strong> {props.selectedVariantIDName}</p>
      <div className={style.VariantSelector}>
        {props.data?.map((variant: Variant, index: number) => (
          <div key={variant.variantID} className={style.singleVariantContainer} data-id={variant.variantID}>
            <div>
              <div
                 onClick={() => props.setVariant(variant.variantID, variant.variantName, variant.variantImage, variant.variantPrice)} className={props.selectedVariantID === variant.variantID ? `${style.productFormSelectorRadio} ${style.selected}` : `${style.productFormSelectorRadio}`}
              >
                <div
                  className={props.selectedVariantID === variant.variantID ? `${style.productFormSelectorRadioInner} ${style.selected}` : `${style.productFormSelectorRadioInner}`}
                ></div>
              </div>
            </div>
            <div>{variant.variantName} <span className={style.price}> - ${variant.variantPrice}</span></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VariantSelector;
