import React from "react";

interface H1Props {
  size: string;
  text: string;
  color?: string;
  class?: string;
}

const Heading = (props: H1Props) => {
  if (props.size === "h1") {
    return (
      <h1 className={props.class} style={{ color: props.color }}>
        {props.text}
      </h1>
    );
  }

  else if (props.size === "h2") {
    return (
      <h2 className={props.class} style={{ color: props.color }}>
        {props.text}
      </h2>
    );
  }

  else if (props.size === "h3") {
    return (
      <h3 className={props.class} style={{ color: props.color }}>
        {props.text}
      </h3>
    );
  }

  else if (props.size === "h4") {
    return (
      <h4 className={props.class} style={{ color: props.color }}>
        {props.text}
      </h4>
    );
  }

  else if (props.size === "h5") {
    return (
      <h5 className={props.class} style={{ color: props.color }}>
        {props.text}
      </h5>
    );
  }

  else if (props.size === "h6") {
    return (
      <h6 className={props.class} style={{ color: props.color }}>
        {props.text}
      </h6>
    );
  } else{
    return (
      <h3 className={props.class} style={{ color: props.color }}>
        {props.text}
      </h3>
    );
  }
}

export default Heading;
