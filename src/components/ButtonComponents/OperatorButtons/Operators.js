import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [buttonOperators, setButtonOperators] = useState(operators);
  return (
    <div>
      {buttonOperators &&
        buttonOperators.map(operator => (
          <OperatorButton
            key={operator.value}
            value={operator.value}
            char={operator.char}
          />
        ))}
    </div>
  );
};

export default Operators;
