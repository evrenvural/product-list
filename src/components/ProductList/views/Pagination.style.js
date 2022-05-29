import { css } from "@emotion/react";
import * as utils from "../../../utils/styleUtils";

export const wrapper = css`
  margin-top: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: ${utils.FONT_WEIGHT.bold};
  color: ${utils.COLORS.gray};
`;

export const pageButtons = css`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 57px;
`;

export const pageButton = css`
  padding: 12px;
  border-radius: 2px;
`;

export const activePageButton = css`
  color: ${utils.COLORS.white};
  background-color: ${utils.COLORS.blue};
`;

export const prevAndNextBtn = css`
  &:hover {
    cursor: pointer;
  }
`;
