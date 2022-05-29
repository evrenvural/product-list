import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./RadioFilter.style";
import { Radio } from "@mantine/core";
import { GLOBAL_STYLE } from "../../utils/styleUtils";

function RadioFilter() {
  return (
    <div css={style.wrapper}>
      <label css={style.title}>Sorting</label>
      <div css={style.filterContainer}>
        <Radio
          css={[style.radioInput, GLOBAL_STYLE.mb(18)]}
          value="react"
          label="Price low to high"
        />
        <Radio
          css={[style.radioInput, GLOBAL_STYLE.mb(18)]}
          value="react"
          label="Price high to low"
        />
        <Radio
          css={[style.radioInput, GLOBAL_STYLE.mb(18)]}
          value="react"
          label="New to old"
        />
        <Radio css={style.radioInput} value="react" label="Old to new" />
      </div>
    </div>
  );
}

export default RadioFilter;
