import React from "react";
import styled from "styled-components";

const Button = styled.button`
  justify-self: center;
  align-self: center;
  background: #2161b0;
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

const SpecialButton = props => {
  return (
    <>
      <Button value={props.operator}>{props.operator}</Button>
    </>
  );
};

export default SpecialButton;
