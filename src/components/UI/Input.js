import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <Input
      id={props.id}
      type={props.type || "text"}
      classname={`${classes.Input} ${props.classname} `}
    >
      {props.children}
    </Input>
  );
};

export default Input;
