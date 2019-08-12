import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  const [buttonNumbers, setNumbers] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {buttonNumbers &&
        buttonNumbers.map(number => (
          <NumberButton key={number} number={number} />
        ))}
    </div>
  );
};
export default Numbers;
