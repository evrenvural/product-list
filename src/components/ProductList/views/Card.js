import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Card.style";

function Card({ price, name }) {
  return (
    <div css={style.wrapper}>
      <>
        <div css={style.imageContainer}>
          <div css={style.imagePlaceHolder}></div>
        </div>
        <div css={style.price}>₺ {price}</div>
        <div css={style.title}>{name}</div>
      </>
      <div css={style.button}>Add</div>
    </div>
  );
}

export default Card;
