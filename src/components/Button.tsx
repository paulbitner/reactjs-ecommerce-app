import React from "react";
import style from "styles/Button.module.css";
import { Link } from "react-router-dom";

interface ButtonProps {
    value: string;
    link: string;
    backgroundColor: string;
    textColor: string;
    border: string;

}
const Button = (props: ButtonProps) => {

  return (
    <Link to={props.link}><button className={style.button} style={{ backgroundColor: props.backgroundColor, color: props.textColor, border: props.border }}>{props.value}</button></Link>
    
  );
};

export default Button;
