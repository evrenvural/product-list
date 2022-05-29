// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Pagination.style";
import { useState } from "react";
import { Pagination as PaginationCore } from "@mantine/core";
import { COLORS } from "../../../utils/styleUtils";

function Pagination() {
  const [activePage, setPage] = useState(1);
  return (
    <PaginationCore
      css={style.wrapper}
      page={activePage}
      onChange={setPage}
      total={20}
      siblings={3}
      initialPage={10}
      color={COLORS.blue}
    />
  );
}

export default Pagination;
