import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./ProductList.style";
import TypeFilter from "./views/TypeFilter";

function ProductList() {
  return (
    <div css={style.wrapper}>
      <label css={style.title}>Products</label>
      <TypeFilter />
    </div>
  );
}

export default ProductList;
