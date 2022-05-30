import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./TypeFilter.style";

function TypeFilter({ onChange, value }) {
  return (
    <div css={style.wrapper}>
      <div
        css={[style.button, value === "mug" && style.activeButton]}
        onClick={() => onChange("mug")}
      >
        mug
      </div>
      <div
        css={[style.button, value === "shirt" && style.activeButton]}
        onClick={() => onChange("shirt")}
      >
        shirt
      </div>
    </div>
  );
}

export default TypeFilter;
