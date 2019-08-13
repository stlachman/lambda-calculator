import React, { useState } from "react";
import styled from "styled-components";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

const NumberWrap = styled.div`
  grid-area: 2 / 1 / 4 / 4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Numbers = () => {
  const [buttonNumbers, setNumbers] = useState(numbers);
  return (
    <NumberWrap>
      {buttonNumbers &&
        buttonNumbers.map(number => (
          <NumberButton key={number} number={number} />
        ))}
    </NumberWrap>
  );
};
export default Numbers;
