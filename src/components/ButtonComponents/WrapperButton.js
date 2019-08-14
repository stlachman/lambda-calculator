import React from "react";
import styled from "styled-components";

import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Specials from "../ButtonComponents/SpecialButtons/Specials";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px 100px 100px 100px 100px;
  grid-gap: 15px;
  margin: 20px 0 0 0;
  grid-template-areas:
    "specials specials specials operators"
    "number number number operators"
    "number number number operators"
    "number number number operators"
    "number number number operators";
`;

const WrapperButton = () => {
  return (
    <Grid>
      <Specials />
      <Operators />
      <Numbers />
    </Grid>
  );
};

export default WrapperButton;
