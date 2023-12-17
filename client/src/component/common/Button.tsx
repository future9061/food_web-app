import React from "react";
import { ButtonCSS } from "../../style/component/common/ButtonCSS";

//페이지 이동
//submit 기능

interface ButtonProps {
  children: string;
  path: string;
  type: "link" | "submit";
}

function Button({ children, path, type }: ButtonProps) {
  return <ButtonCSS>{children}</ButtonCSS>;
}

export default Button;
