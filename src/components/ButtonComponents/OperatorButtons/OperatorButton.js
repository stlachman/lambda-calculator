import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button value={props.value}>{props.char}</button>
    </>
  );
};

export default OperatorButton;
