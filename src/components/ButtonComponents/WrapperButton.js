import React from "react";
import styled from "styled-components";

import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Specials from "../ButtonComponents/SpecialButtons/Specials";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
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
