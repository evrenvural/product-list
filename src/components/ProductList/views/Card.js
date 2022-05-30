import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Card.style";

function Card({ item, addButtonClicked }) {
  return (
    <div css={style.wrapper}>
      <>
        <div css={style.imageContainer}>
          <div css={style.imagePlaceHolder}></div>
        </div>
        <div css={style.price}>₺ {item.price}</div>
        <div css={style.title}>{item.name}</div>
      </>
      <div css={style.button} onClick={() => addButtonClicked(item)}>
        Add
      </div>
    </div>
  );
}

export default Card;
