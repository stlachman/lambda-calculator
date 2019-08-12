import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #113c78;
`;

const LargeButton = styled(Button)`
  grid-column: 1 / 3;
`;

const NumberButton = props => {
  return (
    <>
      {props.number === "0" ? (
        <LargeButton value={props.number}>{props.number}</LargeButton>
      ) : (
        <Button value={props.number}>{props.number}</Button>
      )}
    </>
  );
};

export default NumberButton;
