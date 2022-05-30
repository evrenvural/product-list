// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Pagination.style";
import { useState } from "react";
import { Pagination as PaginationCore } from "@mantine/core";
import { COLORS } from "../../../utils/styleUtils";
import { useSelector } from "react-redux";

function Pagination({ totalCount, onPageChanged, page }) {
  return (
    <PaginationCore
      css={style.wrapper}
      page={page}
      onChange={onPageChanged}
      total={totalCount}
      siblings={2}
      //initialPage={10}
      color={COLORS.blue}
    />
  );
}

export default Pagination;
