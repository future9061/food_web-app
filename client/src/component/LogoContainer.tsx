import React from "react";
import Logo from "./common/Logo";
import { LogoContainerCSS } from "../style/component/LogoContainerCSS";

function LogoContainer() {
  return (
    <LogoContainerCSS>
      <div className="cloud2"></div>
      <Logo />
      <p>
        먹는 것이 낙인 요즘 (❁´◡`❁) <br />
        나만의 맛집 메모장에 적지 말고 <br />
        <span>먹짠 단짠</span>에 소중히 <span>Keep</span> 해놓기 <br />
        <div className="cloud"></div>
      </p>
    </LogoContainerCSS>
  );
}

export default LogoContainer;
