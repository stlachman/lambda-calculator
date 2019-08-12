import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button value={props.operator}>{props.operator}</button>
    </>
  );
};

export default SpecialButton;
