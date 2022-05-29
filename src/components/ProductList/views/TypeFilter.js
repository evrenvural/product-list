import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./TypeFilter.style";

function TypeFilter() {
  return (
    <div css={style.wrapper}>
      <div css={[style.button, style.activeButton]}>mug</div>
      <div css={style.button}>shirt</div>
    </div>
  );
}

export default TypeFilter;
