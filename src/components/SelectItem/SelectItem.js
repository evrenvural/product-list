import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./SelectItem.style";
import { GLOBAL_STYLE } from "../../utils/styleUtils";
import Item from "./views/Item";

function SelectItem() {
  return (
    <div css={style.wrapper}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />

      <div css={[style.totalPriceContainer, GLOBAL_STYLE.mt(18)]}>
        <div css={style.totalPrice}>₺39,97</div>
      </div>
    </div>
  );
}

export default SelectItem;
