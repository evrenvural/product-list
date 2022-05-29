import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Item.style";
import { GLOBAL_STYLE } from "../../../utils/styleUtils";

function Item() {
  return (
    <>
      <div css={style.item}>
        <div>
          <div css={style.title}>Example Product</div>
          <label css={style.price}>₺14,99</label>
        </div>
        <div css={style.button}>
          <label css={style.upperAndLower}>-</label>
          <span css={GLOBAL_STYLE.mr(12)} />
          <span css={style.count}>
            <label>1</label>
          </span>
          <span css={GLOBAL_STYLE.ml(12)} />
          <label css={style.upperAndLower}>+</label>
        </div>
      </div>
      <div css={GLOBAL_STYLE.mt(18)} />
      <div css={style.line} />
    </>
  );
}

export default Item;
