import React from "react";
import styled from "styled-components";

import logo from "../../Img/Lambda_Logo_white.png";

const LogoImage = styled.img`
  max-width: 110px;
`;

const Logo = () => {
  return (
    <div className="logo-container">
      <LogoImage className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
