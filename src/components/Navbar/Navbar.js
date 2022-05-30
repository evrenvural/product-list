import React from "react";
import { useSelector } from "react-redux";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Navbar.style";
import basketSvg from "../../assets/basket.svg";
import { Container } from "@mantine/core";
import _ from "lodash";

function Navbar() {
  const selectedTotalPrice = useSelector(
    (state) => state.item.selectedTotalPrice
  );
  return (
    <div css={style.wrapper}>
      <Container size="lg" css={style.container}>
        <div css={style.bag}>
          <img css={style.bagSvg} src={basketSvg} />
          <label css={style.bagTitle}>₺ {_.round(selectedTotalPrice, 2)}</label>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
