import React from "react";
import style from 'styles/ThreeColFlex.module.css';



const ThreeColFlex = ({children}: any) => {
  return (
    
    <div className={style.flex33}>
        {children}
    </div>
  );
};

export default ThreeColFlex;
