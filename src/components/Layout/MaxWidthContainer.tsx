import React from "react";
import style from 'styles/MaxContentWidth.module.css';



const MaxContentWidth = ({children}: any) => {
  return (
    <div className={style.container}>
        {children}
    </div>
  );
};

export default MaxContentWidth;
