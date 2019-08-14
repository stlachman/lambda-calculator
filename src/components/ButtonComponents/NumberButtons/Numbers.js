import React, { useState } from "react";
import styled from "styled-components";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

const NumberWrap = styled.div`
  grid-area: number;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px 0;
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
