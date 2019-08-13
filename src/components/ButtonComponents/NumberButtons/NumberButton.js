import React from "react";
import styled from "styled-components";

const Button = styled.button`
  justify-self: center;
  align-self: center;
  background: #113c78;
  color: #fff;
  max-width: 50px;
  padding: 15px 20px;
  border-radius: 50%;
  border: none;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
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
