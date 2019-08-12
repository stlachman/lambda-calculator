import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialOperators, setSpecialOperators] = useState(specials);

  return (
    <div>
      {specialOperators &&
        specialOperators.map(operator => (
          <SpecialButton key={operator} operator={operator} />
        ))}
    </div>
  );
};

export default Specials;
