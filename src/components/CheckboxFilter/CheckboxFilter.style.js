import { css } from "@emotion/react";
import * as utils from "../../utils/styleUtils";

export const wrapper = css`
  // height: 274px;
`;

export const title = css`
  font-size: 13px;
  color: ${utils.COLORS.gray};
  font-weight: ${utils.FONT_WEIGHT.bold};
`;

export const filterContainer = css`
  margin-top: 12px;
  background-color: ${utils.COLORS.white};
  padding: 24px;
`;

export const input = css`
  color: ${utils.COLORS.moreLightGray};
`;

export const checkboxContainer = css`
  overflow: scroll;
  max-height: 142px;
`;

export const checkboxInput = css`
  .mantine-Checkbox-label {
    color: ${utils.COLORS.black};
    font-family: Open Sans;
    font-size: 16px;
  }
`;
