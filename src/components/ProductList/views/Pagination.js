import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Pagination.style";

function Pagination() {
  return (
    <div css={style.wrapper}>
      <div css={style.prevAndNextBtn}>{"< Prev"}</div>
      <div css={style.pageButtons}>
        <span css={[style.pageButton, style.activePageButton]}>1</span>
        <span css={style.pageButton}>2</span>
        <span css={style.pageButton}>3</span>
        <span css={style.pageButton}>4</span>
        <span css={style.pageButton}>5</span>
        <span css={style.pageButton}>6</span>
        <span css={style.pageButton}>7</span>
      </div>
      <div css={style.prevAndNextBtn}>{"Next >"}</div>
    </div>
  );
}

export default Pagination;
