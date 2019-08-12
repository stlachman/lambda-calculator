import React from "react";

import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Specials from "../ButtonComponents/SpecialButtons/Specials";

const WrapperButton = () => {
  return (
    <>
      <Specials />
      <Operators />
      <Numbers />
    </>
  );
};

export default WrapperButton;
