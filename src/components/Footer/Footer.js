import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Footer.style";

function Footer() {
  return (
    <div css={style.wrapper}>
      <label>©2022 Altogic • Privacy Policy</label>
    </div>
  );
}

export default Footer;
