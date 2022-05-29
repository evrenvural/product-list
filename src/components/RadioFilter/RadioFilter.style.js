import { css } from "@emotion/react";
import * as utils from "../../utils/styleUtils";

export const wrapper = css`
  // background-color: ${utils.COLORS.blue};
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

export const radioInput = css`
  .mantine-Radio-label {
    color: ${utils.COLORS.black};
    font-family: Open Sans;
  }
`;

export const mb18 = css`
  margin-bottom: 18px;
`;
