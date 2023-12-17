import React from "react";
import Button from "./common/Button";
import { HomeContainerCSS } from "../style/component/HomeContainerCSS";

import LogoContainer from "./LogoContainer";

function HomeContainer() {
  return (
    <HomeContainerCSS>
      <LogoContainer />
      <Button children="로그인하기" type="link" path="/login" />
    </HomeContainerCSS>
  );
}

export default HomeContainer;
