import { css } from "@emotion/react";
import * as utils from "../../utils/styleUtils";

export const wrapper = css`
  .mantine-RadioGroup-label {
    color: ${utils.COLORS.black};
    font-family: Open Sans;
  }
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
