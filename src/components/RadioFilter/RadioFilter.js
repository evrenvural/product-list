import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./RadioFilter.style";
import { Radio, RadioGroup } from "@mantine/core";
import { GLOBAL_STYLE } from "../../utils/styleUtils";

function RadioFilter({ onChange, value }) {
  return (
    <div css={style.wrapper}>
      <label css={style.title}>Sorting</label>
      <RadioGroup
        orientation="vertical"
        css={style.filterContainer}
        onChange={onChange}
        value={value}
      >
        <Radio value="price,asc" label="Price low to high" />
        <Radio value="price,desc" label="Price high to low" />
        <Radio value="added,asc" label="New to old" />
        <Radio value="added,desc" label="Old to new" />
      </RadioGroup>
    </div>
  );
}

export default RadioFilter;
