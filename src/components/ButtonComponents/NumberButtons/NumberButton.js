import React from "react";

const NumberButton = props => {
  return (
    <>
      <button value={props.number}>{props.number}</button>
    </>
  );
};

export default NumberButton;
