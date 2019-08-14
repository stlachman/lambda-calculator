import React, { useState } from "react";
import styled from "styled-components";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const SpecialWrap = styled.div`
  display: flex;
  justify-content: space-around;
  grid-area: specials;
  margin-top: 12px;
`;

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialOperators, setSpecialOperators] = useState(specials);

  return (
    <SpecialWrap>
      {specialOperators &&
        specialOperators.map(operator => (
          <SpecialButton key={operator} operator={operator} />
        ))}
    </SpecialWrap>
  );
};

export default Specials;
