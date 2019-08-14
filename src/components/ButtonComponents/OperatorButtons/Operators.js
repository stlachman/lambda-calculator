import React, { useState } from "react";
import styled from "styled-components";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

const OperatorWrap = styled.div`
  grid-area: operators;
  display: grid;
`;

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [buttonOperators, setButtonOperators] = useState(operators);
  return (
    <OperatorWrap>
      {buttonOperators &&
        buttonOperators.map(operator => (
          <OperatorButton
            key={operator.value}
            value={operator.value}
            char={operator.char}
          />
        ))}
    </OperatorWrap>
  );
};

export default Operators;
