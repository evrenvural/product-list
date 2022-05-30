import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Item.style";
import { GLOBAL_STYLE } from "../../../utils/styleUtils";
import _ from "lodash";

function Item({ item, increaseButtonClicked, decreaseButtonClicked }) {
  return (
    <>
      <div css={style.item}>
        <div>
          <div css={style.title}>{_.get(item, "data.name")}</div>
          <label css={style.price}>₺{_.get(item, "data.price")}</label>
        </div>
        <div css={style.button}>
          <label
            onClick={() => decreaseButtonClicked(_.get(item, "data"))}
            css={style.upperAndLower}
          >
            -
          </label>
          <span css={GLOBAL_STYLE.mr(12)} />
          <span css={style.count}>
            <label>{_.get(item, "count")}</label>
          </span>
          <span css={GLOBAL_STYLE.ml(12)} />
          <label
            onClick={() => increaseButtonClicked(_.get(item, "data"))}
            css={style.upperAndLower}
          >
            +
          </label>
        </div>
      </div>
      <div css={GLOBAL_STYLE.mt(18)} />
      <div css={style.line} />
    </>
  );
}

export default Item;
