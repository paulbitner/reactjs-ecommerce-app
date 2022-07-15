import React from "react";
import styles from "styles/Wave.module.css";

interface CartProps{
  quantity:number;
}

const CartIcon = (props: CartProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="29"
      viewBox="0 0 32 29"
    >
      <g fill="none" fillRule="evenodd">
        <g stroke="#000" strokeLinecap="round" strokeWidth="2">
          <path d="M11 28h20V11H11zM29 11c0-4.419-3.133-8-7-8-3.866 0-7 3.581-7 8M25.5 11v16.5"></path>
        </g>
        <g rv-show="cart.item_count | gt 0" stroke="none">
          <circle cx="8.5" cy="8.5" r="8.5" fill="#63CFE3"></circle>
          <text
            dy="0.8em"
            dx="0.7em"
            fill="#fff"
            fontSize="10"
            fontWeight="600"
            textAnchor="middle"
            alignmentBaseline="central"
            rv-text="cart.item_count"
            x="1"
          >
            {props.quantity}
          </text>

        </g>
      </g>
    </svg>
  );
};

export default CartIcon;
