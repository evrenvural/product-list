import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./CheckboxFilter.style";
import { Radio, Input, Checkbox } from "@mantine/core";
import { GLOBAL_STYLE } from "../../utils/styleUtils";

function CheckboxFilter() {
  return (
    <div css={style.wrapper}>
      <label css={style.title}>Brands</label>
      <div css={style.filterContainer}>
        <Input
          css={[style.input, GLOBAL_STYLE.mb(18)]}
          placeholder="Search brand"
        />
        <div css={style.checkboxContainer}>
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="All (18)"
          />
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="Konopelski Group (4)"
          />
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="Rice Inc (18)"
          />
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="Feil, Dooley and Reinger (18)"
          />
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="All (18)"
          />
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="All (18)"
          />
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="All (18)"
          />
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="All (18)"
          />
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="All (18)"
          />
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="All (18)"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckboxFilter;
