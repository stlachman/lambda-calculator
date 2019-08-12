import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Specials from "../ButtonComponents/SpecialButtons/Specials";

const Display = () => {
  return (
    <div>
      {/* Display any props data here */}
      <Specials />
      <Operators />
      <Numbers />
    </div>
  );
};

export default Display;
