import React from "react";
import styled from "styled-components";

const InputView = styled.div`
  background: #2e282a;
  border-radius: 35px;
  padding: 20px;
`;

const InputText = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const Display = props => {
  return (
    <InputView>
      <InputText>{props.value}</InputText>
    </InputView>
  );
};

export default Display;
