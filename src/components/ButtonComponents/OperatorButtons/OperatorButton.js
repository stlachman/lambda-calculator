import React from "react";
import styled from "styled-components";

const Button = styled.button`
  justify-self: center;
  align-self: center;
  background: #3eb5e5;
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

const OperatorButton = props => {
  return (
    <>
      <Button value={props.value}>{props.char}</Button>
    </>
  );
};

export default OperatorButton;
