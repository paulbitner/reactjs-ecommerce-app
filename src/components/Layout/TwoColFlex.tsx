import React from "react";
import style from 'styles/TwoColFlex.module.css';

interface TwoColFlexProps{
  backgroundColor?: string;
  children: React.ReactNode;
}

const TwoColFlex = (props: TwoColFlexProps) => {
  return (
    
    <div className={style.flex50} style={{backgroundColor: props.backgroundColor}}>
        {props.children}
    </div>
  );
};

export default TwoColFlex;
